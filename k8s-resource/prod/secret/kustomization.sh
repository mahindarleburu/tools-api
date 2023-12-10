#!/bin/bash

ENV_FILE=${HELM_SERVICE_NAME}.env

echo -e "\n=== K8S Kustomization ===\n"

# load env vars into kustomization yaml file
echo -e "[$HELM_SERVICE_NAME][PROCESSING] Parsing env file $ENV_FILE ..."
export $(grep -ve '^#' "$ENV_FILE" | xargs) && envsubst < kustomization-${COUNTRY}.tmpl > kustomization.yaml

# applying configs and secrets to k8s
echo -e "[$HELM_SERVICE_NAME][PROCESSING] Applying secrets to namespace '$K8S_NAMESPACE'..."
kubectl kustomize . > setting.yaml
kubectl apply -f setting.yaml
if [ $? -eq 0 ]; then
    echo -e "[$HELM_SERVICE_NAME][COMPLETED] Secrets of '$K8S_NAMESPACE' have been updated successfully!"
else
    echo -e "[$HELM_SERVICE_NAME][FAILED] Secrets of '$K8S_NAMESPACE' have not been updated successfully!"
fi

echo -e "@w@ ~ bye!\n"
