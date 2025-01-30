#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p public/fonts

# Download IBM Plex Sans Arabic fonts
curl -L "https://github.com/IBM/plex/raw/master/IBM-Plex-Sans-Arabic/fonts/complete/woff2/IBMPlexSansArabic-Regular.woff2" -o public/fonts/IBMPlexSansArabic-Regular.woff2
curl -L "https://github.com/IBM/plex/raw/master/IBM-Plex-Sans-Arabic/fonts/complete/woff2/IBMPlexSansArabic-Medium.woff2" -o public/fonts/IBMPlexSansArabic-Medium.woff2
curl -L "https://github.com/IBM/plex/raw/master/IBM-Plex-Sans-Arabic/fonts/complete/woff2/IBMPlexSansArabic-SemiBold.woff2" -o public/fonts/IBMPlexSansArabic-SemiBold.woff2
curl -L "https://github.com/IBM/plex/raw/master/IBM-Plex-Sans-Arabic/fonts/complete/woff2/IBMPlexSansArabic-Bold.woff2" -o public/fonts/IBMPlexSansArabic-Bold.woff2
