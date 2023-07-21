#!/bin/bash

csv_file="../sources/emissions_reduction_fund_register.csv"

read -r header < "$csv_file"

formatted_header=$(echo "$header" | awk 'BEGIN {FS=OFS=","} {
    for (i=1; i<=NF; i++) {
        gsub(/"/, "", $i);        # Remove existing double quotes
        gsub(/ /, "_", $i);       # Replace spaces with underscores
        if (length($i) > 32) {    # Check maximum character length (32)
            $i = substr($i, 1, 16) substr($i, length($i)-15); # Cut and join the first 16 and last 16 characters
        }
        $i = tolower($i);         # Convert to lowercase
        gsub(/^_+/, "", $i);      # Remove underscores from the beginning of the name
        gsub(/[^a-z0-9_]/, "", $i); # Remove invalid characters (only allow lowercase letters, digits, and underscores)
    }
    gsub(/,/, " ", $0);          # Replace commas with spaces
    print;
}')

formatted_label=$(echo "$header" | awk 'BEGIN {FS=OFS=","} {for (i=1; i<=NF; i++) { gsub(/"/, "", $i)} gsub(/,/, " ", $0); print}')

declare -a fields=($formatted_header)
declare -a fieldsLabel=($formatted_label)

# Check if both arrays have the same length
if [ ${#fields[@]} -ne ${#fieldsLabel[@]} ]; then
    echo "Error: The arrays fields and fieldsLabel must have the same length."
    exit 1
fi

# Iterate through the arrays
for ((i=0; i<${#fields[@]}; i++))
do
    field="${fields[i]}"
    fieldlabel="${fieldsLabel[i]}"
    lando drush field-create node dataset --field-name="$field" --field-label="$fieldlabel" --field-type=string_long --field-widget=text_textarea --is-required=1 --cardinality=1 --field-description=
done
