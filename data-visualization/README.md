# 数据可视化

 > 在遗传学、天⽓研究、政治和经济分析等众多领域，⼈们常常使⽤ Python来完成数据密集型⼯作。数据科学家使⽤ Python 编写了⼀系列优秀的可视化和分析⼯具，你可以轻易使⽤其中的⼤部分⼯具。⼀个流⾏的⼯具是Matplotlib，它是⼀个数学绘图库。本章将使⽤它来制作简单的绘图（plot），如折线图和散点图，还将基于随机游⾛的概念（根据⼀系列随机决策⽣成图形）⽣成⼀个更有趣的数据集。  

 > 这里还将使⽤ Plotly 包来分析掷骰⼦的结果，这个包⽣成的图形⾮常适合在数字设备上显⽰——不仅能根据显⽰设备的尺⼨⾃动调整⼤⼩，还具备众多交互特性，如在⽤户将⿏标指向图形的不同区域时，突出显⽰数据集的相应特征。学习使⽤ Matplotlib 和 Plotly，有助于初步掌握数据可视化技巧.  

 ## ⽣成数据

  ### 安装 Matplotlib

   ```shell
    conda install matplotlib
    # or
    pip install matplotlib
   ```

  ### 绘制简单的折线图 

   ```python
    import matplotlib.pyplot as plt

    squares = [1,4,9,16,25]

    # fig - 即figure，画窗  
    # ax  - 即axex，画窗中创建的笛卡尔坐标区
    fig,ax = plt.subplots()

    ax.plot(squares)

    plt.show()
   ```

   > ⾸先导⼊ pyplot 模块，并给它指定别名 plt，以免反复输⼊ pyplot。pyplot 模块包含很多⽤于⽣成图形和绘图的函数。  

   > 采取 Matplotlib 的⼀种常⻅做法——调⽤ subplots() 函数。这个函数可在⼀个图形（figure）中绘制⼀或多个绘图（plot）。  

   > 变量fig 表⽰由⽣成的⼀系列绘图构成的整个图形。变量 ax 表⽰图形中的绘图，在⼤多数情况下，使⽤这个变量来定义和定制绘图。  

   > 接下来调⽤ plot() ⽅法，它将根据给定的数据以有浅显易懂的⽅式绘制绘图。plt.show() 函数打开 Matplotlib 查看器并显⽰绘图。在查看器中，既可缩放和浏览绘图，还可单击磁盘图标将绘图保存起来。

  - 修改标签⽂字和线条粗细 

    ```python
        import matplotlib.pyplot as plt

        squares = [1,4,9,16,25]

        fig,ax = plt.subplots()

        ax.plot(squares,linewidth=3)
        # 设置图题并给坐标轴加上标签
        ax.set_title('Square Numbers',fontsize=24)
        ax.set_xlabel('Value',fontsize=12)
        ax.set_ylabel('Square of Value',fontsize=12)

        # 设置刻度标记的样式
        # ax.tick_params(axis='both',labelsize=12)
        ax.tick_params(labelsize=8)

        plt.show()
    ```

  - 校正绘图 

    > 图更容易看清后，我们发现数据绘制得并不正确：折线图的终点指出 4.0 的平⽅为 25。下⾯来修复这个问题。

    ```python
        import matplotlib.pyplot as plt

        input_values = [1,2,3,4,5]
        squares = [1,4,9,16,25]

        fig,ax = plt.subplots()

        ax.plot(input_values,squares,linewidth=3)

        ax.set_title('Square Numbers',fontsize=24)
        ax.set_xlabel('Value',fontsize=12)
        ax.set_ylabel('Square of Value',fontsize=12)

        ax.tick_params(labelsize=8)

        plt.show()
    ```

  - 使⽤内置样式 

    > Matplotlib 提供了很多已定义好的样式，这些样式包含默认的背景⾊、⽹格线、线条粗细、字体、字号等设置，让你⽆须做太多定制就能⽣成引⼈瞩⽬的可视化效果。要看到能在你的系统中使⽤的所有样式，可在终端会话中执⾏如下命令  

    ```shell

        import matplotlib.pyplot as plt 
        plt.style.available

        # ['Solarize_Light2', '_classic_test_patch', '_mpl-gallery', '_mpl-gallery-nogrid', 'bmh', 'classic', 'dark_background', 'fast', 'fivethirtyeight', 'ggplot', 'grayscale', 'seaborn-v0_8', 'seaborn-v0_8-bright', 'seaborn-v0_8-colorblind', 'seaborn-v0_8-dark', 'seaborn-v0_8-dark-palette', 'seaborn-v0_8-darkgrid', 'seaborn-v0_8-deep', 'seaborn-v0_8-muted', 'seaborn-v0_8-notebook', 'seaborn-v0_8-paper', 'seaborn-v0_8-pastel', 'seaborn-v0_8-poster', 'seaborn-v0_8-talk', 'seaborn-v0_8-ticks', 'seaborn-v0_8-white', 'seaborn-v0_8-whitegrid', 'tableau-colorblind10']

    ```

    ```python
        import matplotlib.pyplot as plt
        input_values = [1, 2, 3, 4, 5]
        squares = [1, 4, 9, 16, 25]
        plt.style.use('seaborn-v0_8')
        fig, ax = plt.subplots()
        --snip--
    ```

  - 使⽤ scatter() 绘制散点图并设置样式 

    > 有时候，需要绘制散点图并设置各个数据点的样式。例如，你可能想⽤⼀种颜⾊显⽰较⼩的值，⽤另⼀种颜⾊显⽰较⼤的值。在绘制⼤型数据集时，还可先对每个点都设置同样的样式，再使⽤不同的样式重新绘制某些点，以⽰突出。  

    ```python
        import matplotlib.pyplot as plt

        plt.style.use("seaborn-v0_8")
        fig,ax = plt.subplots()
        ax.scatter(2,4)

        plt.show()
    ```

    ```python
        import matplotlib.pyplot as plt

        plt.style.use("seaborn-v0_8")
        fig,ax = plt.subplots()
        ax.scatter(2,4,s=200)

        ax.set_title("Square Number",fontsize=24)
        ax.set_xlabel("Value",fontsize=12)
        ax.set_ylabel("Square of Value",fontsize=12)

        ax.tick_params(labelsize=12)

        plt.show()
    ```

  - 使⽤ scatter() 绘制⼀系列点 

    ```python
        import matplotlib.pyplot as plt
        x_values = [1, 2, 3, 4, 5]
        y_values = [1, 4, 9, 16, 25]
        plt.style.use('seaborn')
        fig, ax = plt.subplots()
        ax.scatter(x_values, y_values, s=100)
        # 设置图题并给坐标轴加上标签
        --snip--
    ```

  - ⾃动计算数据 

    > 下⾯是绘制 1000 个点的代码  

    ```python
        import matplotlib.pyplot as plt

        x_values = range(1,1001)
        y_values = [x**2 for x in x_values]

        plt.style.use("seaborn-v0_8")
        fig,ax = plt.subplots()
        ax.scatter(x_values,y_values,s=10)

        ax.set_title("Square Number",fontsize=24)
        ax.set_xlabel("Value",fontsize=12)
        ax.set_ylabel("Square of Value",fontsize=12)

        ax.tick_params(labelsize=12)

        # 设置每个坐标轴的取值范围
        ax.axis([0,1100,0,1_100_000])

        plt.show()

    ```

  - 定制刻度标记 

    > 在刻度标记表⽰的数⾜够⼤时，Matplotlib 将默认使⽤科学记数法。这通常是好事，因为如果使⽤常规表⽰法，很⼤的数将占据很多内存。  

    ```python
        # 设置每个坐标轴的取值范围
        ax.axis([0,1100,0,1_100_000])
        ax.ticklabel_format(style='plain')
    ```
  
  - 定制颜⾊ 

    ```python
        # 使⽤ RGB 颜⾊模式定制颜⾊。此时传递参数 color，并将其设置为⼀个元组，其中包含三个 0〜1 的浮点数
        # 值越接近 0，指定的颜⾊越深；值越接近 1，指定的颜⾊越浅。
        ax.scatter(x_values,y_values,s=10,color=(0,0.8,0))
        # ax.scatter(x_values,y_values,s=10,color='red')
    ```

  - 使⽤颜⾊映射 

    > 颜⾊映射（colormap）是⼀个从起始颜⾊渐变到结束颜⾊的颜⾊序列。在可视化中，颜⾊映射⽤于突出数据的规律。例如，你可能⽤较浅的颜⾊来显⽰较⼩的值，使⽤较深的颜⾊来显⽰较⼤的值。使⽤颜⾊映射，可根据精⼼设计的⾊标（color scale）准确地设置所有点的颜⾊。  

    > pyplot 模块内置了⼀组颜⾊映射。要使⽤这些颜⾊映射，需要告诉pyplot 该如何设置数据集中每个点的颜⾊。下⾯演⽰了如何根据每个点的y 坐标值来设置其颜⾊：  

    ```python
        ax.scatter(x_values,y_values,s=10,c=y_values,cmap=plt.cm.Blues)
    ```

    > 参数 c 类似于参数 color，但⽤于将⼀系列值关联到颜⾊映射。这⾥将参数 c 设置成了⼀个 y坐标值列表，并使⽤参数 cmap 告诉 pyplot 使⽤哪个颜⾊映射。这些代码将 y 坐标值较⼩的点显⽰为浅蓝⾊，将 y 坐标值较⼤的点显⽰为深蓝⾊  

    > 注意 要了解 pyplot 中所有的颜⾊映射，请访问https://matplotlib.org/stable/users/explain/colors/colormaps.html#sphx-glr-users-explain-colors-colormaps-py  

    ```python
        from matplotlib import colormaps
        list(colormaps)
        # ['magma', 'inferno', 'plasma', 'viridis', 'cividis', 'twilight', 'twilight_shifted', 'turbo', 'Blues', 'BrBG', 'BuGn', 'BuPu', 'CMRmap', 'GnBu', 'Greens', 'Greys', 'OrRd', 'Oranges', 'PRGn', 'PiYG', 'PuBu', 'PuBuGn', 'PuOr', 'PuRd', 'Purples', 'RdBu', 'RdGy', 'RdPu', 'RdYlBu', 'RdYlGn', 'Reds', 'Spectral', 'Wistia', 'YlGn', 'YlGnBu', 'YlOrBr', 'YlOrRd', 'afmhot', 'autumn', 'binary', 'bone', 'brg', 'bwr', 'cool', 'coolwarm', 'copper', 'cubehelix', 'flag', 'gist_earth', 'gist_gray', 'gist_heat', 'gist_ncar', 'gist_rainbow', 'gist_stern', 'gist_yarg', 'gnuplot', 'gnuplot2', 'gray', 'hot', 'hsv', 'jet', 'nipy_spectral', 'ocean', 'pink', 'prism', 'rainbow', 'seismic', 'spring', 'summer', 'terrain', 'winter', 'Accent', 'Dark2', 'Paired', 'Pastel1', 'Pastel2', 'Set1', 'Set2', 'Set3', 'tab10', 'tab20', 'tab20b', 'tab20c', 'grey', 'gist_grey', 'gist_yerg', 'Grays', 'magma_r', 'inferno_r', 'plasma_r', 'viridis_r', 'cividis_r', 'twilight_r', 'twilight_shifted_r', 'turbo_r', 'Blues_r', 'BrBG_r', 'BuGn_r', 'BuPu_r', 'CMRmap_r', 'GnBu_r', 'Greens_r', 'Greys_r', 'OrRd_r', 'Oranges_r', 'PRGn_r', 'PiYG_r', 'PuBu_r', 'PuBuGn_r', 'PuOr_r', 'PuRd_r', 'Purples_r', 'RdBu_r', 'RdGy_r', 'RdPu_r', 'RdYlBu_r', 'RdYlGn_r', 'Reds_r', 'Spectral_r', 'Wistia_r', 'YlGn_r', 'YlGnBu_r', 'YlOrBr_r', 'YlOrRd_r', 'afmhot_r', 'autumn_r', 'binary_r', 'bone_r', 'brg_r', 'bwr_r', 'cool_r', 'coolwarm_r', 'copper_r', 'cubehelix_r', 'flag_r', 'gist_earth_r', 'gist_gray_r', 'gist_heat_r', 'gist_ncar_r', 'gist_rainbow_r', 'gist_stern_r', 'gist_yarg_r', 'gnuplot_r', 'gnuplot2_r', 'gray_r', 'hot_r', 'hsv_r', 'jet_r', 'nipy_spectral_r', 'ocean_r', 'pink_r', 'prism_r', 'rainbow_r', 'seismic_r', 'spring_r', 'summer_r', 'terrain_r', 'winter_r', 'Accent_r', 'Dark2_r', 'Paired_r', 'Pastel1_r', 'Pastel2_r', 'Set1_r', 'Set2_r', 'Set3_r', 'tab10_r', 'tab20_r', 'tab20b_r', 'tab20c_r']
    ```

  - ⾃动保存绘图 

    > 如果要将绘图保存到⽂件中，⽽不是在 Matplotlib 查看器中显⽰它，可将plt.show() 替换为 plt.savefig()：  

    ```python
        plt.savefig('squares_plot.png', bbox_inches='tight')
    ```

    > 第⼀个实参指定要以什么⽂件名保存绘图，这个⽂件将被存储到scatter_squares.py 所在的⽬录中。第⼆个实参指定将绘图多余的空⽩区域裁剪掉。如果要保留绘图周围多余的空⽩区域，只需省略这个实参即可。你还可以在调⽤ savefig() 时使⽤ Path 对象，将输出⽂件存储到系统上的任何地⽅。  

  ### 随机游⾛ 

  - 创建 RandomWalk 类 

    > 为了模拟随机游⾛，我们将创建⼀个名为 RandomWalk 的类，⽤来随机地选择前进的⽅向。这个类需要三个属性：⼀个是跟踪随机游⾛次数的变量，另外两个是列表，分别存储随机游⾛经过的每个点的 x 坐标值和 y 坐标值。
    
    random_walk.py

    ```python
        from random import choice

        class RandomWalk:
            """⼀个⽣成随机游⾛数据的类"""

            def __init__(self,num_points=5000):
                """初始化随机游⾛的属性"""
                self.num_points = num_points

                # 所有随机游⾛都始于(0, 0)
                self.x_values = [0]
                self.y_values = [0]
    ```

  - 选择⽅向 

    > 下⾯使⽤ fill_walk() ⽅法来⽣成游⾛包含的点。请将这个⽅法添加到刚才创建的 RandomWalk 类之下：  

    ```python

        def fill_walk(self):
            """计算随机游⾛包含的所有点"""

            # 不断游⾛，直到列表达到指定的⻓度
            while len(self.x_values) < self.num_points:
                # 决定前进的⽅向以及沿这个⽅向前进的距离
                x_direction = choice([1,-1])
                x_distance = choice([0,1,2,3,4])
                x_step = x_direction * x_distance

                y_direction = choice([1,-1])
                y_distance = choice([0,1,2,3,4])
                y_step = y_direction * y_distance

                # 拒绝原地踏步
                if x_step == 0 and y_step == 0:
                    continue

                # 计算下一个点的 x 和 y 值
                x = self.x_values[-1] + x_step
                y = self.y_values[-1] + y_step

                self.x_values.append(x)
                self.y_values.append(y)
    ```

  - 绘制随机游⾛图 

    ```python
        import matplotlib.pyplot as plt

        from random_walk import RandomWalk

        # 创建⼀个 RandomWalk 实例
        rw = RandomWalk()
        rw.fill_walk()

        # 将所有的点都绘制出来
        plt.style.use("classic")
        fig,ax = plt.subplots()
        ax.scatter(rw.x_values,rw.y_values,s=15)
        # 默认情况下，Matplotlib 独⽴地缩放每个轴，⽽这将⽔平或垂直拉伸绘图。为避免这种问题，这⾥使⽤ set_aspect() 指定两条轴上刻度的间距必须相等
        ax.set_aspect('equal')

        plt.show()
    ```

  - 模拟多次随机游⾛ 

    ```python
        import matplotlib.pyplot as plt

        from random_walk import RandomWalk

        while True:
            print(10000)
            rw = RandomWalk()
            rw.fill_walk()
            # 将所有的点都绘制出来
            plt.style.use("classic")
            fig,ax = plt.subplots()
            ax.scatter(rw.x_values,rw.y_values,s=15)
            ax.set_aspect('equal')
            plt.show()
            print(200000)
            keep_running = input("Make another walk? (y/n):")
            if keep_running == 'n':
                break

    ```

  - 设置随机游⾛图的样式 

    - 给点着⾊ 

        > 我们将使⽤颜⾊映射来指出游⾛中各个点的先后顺序，并删除每个点的⿊⾊轮廓，让其颜⾊更加明显。为了根据游⾛中各个点的先后顺序进⾏着⾊，传递参数 c，并将其设置为⼀个列表，其中包含各点的先后顺序。由于这些点是按顺序绘制的，因此给参数 c 指定的列表只需包含数 0〜4999，如下所⽰：   

        ```python
            import matplotlib.pyplot as plt

            from c import RandomWalk

            while True:
                rw = RandomWalk()
                rw.fill_walk()
                # 将所有的点都绘制出来
                plt.style.use("classic")
                fig,ax = plt.subplots()
                point_numbers = range(rw.num_points)
                ax.scatter(rw.x_values,rw.y_values,s=15,c=point_numbers,cmap=plt.cm.Blues,edgecolor='none')
                ax.set_aspect('equal')
                plt.show()

                keep_running = input("Make another walk? (y/n):")
                if keep_running == 'n':
                    break

        ```

    - 重新绘制起点和终点 

        ```python
            --snip--
            while True:
                --snip--
                ax.scatter(rw.x_values, rw.y_values, c=point_numbers,cmap=plt.cm.Blues,edgecolors='none', s=15)
                ax.set_aspect('equal')
                # 突出起点和终点
                ax.scatter(0, 0, c='green', edgecolors='none', s=100)
                ax.scatter(rw.x_values[-1], rw.y_values[-1], c='red',
                edgecolors='none',
                s=100)
                plt.show()
                --snip--
        ```

    - 隐藏坐标轴 

        ```python
            --snip--
            while True:
              --snip--
              ax.scatter(rw.x_values[-1], rw.y_values[-1], c='red',
              edgecolors='none',
              s=100)
              # 隐藏坐标轴
              ax.get_xaxis().set_visible(False)
              ax.get_yaxis().set_visible(False)
              plt.show()
            --snip--
        ```

    - 增加点的个数 

      ```python
        --snip--
        while True:
          # 创建⼀个 RandomWalk 实例
          rw = RandomWalk(50_000)
          rw.fill_walk()
          # 将所有的点都绘制出来
          plt.style.use('classic')
          fig, ax = plt.subplots()
          point_numbers = range(rw.num_points)
          ax.scatter(rw.x_values, rw.y_values, c=point_numbers,cmap=plt.cm.Blues,edgecolors='none', s=1)
          --snip--
      ```
    
    - 调整尺⼨以适应屏幕 

      ```python
        fig, ax = plt.subplots(figsize=(10, 6))
      ```

      > 参数 figsize 是⼀个元组，向 Matplotlib 指出绘图窗⼝的尺⼨，单位为英⼨。  

      > Matplotlib 假定屏幕的分辨率为每英⼨ 100 像素。如果上述代码指定的绘图尺⼨不合适，可根据需要调整数值。  
      如果知道当前系统的分辨率，可通过参数 dpi 向 plt.subplots() 传递该分辨率：  
      
      ```python 
      fig, ax = plt.subplots(figsize=(10, 6), dpi=128) #figure 变大
      ```
 
 ## 使⽤ Plotly 模拟掷骰⼦ 

  > 使⽤ Plotly 来⽣成交互式图形。当需要创建要在浏览器中显⽰的图形时，Plotly 很有⽤，因为它⽣成的图形将⾃动缩放，以适应观看者的屏幕。Plotly ⽣成的图形还是交互式的：当⽤户将⿏标指向特定的元素时，将显⽰有关该元素的信息。  
  使⽤ Plotly Express 来创建初始图形。PlotlyExpress 是 Plotly 的⼀个⼦集，致⼒于让⽤户使⽤尽可能少的代码来⽣成绘图。我们将先使⽤⼏⾏代码⽣成初始绘图，在确定输出正确后再像使⽤Matplotlib 那样对绘图进⾏定制。 

  > 在这个例子中，我们将对掷骰⼦的结果进⾏分析。在掷⼀个 6 ⾯的常规骰⼦时，可能出现的结果为 1〜6 点，且出现每种结果的可能性相同。  
  然⽽，如果同时掷两个骰⼦，某些点数出现的可能性将⽐其他点数⼤。为了确定哪些点数出现的可能性最⼤，要⽣成⼀个表⽰掷骰⼦结果的数据集，并根  据结果绘图。

  ### 安装 Plotly 

   ```shell
      pip install plotly
      pip install pandas
      # or
      conda install plotly
      conda install pandas
   ```

  ### 创建 Die 类 

   ```python
      from random import randint

      class Die:
        """表⽰⼀个骰⼦的类"""
        def __init__(self, num_sides=6):
          """骰⼦默认为 6 ⾯的"""
          self.num_sides = num_sides

        def roll(self):
          """"返回⼀个介于 1 和骰⼦⾯数之间的随机值"""
          return randint(1, self.num_sides)
   ```
  
  ### 掷骰⼦ 

   ```python

      from die import Die
      # 创建⼀个 D6
      die = Die()
      # 掷⼏次骰⼦并将结果存储在⼀个列表中
      results = []
      for roll_num in range(100):
        result = die.roll()
        results.append(result)
      print(results)
   ```

  ### 分析结果 

   ```python
      --snip--
      # 掷⼏次骰⼦并将结果存储在⼀个列表中
      results = []
      for roll_num in range(1000):
        result = die.roll()
        results.append(result)
      # 分析结果
      frequencies = []
      poss_results = range(1, die.num_sides+1)
      for value in poss_results:
        frequency = results.count(value)
        frequencies.append(frequency)
      print(frequencies)
   ```
  
  ### 绘制直⽅图 

   ```python
      import plotly.express as px
      from die import Die
      --snip--
      for value in poss_results:
        frequency = results.count(value)
        frequencies.append(frequency)
      # 对结果进⾏可视化
      fig = px.bar(x=poss_results, y=frequencies)
      fig.show()
   ```
 
  ### 定制绘图 

   ```python
      --snip--
      # 对结果进⾏可视化
      title = "Results of Rolling One D6 1,000 Times"
      labels = {'x': 'Result', 'y': 'Frequency of Result'}
      fig = px.bar(x=poss_results, y=frequencies, title=title,labels=labels)
      fig.show()
   ```

  ### 同时掷两个骰⼦ 

   ```python
      import plotly.express as px
      from die import Die

      # 创建两个 D6
      die_1 = Die()
      die_2 = Die()
      # 掷骰⼦多次，并将结果存储到⼀个列表中
      results = []
      for roll_num in range(1000):
        result = die_1.roll() + die_2.roll()
        results.append(result)
      # 分析结果
      frequencies = []
      max_result = die_1.num_sides + die_2.num_sides
      poss_results = range(2, max_result+1)
      for value in poss_results:
        frequency = results.count(value)
        frequencies.append(frequency)
      # 可视化结果
      title = "Results of Rolling Two D6 Dice 1,000 Times"
      labels = {'x': 'Result', 'y': 'Frequency of Result'}
      fig = px.bar(x=poss_results, y=frequencies, title=title,labels=labels)
      fig.show()
   ```

  ### 进⼀步定制 

   ```python
      # 进⼀步定制图形
      fig.update_layout(xaxis_dtick=1)
      fig.show()
   ```
  
  ### 保存图形

   ```python
      # 保存图形
      fig.write_html('dice_visual.html')
   ```

  > write_html() ⽅法接受⼀个参数：要写⼊的⽂件的名称。如果你只提供了⽂件名，这个⽂件将被保存到 .py ⽂件所在的⽬录中。  

 ## 下载数据 

  > 以两种常⻅格式（CSV 和 JSON）存储的数据并将其可视化。⾸先使⽤ Python 模块 csv 来处理以 CSV 格式存储的天⽓数据，找出两个截然不同的地区在⼀段时间内的最⾼温度和最低温度。然后使⽤ Matplotlib 根据下载的数据创建图形，展⽰这两个地区的温度变化。最后使⽤ json 模块访问以 GeoJSON 格式存储的地震数据，并使⽤ Plotly 绘制⼀幅散点图，展⽰这些地震的位置和强度。  

  ### CSV ⽂件格式 

   > csv 模块包含在 Python 标准库中，可⽤于解析 CSV ⽂件中的数据⾏ 

   ```python
    from pathlib import Path
    import csv

    path = Path('weather_data/sitka_weather_07-2021_simple.csv')
    lines = path.read_text().splitlines()
    reader = csv.reader(lines)
    header_row = next(reader)
    print(header_row)
   ```
  
  ### 打印⽂件头及其位置

   ```python
    --snip--
    reader = csv.reader(lines)
    header_row = next(reader)
    # 打印⽂件头及其位置
    for index, column_header in enumerate(header_row):
      print(index, column_header)

   ```

  ### 提取并读取数据

   ```python
    --snip--
    reader = csv.reader(lines)
    header_row = next(reader)
    # 提取最⾼温度
    highs = []
    for row in reader:
      high = int(row[4])
      highs.append(high)
    print(highs)
   ```

  ### 绘制价格图 

   ```python
    from pathlib import Path
    import csv
    import matplotlib.pyplot as plt
    import os

    filename = os.path.join(os.path.dirname(__file__), 'car.csv')
    path = Path(filename)
    lines = path.read_text().splitlines()
    --snip--
    # 根据最⾼温度绘图
    plt.style.use('seaborn')
    fig, ax = plt.subplots()
    ax.plot(highs, color='red')
    # 设置绘图的格式
    ax.set_title("Daily High Temperatures, July 2021", fontsize=24)
    ax.set_xlabel('', fontsize=16)
    ax.set_ylabel("Temperature (F)", fontsize=16)
    ax.tick_params(labelsize=16)
    plt.show()
   ```
  
  ### datetime 模块 

   ```python
    import os
    import csv
    from pathlib import Path
    from datetime import datetime

    filename = os.path.join(os.path.dirname(__file__),"weather.csv")
    path = Path(filename)
    lines = path.read_text().splitlines()
    reader = csv.reader(lines)


    for row in list(reader)[1:]:
        # print(row)
        birthdate = datetime.strptime(row[0], '%Y-%m-%d')
        print(birthdate,type(birthdate))
   ```

   | 参数 | 含义 |
   | - | - |
   | %A | 星期⼏，如 Monday |
   | %B | ⽉份名，如 January |
   | %m | ⽤数表⽰的⽉份（01〜12） |
   | %d | ⽤数表⽰的⽉份中的⼀天（01〜31） |
   | %Y | 四位数的年份，如 2019 |
   | %y | 两位数的年份，如 19 |
   | %H | 24 ⼩时制的⼩时数（00〜23） |
   | %I | 12 ⼩时制的⼩时数（01〜12） |
   | %p | am 或 pm |
   | %M | 分钟数（00〜59） |
   | %S | 秒数（00〜61） |

  ### 在图中添加⽇期

   ```python
    import os
    import csv
    from pathlib import Path
    from datetime import datetime
    import matplotlib.pyplot as plt

    filename = os.path.join(os.path.dirname(__file__),"weather.csv")
    path = Path(filename)
    lines = path.read_text().splitlines()
    reader = csv.reader(lines)


    dates,highs = [],[]
    for row in list(reader)[1:]:
        # print(row)
        datetime = datetime.strptime(row[0], '%Y-%m-%d')
        high = float(row[2])
        dates.append(datetime)
        highs.append(high)

    plt.style.use("seaborn-v0_8")
    fig,ax = plt.subplots()
    ax.plot(dates,highs,color='blue')

    ax.set_title("age of employee")
    ax.set_xlabel("")
    fig.autofmt_xdate()
    ax.set_ylabel("highs")

    ax.tick_params(labelsize=16)

    plt.show()


   ```
 
  ### 再绘制⼀个数据系列 

   ```python

    import os
    import csv
    from pathlib import Path
    from datetime import datetime
    import matplotlib.pyplot as plt

    filename = os.path.join(os.path.dirname(__file__),"weather.csv")
    path = Path(filename)
    lines = path.read_text().splitlines()
    reader = csv.reader(lines)


    dates,highs,lows = [],[],[]
    for row in list(reader)[1:]:
        # print(row)
        datetime = datetime.strptime(row[0], '%Y-%m-%d')
        high = float(row[2])
        dates.append(datetime)
        highs.append(high)
        lows.append(float(row[3]))

    plt.style.use("seaborn-v0_8")
    fig,ax = plt.subplots()
    ax.plot(dates,highs,color='blue')
    ax.plot(dates,lows,color='red')

    ax.set_title("age of employee")
    ax.set_xlabel("")
    fig.autofmt_xdate()
    ax.set_ylabel("Temperature")

    ax.tick_params(labelsize=16)

    plt.show()

   ```

  ### 给图中区域着⾊ 

   ```python
      --snip--
      # 根据最低和最⾼温度绘图
      plt.style.use('seaborn')
      fig, ax = plt.subplots()
      ax.plot(dates, highs, color='red', alpha=0.5)
      ax.plot(dates, lows, color='blue', alpha=0.5)
      ax.fill_between(dates, highs, lows, facecolor='blue', alpha=0.1)
      --snip--
   ```