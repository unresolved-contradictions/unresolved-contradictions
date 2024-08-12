+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
draft = true
categories = ['']
description = ''
keywords = ['']
slug = '{{ .File.ContentBaseName }}'
+++