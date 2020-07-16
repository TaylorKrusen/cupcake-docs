#!/bin/bash

# Quick wrapper for how to run my code generator
# Will be edited as necessary (e.g. with the correct path)
<<<<<<< HEAD
PYTHONPATH=stone python -m stone.cli -a:all -w check -w files -w file_properties -w sharing -w team -w auth -w account mdx.stoneg.py ../src spec/*.stone
=======
PYTHONPATH=stone python -m stone.cli -a:all -w check -w file_properties -w sharing -w team -w auth -w account -w files mdx.stoneg.py ../src spec/*.stone
>>>>>>> 3ab66a3a698efda035490b63c31c486ac59c2a9b
