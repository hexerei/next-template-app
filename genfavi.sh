#!/bin/bash

# initialize script vars
script=$( basename "$0" )
version="1.0.0"
verbose="false"
baseimg=$1
outdir="public"
bigico=0
optstring=":ho:b"

# help text
function usage {
  local txt=(
    "Favicon Generator - v$version"
    "Requires ImageMagick for conversion."
    ""
    "Usage: ./$script sourceimage [options]"
    ""
    "sourceimage  Source image file (minimal size 310x310 px)"
    ""
    "Options:"
    " -h      Print help"
    " -b      Create favicon.ico with all sizes (default only 16x16 and 32x32)"
    " -o DIR  Write images to given directory (defaults to public)"
    " -v      Increase verbosity"
  )
  printf "%s\n" "${txt[@]}"
}

# error message
function badUsage {
  local message="$1"
  local txt=(
    "For an overview of this command, execute:"
    "./$script -h"
  )
  [[ $message ]] && printf "$message\n"
  printf "%s\n" "${txt[@]}"
  exit 1
}

function log {
  local message="${@}"
  if [[ "${verbose}" == true ]]; then
    echo "${message}"
  fi
}

# check if arguments where passed
if [[ ${#} -eq 0 ]]; then
  badUsage "No arguments given."
fi

# allow -h as first and only option
case ${baseimg} in
  "-h") usage; exit 0;;
esac

# otherwise expect base image to be the first argument
if [ ! -f ${baseimg} ]; then
  badUsage "First argument must be the base image"
fi

# parse rest of options
shift $OTIND+1
while getopts :ho:bv arg; do
  case ${arg} in
    v)
      verbose="true"
      log "Verbose mode is ON"
      ;;
    h)
      usage
      ;;
    o)
      if [ -d "$OPTARG" ]; then
        outdir="$OPTARG"
        log "Writing favicons to $outdir"
      else
        badUsage "ERROR: -o param must be a directory"
      fi
      ;;
    b)
      bigico=1
      log "Using large icon!"
      ;;
    :)
      badUsage "$0: Must supply an argument to -$OPTARG." >&2
      ;;
    ?)
      badUsage "Invalid option: -${OPTARG}."
      ;;
  esac
done

log "Generating favicons..."
# android icon png
log "Writing Android icon as PNG..."
convert ${baseimg} -resize 192x192\! ${outdir}/android-icon-192x192.png
# apple icon png's
log "Writing Apple icons as PNGs..."
for n in 57 60 72 76 114 120 144 152 180
do
  convert ${baseimg} -resize ${n}x${n}\! ${outdir}/apple-icon-${n}x${n}.png
done
# default favicon png's
log "Writing Favicon icons as PNGs..."
if [ "$bigico" -eq 1 ]; then
  for n in 16 24 32 48 64 96 256
  do
    convert ${baseimg} -resize ${n}x${n}\! ${outdir}/favicon-${n}x${n}.png
  done
else
  for n in 16 32 96 256
  do
    convert ${baseimg} -resize ${n}x${n}\! ${outdir}/favicon-${n}x${n}.png
  done
fi
# microsoft icon png's
log "Writing Microsoft icons as PNGs..."
for n in 70 144 150 310
do
  convert ${baseimg} -resize ${n}x${n}\! ${outdir}/ms-icon-${n}x${n}.png
done
# finally favicon.ico
if [ "$bigico" -eq 1 ]; then
  log "Writing favicon.ico file with all sizes..."
  convert ${outdir}/favicon-16x16.png ${outdir}/favicon-24x24.png ${outdir}/favicon-32x32.png ${outdir}/favicon-48x48.png ${outdir}/favicon-64x64.png ${outdir}/favicon.ico
else
  log "Writing favicon.ico file with default sizes..."
  convert ${outdir}/favicon-16x16.png ${outdir}/favicon-32x32.png ${outdir}/favicon.ico
fi
log "...finished processing."