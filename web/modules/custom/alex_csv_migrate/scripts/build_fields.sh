#!/bin/bash
declare -a fields=("project_proponent" "project_name" "project_id" "method" "method_url" "method_type" "project_description" "date_project_registered" "project_location" "project_location_postcode" "project_area" "project_mapping_file_url" "carbon_est_area_mapping_file_url" "carbon_est_area_sup_info" "regional_nrm_plan" "joint_implementation_project" "carbon_maintenance_obligation" "conditional_reg_approvals" "conditional_rel_interest_holders" "permanence_period" "permanence_period_finish_date" "contracted_on" "contract_id" "kaccus_units_issued_person" "nkaccus_units_issued_person" "notes")
declare -a numberfields=("accus_total_units_issued" "kaccus_total_units_issued" "kaccus_units_2012_13" "kaccus_units_2013_14" "kaccus_units_2014_15" "kaccus_units_2015_16" "kaccus_units_2016_17" "kaccus_units_2017_18" "kaccus_units_2018_19" "kaccus_units_2019_20" "kaccus_units_2020_21" "kaccus_units_2021_22" "kaccus_units_2022_23" "kaccus_units_2023_24" "kaccus_units_relinquished" "nkaccus_total_units_issued" "nkaccus_units_2012_13" "nkaccus_units_2013_14" "nkaccus_units_2014_15" "nkaccus_units_2015_16" "nkaccus_units_2016_17" "nkaccus_units_2017_18" "nkaccus_units_2018_19" "nkaccus_units_2019_20" "nkaccus_units_2020_21" "nkaccus_units_2021_22" "nkaccus_units_2022_23" "nkaccus_units_2023_24" "nkaccus_units_relinquished")

if [[ $# -eq 0 ]] || [[ $1 == "textfields" ]]
then
    for field in "${fields[@]}"
    do
        lando drush field-create node dataset --field-name=$field --field-label=$field --field-type=string_long --field-widget=text_textarea --is-required=1 --cardinality=1 --field-description=
    done
fi

if [[ $# -eq 0 ]] || [[ $1 == "numberfields" ]]
then
    for field in "${numberfields[@]}"
    do
        lando drush field-create node dataset --field-name=$field --field-label=$field --field-type=integer --field-widget=number --is-required=1 --cardinality=1 --field-description=
    done
fi