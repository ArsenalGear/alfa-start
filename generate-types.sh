#!/bin/bash
rm -rf ./src/shared/types/generated-types
npx @openapitools/openapi-generator-cli generate -i http://localhost:3030/api/docs-json -g typescript-nestjs -o ./.generated-types --additional-properties=fileNaming=kebab-case
mv ./.generated-types/model/models.ts ./.generated-types/model/index.ts
cp -r ./.generated-types/model ./src/shared/types/generated-types
rm -rf ./.generated-types
yarn prettier --write "./src/shared/types/generated-types/*.ts"
yarn eslint "./src/shared/types/generated-types/*.ts" --fix
