#!/bin/bash

# Quick wrapper for how to run my code generator
# Will be edited as necessary (e.g. with the correct path)
PYTHONPATH=stone python -m stone.cli -a:all -w check -w file_properties -w sharing -w team mdx.stoneg.py ../src spec/*.stone