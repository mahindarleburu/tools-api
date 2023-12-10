#!/bin/sh
  
sed -i "s,^appVersion.*,appVersion: $CI_COMMIT_SHORT_SHA," helm/Chart.yaml
