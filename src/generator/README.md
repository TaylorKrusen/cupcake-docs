To run the markdown generator

1. Install stone. Following the instructions at https://github.com/dropbox/stone
2. Download the API spec.  https://github.com/dropbox/dropbox-api-spec
3. Point the generator to the target API spec

````
stone -a :all mdx.stoneg.py OUTPUT_DIR INPUT_DIR/*.stone