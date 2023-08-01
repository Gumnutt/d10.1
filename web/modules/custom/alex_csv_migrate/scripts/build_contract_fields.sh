#!/bin/bash

textfield_keys=("carbon_abatement_contract_id" "contractor_name" "projects" "project_id" "delivery_obligation" "conditions_precedent_contract" "actual_contract_end_date" "contract_status" "auction_date")
textfield_labels=("Carbon Abatement Contract ID" "Contractor name" "Projects" "Project ID" "Delivery obligation" "Subject to Conditions Precedent at time of contract" "Actual contract end date" "Status" "Auction date")

integerfield_keys=("original_volume_of_abatement" "current_volume_of_abatement" "volume_of_abatement")
integerfield_labels=("Original volume of abatement committed under contract" "Current volume of abatement committed under Optional Delivery contract" "Volume of abatement sold to the Commonwealth under contract")

decimalfield_keys=("delivery_period_in_years" "total_contract_length" "contract_duration_commence_date" "contract_duration_contract_date")
decimalfield_labels=("Delivery period in years (as set out in the contract)" "Total contract length including time to fulfil Conditions Precedent (as set out in the contract)" "Actual contract duration from commencement date" "Actual contract duration from contract date")

if [[ $# -eq 0 ]] || [[ $1 == "textfields" ]]
then
    for i in ${!textfield_keys[*]}
    do
      echo lando drush field-create node contract --field-name=${textfield_keys[$i]} --field-label=\"${textfield_labels[$i]}\" --field-type=string_long --field-widget=text_textarea --is-required=0 --cardinality=1 --field-description=
    done
fi

if [[ $# -eq 0 ]] || [[ $1 == "integerfields" ]]
then
    for i in ${!integerfield_keys[*]}
    do
      echo lando drush field-create node contract --field-name=${integerfield_keys[$i]} --field-label=\"${integerfield_labels[$i]}\" --field-type=integer --field-widget=number --is-required=0 --cardinality=1 --field-description=
    done
fi

if [[ $# -eq 0 ]] || [[ $1 == "decimalfields" ]]
then
    for i in ${!decimalfield_keys[*]}
    do
      echo lando drush field-create node contract --field-name=${decimalfield_keys[$i]} --field-label=\"${decimalfield_labels[$i]}\" --field-type=decimal --field-widget=number --is-required=0 --cardinality=1 --field-description=
    done
fi