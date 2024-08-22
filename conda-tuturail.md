# Conda 快速入门

 ## 安装 

  - 安装虚拟环境 

    > 官网安装地址  
    > https://docs.anaconda.com/free/miniconda/index.html 

  - conda 使用

    > 官方文档  
    > https://docs.conda.io/  
    > https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html

  - 创建虚拟环境 

    ```shell
      # conda create --name 虚拟环境名称 python==版本号
      conda create --name ai_learn python==3.10
    ```

  - 列出所有虚拟环境

    ```shell
      conda info --envs
    ```
  
  - 激活/切换虚拟环境

    ```shell
      # conda activate 虚拟环境名称
      conda activate py_learn 
    ```
  - 推出虚拟环境

    ```shell
      # conda deactivate 虚拟环境名称
      conda deactivate py_learn 
    ```

  - 安装python library (包或库)

    ```shell
      conda install 包名
      or
      pip install 包名
      # 临时换清华的源
      pip install 包名  -i https://pypi.tuna.tsinghua.edu.cn/simple
    ```

  - 其他命令 

    > 其他命令官网地址  
    > https://docs.conda.io/projects/conda/en/latest/commands/index.html

  - 安装JupyterLab

    ```shell
      pip install jupyterlab
    ```

  - 启动JupyterLab

    ```shell
      # 切换到conda的虚拟环境 
      jupyter lab
    ```

  - 后面会涉及的库(可以提前安装)

    ```shell

      pip install numpy
      pip install matplotlib

    ```