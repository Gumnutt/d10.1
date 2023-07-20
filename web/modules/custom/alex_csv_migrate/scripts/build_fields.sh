#!/bin/bash

csv_file="web/modules/custom/alex_csv_migrate/sources/emissions_reduction_fund_register.csv"

read -r header < "$csv_file"

# Use awk to wrap each name with double quotes, convert to lowercase, and replace commas with spaces
formatted_header=$(echo "$header" | awk 'BEGIN {FS=OFS=","} {for (i=1; i<=NF; i++) { gsub(/"/, "", $i); $i=tolower($i); gsub(/ /, "_", $i) } gsub(/[^,]+/, "\"&\"", $0); gsub(/,/, " ", $0); print}')

declare -a fields=($formatted_header)

# Define your array of fields
for field in "${fields[@]}"
do
    lando drush field-create node dataset --field-name=$field --field-label=$field --field-type=string_long --field-widget=text_textarea --is-required=1 --cardinality=1 --field-description=
done
