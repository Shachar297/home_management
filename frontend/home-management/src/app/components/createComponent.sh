cd ..


read -p "Component (1) ? or Service (2) ? " action

if [[ $action -eq 1 ]]; then
    read -p "Component Name ? > " componentName
    ng g c components/$componentName -m modules/app
else 
    read -p "Service Name ? > " serviceName
    ng g s services/$serviceName
fi
