#!/bin/bash

# Define your array of fields
declare -a fields=("field1" "field2" "field3" "field4" "field5")
for field in "${fields[@]}"
do
    lando drush field-create node page --field-name=$field --field-label=$field --field-type=string --field-widget=string_textfield --is-required=1 --cardinality=2 --field-description=
done