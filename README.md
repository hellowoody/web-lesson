# 变量和简单的数据类型

 ## 变量

  ### 赋值和打印

   ```python
    msg = "hello world"

    print('msg',msg)
   ```

  ### 变量的命名和使用

   - 变量名只能包含字母、数字和下划线。能以字母或下划线打头，不能以数字打头。
   - 变量名不能包含空格
   - 不要将关键字和函数名用作变量名，如print
   - python3中 Unicode字符或中文也支持，但不推荐
   - 变量名对大小写敏感，现阶段推荐小写，因为大写的变量一般有其他含义

  ### 同时给多个变量赋值

   ```
    x, y, z = 0, 0, 0
   ```
  
  ### 字符串

   - 单引号双引号

   - 首字母大写

      ```python

        msg = "hello world"
        print(msg.title())  # Hello World

      ```

   - 大小写

      ```python

        msg = "hello world" 
        print(msg.upper())  # HELLO WORLD
        print(msg.lower())  # hello world

      ```

   - 模板字符串/格式化字符串

      ```python

        a = "hello"
        b = "world"
        print(f"{a} {b}")  # hello world
        print(f'{a} {b}')  # hello world

      ```

   - 制表符(tab)，换行符

      ```python
        msg = "hello\tworld"
        print(msg)  # hello    world

        line = "hello\nworld"
        print(line)

        # hello
        # world

        print("languages:\n\tpython\n\tjavascript\n\tC")
        #
        # languages:
        #    python
        #    javascript
        #    C
        # #
      ```

   - 删除空白

      ```python
        msg = "  hello  world  "

        print(msg.strip())   # hello  world
        print(msg.lstrip())  # hello  world
        print(msg.rstrip())  #  hello  world
      ```

   - 删除前缀 后缀

      ```python
        url = "https://baidu.com"
        print(url.removeprefix("https://"))
        tmp = url.removeprefix("https://")
        print(tmp.removesuffix(".com")) # baidu

      ```
  
  ### 常量

   > 常量（constant）是在程序的整个⽣命周期内都保持不变的变量。Python 没有内置的常量类型，但 Python 程序员会使⽤全⼤写字⺟来指出应将某个变量视为常量，其值应始终不变：

   ```python
   MYSQL_URL = "http://localhost:3306/xxx"
   ```

 ## 数 

  ### 整数简单计算

  ```python
  
  print(1+2)
  print(1-2)
  print(1*2)
  print(1/2)
  print(2**3) # 幂运算
  print(2+3*3) # 多项式运算
  
  ```

  ### 浮点数精度损失

  ```python

  print(0.1+0.2) # 0.30000000000004    

  ```

  ### 整数和浮点

   - 将任意两个数相除，结果总是浮点数，即便这两个数都是整数且能整除
   - 在其他任何运算中，如果⼀个操作数是整数，另⼀个操作数是浮点数，结果也总是浮点数，即便结果原本为整数
 
 ## 注释

  > 在 Python 中，注释⽤井号（#）标识。井号后⾯的内容都会被 Python 解释器忽略，如下所⽰：  

  ```python
    # 向⼤家问好
    print("Hello Python people!")
  ```

# 列表

  > 列表（list）由⼀系列按特定顺序排列的元素组成。你不仅可以创建包含字⺟表中所有字⺟、数字 0〜9 或所有家庭成员姓名的列表，还可以将任何东⻄加⼊列表，其中的元素之间可以没有任何关系。列表通常包含多个元素，因此给列表指定⼀个表⽰复数的名称（如 letters、digits 或names）是个不错的主意。  

  ```python
  
  letters = ['a','b','c']

  print(letters)

  ```
 ### 访问列表元素

  ```python
  
    letters = ['a','b','c']

    print(letters[0])
    print(letters[1])
    print(letters[2])

    print(letters[-1])
    print(letters[-2])

    msg = f"letter upper is {letters[0].upper()},{letters[1].upper()}"
    print(msg)

  ```
 
 ### 修改、添加和删除元素

  - 修改列表元素

    ```python
    letters = ['a','b','c']

    print(letters)

    letters[0] = 'apple'

    print(letters)
    ```

  - 添在列表中添加元素append

    ```python
    letters = ['a','b','c']
    print(letters)

    letters.append('d')

    print(letters)

    ```

  - 添在列表中添加元素insert

    ```python
    letters = ['a','b','c']
    print(letters)

    letters.insert(0,'d')

    print(letters)  # d,a,b,c

    ```

  - 删除列表中的元素del

    ```python
    letters = ['a','b','c']
    print(letters)

    del letters[0]
    print(letters)
    ```

  - 删除列表中的元素pop

    ```python
    letters = ['a','b','c']
    print(letters)

    delitem = letters.pop()
    print(delitem)  # c
    print(letters)  # a,b


    deltarget = letters.pop(0)
    print(deltarget)  # a
    print(letters)  # b
    ```

  - 根据值删除元素remove

    ```python
    letters = ['a','b','c']
    print(letters)

    letters.remove("b")
    print(letters)  # a,c
    ```

    > remove() ⽅法只删除第⼀个指定的值。


 ### 管理列表

  - 使⽤ sort() ⽅法对列表进⾏永久排序

    ```python
    
    letters = ['bb','ba','ac']

    letters.sort()

    print(letters)

    letters.sort(reverse=True)

    print(letters)
    ```

  - 使⽤ sorted() 函数对列表进⾏临时排序

    ```python

    letters = ['b','a','c']

    print(sorted(letters))

    print(letters)

    print( sorted(letters,reverse=True))

    print(letters)
    ```

  - 反向打印列表
    
    ```python   
    
    letters = ['b','a','c']

    letters.reverse()

    print(letters)
    
    ```
  
  - 列表的⻓度
    
    ```python
    letters = ['b','a','c']
    print(len(letters))
    ```

# 操作列表
 
 ## 遍历

  ```python
    letters = ['a','b','c']
    for item in letters:
      print(item)

    for v in letters:
      print(f'大写： {v.upper()}')
  ```

 ## 创建数值列表

  ```python

    for v in range(1,5):
      print(v)

    # range(1,5)  [1,5)
    # 1,2,3,4,  
  ```

 ## 使⽤ range() 创建数值列表

  ```python

    nums = list(range(1,6))

    print(nums) # [1,2,3,4,5]

    even_nums = list(range(2,11,2))

    print(even_nums) # [2,4,6,8,10]

    squares = []

    for v in range(1,11):
      squares.append(v**2)

    print(squares) # [1,4,9,16,25,36,49,64,81,100]
  ```
 
 ## 对数值列表执⾏简单的统计计算

  ```python

    nums = [1,2,3,4,5]

    print(f'列表最小值： {min(nums)}')

    print(f'列表最大值： {max(nums)}')

    print(f'列表总和： {sum(nums)}')

  ```

 ## 列表推导式

  ```python

    squares = [v**2 for v in range(1,11)]

    print(squares)
  
  ```

 ## 列表切片

  ```python

    letters = ['a','b','c','d','e','f','g']

    print(letters[1:3]) # ['b','c']   [1,3） index: 1 2

    print(len(letters)) # 7

    print(letters[5:7]) # ['f','g']   [5,7） index: 5 6

    print(letters[:4]) # ['a','b','c','d']   [0,4） index: 0 1 2 3

    print(letters[2:]) # ['c','d','e','f','g']   [2,7） index: 2 3 4 5 6

    print(letters[:]) # ['a','b','c','d','e','f','g']   [0,7）

    print(letters[-3:]) # 最后三个元素 ['e','f','g']   [-3,7） index: 4 5 6

    print(letters[::2]) # ['a','c','e','g']   [0,7） index: 0 2 4  step 2

    print(letters[::-1]) # ['g','f','e','d','c','b','a']   倒叙

  ```

 ## 遍历切片

  ```python

    letters = ['a','b','c','d','e','f','g']

    for letter in letters[:3]:
      print("遍历前三个",letter)
  
  ```

 ## 复制列表

  ```python

    letters1 = ['a','b','c']

    letters2 = letters1

    print(letters1 == letters2)

    letters1[1] = '100'

    print(letters1,letters2)

    letters_copy = letters1[:]

    print(letters_copy == letters1)

    letters1[1] = '200'

    print(letters1,letters2,letters_copy)

    # https://pythontutor.com/
  
  ```
 
 ## 元组tuple

  > 列表可以修改，元组不可以修改的列表  

  ### 定义元组

  ```python

    dimensions = (200,50)

    print(dimensions[0])
    print(dimensions[1])

    dimensions[0] = 300


    t1 = (3,)

    t2 = 2,  # 可以但不推荐

    # 严格地说，元组是由逗号标识的，圆括号只是让元组看起来更整洁，更清晰。
    # 如果你要定义一个元素的元组，必须在这个元素后面加上逗号
            
  ```

  ### 遍历元组中的所有值

  ```python

    dimensions = (200,50)

    for dim in dimensions:
        print(dim)

  ```

  ### 修改元组变量

  ```python
    dimensions = (200,50)   

    print(dimensions)

    dimensions = (300,50)  # 修改元组变量

    print(dimensions)
  ``` 



 ## 设置代码格式

  - 缩进

    PEP8 建议每级使用4个空格

    常常使用制表符(tab)而不是按4次空格来缩进，但是不同文本编辑器的tab长度可能不同，所以使用4个空格缩进更通用，但繁琐。

    这里的建议是先使用tab，如果不行，可以按4个空格，或是在该文本编辑器中设置tab为长度是4的空格。

  - 行长

    PEP8 建议每行最多79个字符，但有些情况下，比如长字符串，可以超过79个字符。


# if语句 

 ## 语法示例

  ```python

    letters = ['aaa','bbb','ccc']

    for v in letters：
        if v == 'a':
            print(v.upper())
        else:
            print(v.title())
    
  ```

 ## 条件测试

  - 检查是否相等

    ```python
    
        car = "honda"

        print(car == "honda")  # True
        print(car == "bmw")    # False
    
    ```
 
  - 检查是否不相等
    
    ```python

        msg = "hello"

        if msg != "Hello":
            print(f"msg 不是 Hello")
    
    ```   

  - 小于，小于等于，大于，大于等于 

    ```python

        num = 10

        print(num < 20) # True
        print(num <= 20) #True
        print(num > 20) #False
        print(num >= 20) #False

    ```
 
  - 使用and检查多个条件 

    ```python

        num1 = 22
        num2 = 18

        print(num1 > 21 and num2 >= 21) # False
        print(num1 > 21 and num2 < 21) #  True

    ```
  
  - 使用or检查多个条件 

    ```python

        num1 = 22
        num2 = 18

        print(num1 < 21 or num2 >= 21) # False
        print(num1 > 21 or num2 >= 21)  # True

    ```

  - 检查特定的值是否在列表中

    ```python

        fruits = ["apple", "banana", "cherry"]
        print("banana" in fruits) # True

        print("orange" in fruits) # False
    
    ```

  - 检查特定的值是否不在列表中

    ```python

        fruits = ["apple", "banana", "cherry"]
        print("banana" not in fruits) # False

        print("orange" not in fruits) # True
    
    ```

 ## if语句 

  - 简单的if语句 

    ```python

        if conditional_test:
            do something

    ```

  - 简单的if-else语句 

    ```python

        if conditional_test:    
            do something
        else:
            do something 
    
    ```

  - 简单的if-elif-else语句 

    ```python

        if conditional_test:
            do something
        elif: 
            do something
        else:
            do something 
    
    ```

  - 省略else代码块

    ```python

        if conditional_test1:
            do something
        elif conditional_test2:
            do something
        elif conditional_test3:
            do something
        elif conditional_test4:
            do something
        elif conditional_test5:
            do something
    
    ```

  - 测试多个条件

    > if-elif-else 相当于短路逻辑，符合一个条件后，其他条件就不再判断了  
    > 因此，如果使用多个条件判断，可以使用多个简单的if语句

    ```python

        letters = ['A','B','C']

        if 'A' in letters:
            print("A exists list" )
        if 'B' in letters:
            print("B exists list" )
        if 'C' in letters:
            print("C exists list" )

    ```

 ## 确定列表非空

  > if语句判断列表时，将列表至少包含一个元素时返回True，为空时返回False  
  > if 对于数值0，空值None, '',"",[],空元组(),空字典 均返回False

  ```python
    
    arr = []

    if arr:
        print("arr is not empty")
    else:
        print("arr is empty")

  ```

# 字典

 ## 一个简单的字典

  ```python

    stu = {'name':'john','score':100,'grade':'primary'}

    print(stu)

    print(stu['name'])
    print(stu['score'])

  ```

 ## 使用字典

  > 字典（dictionary）是⼀系列键值对。在 Python 中，字典⽤放在花括号（{}）中的⼀系列键值对表⽰  

  - 访问

    ```python
    
    stu = {'name':'john','score':100,'grade':'primary'}

    print(stu['name'])
    
    ```

  - 添加键值对

    ```python
    
    stu = {'name':'john','score':100,}

    stu['grade'] = 'primary'
    stu['x'] = 100

    print(stu)

    ```

  > 字典会保留定义时的元素排列顺序。如果将字典打印出来或遍历其元素，将发现元素的排列顺序与其添加顺序相同。  

  - 从创建⼀个空字典开始

    ```python
    
      obj = {}

      obj['x'] = 1
      obj['y'] = 2
      print(obj)

    ```

  - 修改字典中的值

    ```python
    
      obj = {'x':1,'y':2}

      obj['x'] = 100

      print(obj)
    
    ```

  - 删除键值对

    ```python
    
      obj = {'x':1,'y':2}

      del obj['x']

      print(obj)
    
    ```

  - 使⽤ get() 来访问值

    ```python

      obj = {'x':1,'y':2}


      print(obj['z'])  # 键不存在，会抛出异常

      print(obj.get('z'))  # 键不存在，返回 None，不会抛异常

      print(obj.get('z',-100))  # 键不存在，返回默认值 -100
  
    ```
    > 注意：在调⽤ get() 时，如果没有指定第⼆个参数且指定的键不存在，Python 将返回值 None，这个特殊的值表⽰没有相应的值。这并⾮错误，None 只是⼀个表⽰所需值不存在的特殊值

  
 ## 遍历字典

  > 有多种遍历⽅式：既可遍历字典的所有键值对，也可只遍历键或值。  

  - 遍历所有的键值对

    ```python
    
      obj = {'x':1,'y':2}

      for k,v in obj.items():
        print(f"key is {k},value is {v}") 
    
      favorite_lang = {
        'jen':'python',
        'sarah':'c',
        'edward':'java',
        'phil':'python'
        }

      for name,lang in favorite_lang.items():
        print(f"{name.title()}'s favorite language is {lang.title()}")

    ```

  - 遍历字典中的键  

    ```python

      favorite_lang = {
        'jen':'python',
        'sarah':'c',
        'edward':'java',
        'phil':'python'
      }

      for name in favorite_lang.keys():
        print(name.title())

      for name in favorite_lang:
        print(name.title())
  
    ```
  
  - 遍历字典中的值

    ```python

      favorite_lang = {
        'jen':'python',
        'sarah':'c',
        'edward':'java',
        'phil':'python'
      }

      for lang in favorite_lang.values():
        print(lang.title())

    ```

  - 集合 set

    > 集合（set）是一个无序不重复元素的序列。可以消除重复元素。

    ```python

      # 创建集合set

      s = {'a','b','c','a'}

      print(s)  #  {a,b,c}

      favorite_lang = {
        'jen':'python',
        'sarah':'c',
        'edward':'java',
        'phil':'python'
      }

      for lang in set(favorite_lang.values()):
        print(lang)
    
    ```
  


 ## 嵌套 

  - 字典列表 

    ```python

      # 字典列表

      stu1 = {
        'name':'zhang',
        'score':100,
      }

      stu2 = {
        'name':'li',
        'score':70,
      }

      stu3 = {
        'name':'wang',
        'score':80,
      }

      stu_list = [stu1,stu2,stu3]

      for stu in stu_list:
        print(stu)

    ```
  - 字典嵌套列表

    ```python

      # 字典嵌套列表

      stu1 = {
        'name':'zhang',
        'score':[100,90,80], 
      }

    ```

  - 字典中嵌套字典

    ```python

      # 字典中嵌套字典

      stu1 = {
        'name':'zhang',
        'score':[100,90,80], 
        'info':{
          'hobby':['basketball','football','pingpang'],
          'age':20,
          'sex':'male'
        }
      }
    
    ```

# 用户输入和while循环

 ## input()函数的工作原理  

  > input() 函数让程序暂停运⾏，等待⽤户输⼊⼀些⽂本。获取⽤户输⼊后，Python 将其赋给⼀个变量，以便使⽤。 
  
  ```python

    message = input("Tell me something, and I will repeat it back to you: ")
    print(message)

  ```

  > input() 函数接受⼀个参数，即要向⽤户显⽰的提⽰（prompt），让⽤户知道该输⼊什么样的信息。在这个⽰例中，当 Python 运⾏第⼀⾏代码时，⽤户将看到提⽰“Tell me something, and I will repeat it back to you:”。程序等待⽤户输⼊，并在⽤户按回⻋键后继续运⾏。⽤户的输⼊被赋给变量message，接下来的 print(message) 将输⼊呈现给⽤户.  

  > 注意：input() 函数返回的数据类型是字符串，即使你输⼊的是数字。
  
  - 使⽤ int() 来获取数值输⼊

    ```python

      # 使⽤ int() 来获取数值输⼊

      message = input("Tell me something, and I will repeat it back to you: ")
      print(message)
      print(type(message))  # str

      message = int(message)
      print(message)
      print(type(message))

    ```

  - 求模运算符 

    ```python
      # 求模运算符

      number = input("Enter a number, and I'll tell you if it's even or odd:")
      number = int(number)

      if number % 2 == 0:
        print(f"\nThe number {number} is even.")
      else:
        print("\n" + str(number) + " is odd.")

    ```


 ## while循环

  > for 循环⽤于针对集合中的每个元素执⾏⼀个代码块，⽽ while 循环则不断地运⾏，直到指定的条件不再满⾜为⽌。

  ```python

   # 使⽤ while 循环计算 1 到 100 的总和

    sum = 0
    i = 1
    while i <= 5:
      sum += i
      i += 1

    print(sum) 

  ```

  - while和input搭配,实现简单cli

    ```python

      # while和input搭配
      prompt = "\nTell me something, and I will repeat it back to you:"
      prompt += "\nEnter 'quit' to end the program. "

      message = ""
      while message != 'quit':
        message = input(prompt)
        if message != 'quit':
          print(message)

    ```

  - 使⽤标志flag变量来控制循环

    ```python

      # 使⽤标志变量来控制循环
      prompt = "\nTell me something, and I will repeat it back to you:"
      prompt += "\nEnter 'quit' to end the program. "
      active = True
      while active:
        message = input(prompt)
        if message == 'quit':
          active = False
        else:
          print(message)

    ```

  - 使⽤ break 退出循环

    ```python

      # 使⽤ break 退出循环

      prompt = "\nPlease enter the name of a city you have visited:"
      prompt += "\n(Enter 'quit' when you are finished.) "
      while True:
        city = input(prompt)
        if city == 'quit':
          break
        else:
          print(f"I'd love to go to {city.title()}!")

    ```

     > 注意：在所有 Python 循环中都可使⽤ break 语句。例如，可使⽤break 语句来退出遍历列表或字典的 for 循环。

  - 使⽤ continue 语句来跳过当前循环中的剩余代码，然后继续进行下一轮循环。

    > 要返回循环开头，并根据条件测试的结果决定是否继续执⾏循环，可使⽤continue 语句，它不像 break 语句那样不再执⾏余下的代码并退出整个循环。例如，来看⼀个从 1 数到 10，只打印其中奇数的循环：

    ```python
      # 使⽤ continue 语句来跳过当前循环中的剩余代码，然后继续进行

      curr_num = 0
      while curr_num < 10:
        curr_num += 1
        if curr_num % 2 == 0:
          continue

        print(curr_num)  # 只打印其中奇数 1 3 5 7 9


    ```
  
  - 避免⽆限循环

    > 编写循环时，要特别注意不要让它变成无限循环，这会导致程序卡死。

    ```python

      x = 1
      while x <= 5:
        print(x)
        # x += 1  # 这行没写，这个循环将没完没了地运⾏ 

    ```

 ## 使⽤ while 循环处理列表和字典

  - 使⽤ while 循环来遍历列表和字典 

    ```python

      unconfirmed_users = ['a', 'b', 'c']
      confirmed_users = []

      # 遍历列表，获取每个用户名，并提示用户确认
      while unconfirmed_users:
        current_user = unconfirmed_users.pop()

        print(f"Verifying user: {current_user.title()}")

        confirmed_users.append(current_user)

      print("\nThe following users have been confirmed:")
      for u in confirmed_users:
        print(u.title())

    ```

  - 删除为特定值的所有列表元素 

    ```python

      pets = ['dog', 'cat', 'dog', 'goldfish', 'cat', 'rabbit', 'cat']
      print(pets)
      while 'cat' in pets:
        pets.remove('cat')
      print(pets)

      # 也可以使用set

      without_cat = set(pets)

      print(without_cat)
    
    ```

  - 使⽤⽤户输⼊填充字典

    ```python

      responses = {}
      # 声明一个flag，表示是否继续
      polling_active = True

      while polling_active:
        name = input("\nWhat is your name? ")
        response = input("Which pet do you like best? ")

        responses[name] = response

        repeat = input("Would you like to let another person respond? (y/n) ")
        if repeat == 'n':
          polling_active = False

      print("\n--- Poll Results ---")

      for name,resp in responses.items():
        print(f"{name} like {resp}")
    
    ```

# 函数

 ## 定义函数

  ```python

    #声明
    def greet_user():
      print("Hello!")

    #调用
    greet_user()

  ```

  - 传参

    ```python
      def greet_user(username):
        print(f"hello,{username.title()}")

      greet_user("jerry")
    
    ```

  - 实参和形参

    > 实参是argument  
    > 形参是parameter  

    ```python

      def greet_user(username): # 这里的username是形参
        print(f"hello,{username.title()}")

      greet_user("jerry") # 这里是实参

    ```

 ## 参数 
  
  - 多个参数和参数顺序

    ```python

      def func(p1,p2,p3):
        print(f"p1:{p1},p2:{p2},p3:{p3}")

      func(1,2,3)    # p1 1,p2 2,p3 3
      func(30,20,10) # p1 30, p2 20, p3 10

    ```

  - 关键字实参

    > 关键字实参的顺序⽆关紧要，因为 Python 知道各个值该被赋给哪个形参。下⾯两个函数调⽤是等效的  

    ```python

      def func(p1,p2,p3):
        print(f"p1:{p1},p2:{p2},p3:{p3}")

      func(p3=3,p1=1,p2=2) # p1 1,p2 2,p3 3

    ```

    > 注意：在使⽤关键字实参时，务必准确地指定函数定义中的形参名。  
    > 在给形参指定默认值时，等号两边不要有空格  

  - 默认值

    ```python

      def func(p1,p2,p3=0):
        print(f"p1:{p1},p2:{p2},p3:{p3}") 

      func(1,2) # p1 1,p2 2,p3 0
    
    ```

    > 注意：当使⽤默认值时，必须在形参列表中先列出没有默认值的形参，再列出有默认值的形参。这让 Python 依然能够正确地解读位置实参。 

  - 等效的函数调用

    ```python

      def describe_pet(pet_name, animal_type='dog'):
        do sth

      # ⼀条名为 Willie 的⼩狗
      describe_pet('willie')
      describe_pet(pet_name='willie')
      # ⼀只名为 Harry 的仓⿏
      describe_pet('harry', 'hamster')
      describe_pet(pet_name='harry', animal_type='hamster')
      describe_pet(animal_type='hamster', pet_name='harry')
    
    ```
 
 ## 返回值 

  - 简单例子

    ```python

      def get_formatted_name(first_name, last_name, middle_name=''):
        """返回标准格式的姓名"""
        if middle_name:
          full_name = f"{first_name} {middle_name} {last_name}"
        else:
          full_name = f"{first_name} {last_name}"

        return full_name.title()

      musician = get_formatted_name('jimi', 'hendrix')
      print(musician)
      musician = get_formatted_name('john', 'hooker', 'lee')
      print(musician)

    ```

  - 返回字典

    ```python

      def build_person(first_name, last_name,score=None):
        """返回⼀个字典，其中包含⼀个人的姓名"""
        person = {'first': first_name, 'last': last_name}
        if score:
          person['score'] = score
        return person

      musician = build_person('jimi', 'hendrix',score=80)
      
      print(musician)
    
    ```

  - 结合使用函数和while循环

    ```python

      def get_formatted_name(first_name, last_name):
          """返回规范格式的姓名"""
          full_name = f"{first_name} {last_name}"
          return full_name.title()

      # 这是⼀个⽆限循环！
      while True:
          print("\nPlease tell me your name:")
          print("(enter 'q' at any time to quit)")

          f_name = input("First name: ")
          if f_name == 'q':
              print('bye')
              break
          l_name = input("Last name: ")
          if f_name == 'q':
              print('bye')
              break

          formatted_name = get_formatted_name(f_name, l_name)
          print(f"\nHello, {formatted_name}!")
    
    ```

 ## 传递列表

  - 在函数中修改列表 

    ```python

      def add(letters):
        letters.append(".")
      
      letters = ["a", "b", "c"]
      add(letters)
      print(letters)
    
    ```

    ```python
      def print_models(unprinted_designs, completed_models):
        """
        模拟打印每个设计，直到没有未打印的设计为⽌
        打印每个设计后，都将其移到列表 completed_models 中
        """
        while unprinted_designs:
          current_design = unprinted_designs.pop()
          print(f"Printing model: {current_design}")
          completed_models.append(current_design)
      
      def show_completed_models(completed_models):
        """显⽰打印好的所有模型"""
        print("\nThe following models have been printed:")
        for completed_model in completed_models:
        print(completed_model)
        
        
      unprinted_designs = ['phone case', 'robot pendant', 'dodecahedron']
      completed_models = []
      print_models(unprinted_designs, completed_models)
      show_completed_models(completed_models)

    ```

  - 禁⽌函数修改列表 

    ```python

      def output(msg_list):
          while msg_list:
              print(msg_list.pop())


      letters = ["a", "b", "c"]
      # output(letters)
      output(letters[:])  # 切⽚表⽰法 [:] 创建列表的副本,防止函数修改列表
      print(letters)
    
    ```

    > 虽然向函数传递列表的副本可保留原始列表的内容，但除⾮有充分的理由，否则还是应该将原始列表传递给函数。这是因为，让函数使⽤现成的列表可避免花时间和内存创建副本，从⽽提⾼效率，在处理⼤型列表时尤其如此。

  - 传递任意数量的实参

    ```python

      def make_pizza(*toppings):
        """打印顾客点的所有配料"""
        print(toppings,type(toppings))
        
      make_pizza('pepperoni')
      make_pizza('mushrooms', 'green peppers', 'extra cheese')

    ```

  - 结合使⽤位置实参和任意数量的实参

    > 如果要让函数接受不同类型的实参，必须在函数定义中将接纳任意数量实参的形参放在最后。Python 先匹配位置实参和关键字实参，再将余下的实参都收集到最后⼀个形参中 

    ```python

      def make_pizza(size, *toppings):
        """概述要制作的⽐萨"""
        print(f"\nMaking a {size}-inch pizza with the following toppings:")
        for topping in toppings:
          print(f"- {topping}")

      make_pizza(16, 'pepperoni')
      make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
    
    ```

    > 注意：你经常会看到通⽤形参名 *args，它也这样收集任意数量的实参。

  - 使⽤任意数量的关键字实参

    > 有时候，你需要接受任意数量的实参，但预先不知道传递给函数的会是什么样的信息。在这种情况下，可将函数编写成能够接受任意数量的键值对——调⽤语句提供了多少就接受多少。


    ```python

      def build_profile(first, last, **user_info):
        """创建⼀个字典，其中包含我们知道的有关⽤户的⼀切"""
        user_info['first_name'] = first
        user_info['last_name'] = last
        return user_info
        
      user_profile = build_profile('albert', 'einstein',location='princeton',field='physics')

      print(user_profile)
    
    ```

    > 注意：你经常会看到形参名 **kwargs，它⽤于收集任意数量的关键字实参。

 ## 将函数存储在模块中 

  > 使⽤函数的优点之⼀是可将代码块与主程序分离。通过给函数指定描述性名称，能让程序容易理解得多。你还可以更进⼀步，将函数存储在称为模块的独⽴⽂件中，再将模块导⼊（import）主程序。import 语句可让你在当前运⾏的程序⽂件中使⽤模块中的代码。

  - 导⼊整个模块 

    pizza.py

    ```python

      def make_pizza(size, *toppings):
        """概述要制作的⽐萨"""
        print(f"\nMaking a {size}-inch pizza with the following toppings:")
        for topping in toppings:
          print(f"- {topping}")
    
    ```

    making_pizzas.py

    ```python

      import pizza

      pizza.make_pizza(16, 'pepperoni')
      pizza.make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
    
    ```
    
    > 当 Python 读取这个⽂件时，代码⾏ import pizza 会让 Python 打开⽂件pizza.py，并将其中的所有函数都复制到这个程序中。你看不到复制代码的过程，因为 Python 会在程序即将运⾏时在幕后复制这些代码。你只需要知道，在 making_pizzas.py 中，可使⽤ pizza.py 中定义的所有函数。  

    ```python


      import module_name

      module_name.function_name()

    ```

  - 导⼊特定的函数
  
    > 还可以只导⼊模块中的特定函数，语法如下：  

    ```python

      from module_name import function_name

    ```

    > ⽤逗号分隔函数名，可根据需要从模块中导⼊任意数量的函数：  

    ```python

      from module_name import function_0, function_1, function_2
    
    ```

    ```python

      from pizza import make_pizza
      make_pizza(16, 'pepperoni')
      make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')

    ```
  
  - 使⽤ as 指定别名

    ```python

      import module_name as other_name

      from module_name import function_name as fn

    ```

  - 导⼊模块中的所有函数

    ```python

      from module_name import *

    ```

    ```python

      from pizza import *

      make_pizza(16, 'pepperoni')
      make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
    
    ```

    > 由于导⼊了每个函数，可通过名称来调⽤每个函数，⽆须使⽤点号（dot notation）。然⽽，在使⽤并⾮⾃⼰编写的⼤型模块时，最好不要使⽤这种导⼊⽅法，因为如果模块中有函数的名称与当前项⽬中既有的名称相同，可能导致意想不到的结果：Python 可能会因为遇到多个名称相同的函数或变量⽽覆盖函数。



# 类 

 > 根据类来创建对象称为实例化，这让你能够使⽤类的实例（instance）  

 ## 创建和使⽤类 

  - 创建 Dog 类 

    ```python


      # 类的名称首字母大写 Dog
      # 这里我们的类是一个全新的类，所以不用加括号

      class Dog:

        # 在类被实例化时，这个方法会自动执行
        # 形参self必不可少，必须放在第一位，类中的其他方法都会自动传递self，比如sit，roll_over
        # self 是一个指向实例本身的引用，让self能访问类中的方法
        # self 这个参数在实例化时不需要我们传递，有python自身传递，这个例子中，我们只需要传name,age就行 
        def __init__(self,name,age):
          self.name = name  # 向实例设置属性name
          self.age = age

        def sit(self):
          print(self.name.title() + " is now sitting.")

        def roll_over(self):
          print(self.name.title() + " rolled over!")


      my_dog = Dog('tom', 6)  # Dog 被实例化，并将实例化的实例对象赋值给my_dog这个变量
      
      # 实例.属性 这里的实例就是之前介绍的self，因为在__init__中添加了两个属性，所以这里我们可以 .name 或者 .age 来获取属性
      print(f"My dog's name is {my_dog.name}.")  
      print(f"My dog's is {my_dog.age} years old.")

    ```
  
  - 调用方法

    ```python

      my_dog.sit()  # 实例.方法()

      my_dog.roll_over() 
    
    ```

  - 创建多个实例 

    ```python

      # 创建多个实例
      my_dog = Dog('Tom', 6)
      your_dog = Dog('Lucy', 3)

      my_dog.sit()
      your_dog.sit()

    ```

  - 每次实例化都是一个新的实例

    ```python

      # 即使两个实例的属性相同，但是实例也是不同的

      d1 = Dog('tom', 6)
      d2 = Dog('tom', 6)  

      print("d1",d1)  # 打印实例在内存中的内存地址
      print("d2",d2)

      print(d1 == d2) # False

    ```
  
 ## 使用类和实例 

  - 声明Car类 

    ```python

      class Car:

        def __init__(self,make,model,year):
          self.make = make
          self.model = model
          self.year = year
        
        def get_descriptive_name(self):
          
          long_name = f"{self.year} {self.make} {self.model}"
          return long_name.title()

      my_new_car = Car('audi', 'a4', 2016)
      print(my_new_car.get_descriptive_name())
    
    ```

  - 给属性指定默认值 

     ```python

      class Car:

        def __init__(self,make,model,year):
          self.make = make
          self.model = model
          self.year = year
          self.odometer_reading = 0
        
        def get_descriptive_name(self):
          
          long_name = f"{self.year} {self.make} {self.model}"
          return long_name.title()

        def read_odometer(self):
          print(f"This car has {self.odometer_reading} miles on it.")


      my_new_car = Car('audi', 'a4', 2016)
      print(my_new_car.get_descriptive_name())
      my_new_car.read_odometer()
    
     ```

  - 修改属性的值 

    > 三种方式修改

    - 直接修改 

      ```python

        my_new_car = Car('audi', 'a4', 2016)
        my_new_car.odometer_reading = 23

        print(my_new_car.read_odometer())
      
      ```

    - 通过方法修改 

      ```python

        class Car:

          def __init__(self,make,model,year):
            self.make = make
            self.model = model
            self.year = year
            self.odometer_reading = 0

          def get_descriptive_name(self):

            long_name = f"{self.year} {self.make} {self.model}"
            return long_name.title()

          def read_odometer(self):
            print(f"This car has {self.odometer_reading} miles on it.")

          def update_odometer(self,mileage):
            if mileage >= self.odometer_reading:
              self.odometer_reading = mileage
            else:
              print("You can't roll back an odometer!")

        my_new_car = Car('audi', 'a4', 2016)
        my_new_car.update_odometer(23)
        print(my_new_car.read_odometer())
   
      ```

    - 通过方法让属性值递增 

      ```python

        class Car:

          def __init__(self,make,model,year):
            self.make = make
            self.model = model
            self.year = year
            self.odometer_reading = 0

          def get_descriptive_name(self):

            long_name = f"{self.year} {self.make} {self.model}"
            return long_name.title()

          def read_odometer(self):
            print(f"This car has {self.odometer_reading} miles on it.")

          def update_odometer(self,mileage):
            if mileage >= self.odometer_reading:
              self.odometer_reading = mileage
            else:
              print("You can't roll back an odometer!")

          def increment_odometer(self,miles):
            self.odometer_reading += miles

        my_new_car = Car('audi', 'a4', 2016)
        my_new_car.update_odometer(23)
        my_new_car.read_odometer()
        my_new_car.increment_odometer(100)
        my_new_car.read_odometer()

      ```

 ## 继承 

  > 如果要编写的类是⼀个既有的类的特殊版本，可使⽤继承（inheritance）。当⼀个类继承另⼀个类时，将⾃动获得后者的所有属性和⽅法。原有的类称为⽗类（parent class），⽽新类称为⼦类（child class）。⼦类不仅继承了⽗类的所有属性和⽅法，还可定义⾃⼰的属性和⽅法。 

  - ⼦类的 \_\_init__() ⽅法

    > 在既有的类的基础上编写新类，通常要调⽤⽗类的 \_\_init__() ⽅法。这将初始化在⽗类的 \_\_init__() ⽅法中定义的所有属性，从⽽让⼦类也可以使⽤这些属性。

    ```python

      class ElectricCar(Car):

        def __init__(self, make, model, year):
          """初始化父类的属性"""
          super().__init__(make, model, year)

      
      my_leaf= ElectricCar('tesla', 'model s', 2016)
      print(my_leaf.get_descriptive_name())

    ```

    > super() 是⼀个特殊的函数，让你能够调⽤⽗类的⽅法。这⾏代码让 Python 调⽤ Car 类的 \_\_init__() ⽅法，从⽽让 ElectricCar 实例包含这个⽅法定义的所有属性。⽗类也称为超类（superclass），函数名super 由此得名。


  - 给⼦类定义属性和⽅法

    > ⼦类可以定义⼦类没有，但⽗类有的属性或⽅法。

    ```python

      class ElectricCar(Car):

        def __init__(self, make, model, year):
          """初始化父类的属性"""
          super().__init__(make, model, year)
          self.battery_size = 40

        def describe_battery(self):
          """打印⼀条描述电池容量的消息"""
          print(f"This car has a {self.battery_size}-kWh battery.")

      
      my_leaf= ElectricCar('tesla', 'model s', 2016)
      print(my_leaf.get_descriptive_name())
      my_leaf.describe_battery()
    
    ```
  
  - 重写⽗类中的⽅法 

    ```python

      class Car:

          def __init__(self,make,model,year):
            self.make = make
            self.model = model
            self.year = year
            self.odometer_reading = 0
            self.gas_tank = 3

          def get_descriptive_name(self):

            long_name = f"{self.year} {self.make} {self.model}"
            return long_name.title()

          def read_odometer(self):
            print(f"This car has {self.odometer_reading} miles on it.")

          def update_odometer(self,mileage):
            if mileage >= self.odometer_reading:
              self.odometer_reading = mileage
            else:
              print("You can't roll back an odometer!")

          def increment_odometer(self,miles):
            self.odometer_reading += miles

          def fill_gas_tank(self):
            print(f"car's gas tank {self.gas_tank} L")


      class ElectricCar(Car):

          def __init__(self,make,model,year):
            super().__init__(make,model,year)
            self.battery_size = 70

          def describe_battery(self):
            print(f"This car has a {self.battery_size}-kWh battery.")

          def fill_gas_tank(self):
            """电动汽⻋没有油箱"""
            print("This car doesn't have a gas tank!")

      my_leaf= ElectricCar('tesla', 'model s', 2016)
      print(my_leaf.get_descriptive_name())
      my_leaf.describe_battery()
      my_leaf.fill_gas_tank()


    ```

  - 将实例⽤作属性 

    > 将⼤型类拆分成多个协同⼯作的⼩类，这种⽅法称为组合（composition）。

    ```python

      class Car:
        --snip--

      class Battery:
        """⼀次模拟电动汽⻋电池的简单尝试"""
        def __init__(self, battery_size=40):
          """初始化电池的属性"""
          self.battery_size = battery_size

        def describe_battery(self):
          """打印⼀条描述电池容量的消息"""
          print(f"This car has a {self.battery_size}-kWh battery.")

      class ElectricCar(Car):
        """电动汽⻋的独特之处"""
        def __init__(self, make, model, year):
          """
          先初始化⽗类的属性，再初始化电动汽⻋特有的属性
          """
          super().__init__(make, model, year)
          self.battery = Battery()

      
      my_leaf = ElectricCar('nissan', 'leaf', 2024)
      print(my_leaf.get_descriptive_name())
      my_leaf.battery.describe_battery()
    
    ```

 ## 导⼊类 

  - 导⼊单个类 

    car.py

    ```python
      class Car:
        """⼀次模拟汽⻋的简单尝试"""
        def __init__(self, make, model, year):
            """初始化描述汽⻋的属性"""
            self.make = make
            self.model = model
            self.year = year
            self.odometer_reading = 0

        def get_descriptive_name(self):
            """返回格式规范的描述性名称"""
            long_name = f"{self.year} {self.make} {self.model}"
            return long_name.title()
        
        def read_odometer(self):
            """打印⼀条消息，指出汽⻋的⾏驶⾥程"""
            print(f"This car has {self.odometer_reading} miles on it.")

        def update_odometer(self, mileage):
            """
            将⾥程表读数设置为指定的值
            拒绝将⾥程表往回调
            """
            if mileage >= self.odometer_reading:
                self.odometer_reading = mileage
            else:
                print("You can't roll back an odometer!")
        def increment_odometer(self, miles):
            """让⾥程表读数增加指定的量"""
            self.odometer_reading += miles
    ```

    my_car.py

    ```python
      from car import Car

      my_new_car = Car('audi', 'a4', 2024)
      print(my_new_car.get_descriptive_name())
      my_new_car.odometer_reading = 23
      my_new_car.read_odometer()
    ```

  - 在⼀个模块中存储多个类 

    car.py 

    ```python
      class Car:
          """⼀次模拟汽⻋的简单尝试"""
          def __init__(self, make, model, year):
              """初始化描述汽⻋的属性"""
              self.make = make
              self.model = model
              self.year = year
              self.odometer_reading = 0

          def get_descriptive_name(self):
              """返回格式规范的描述性名称"""
              long_name = f"{self.year} {self.make} {self.model}"
              return long_name.title()
          
          def read_odometer(self):
              """打印⼀条消息，指出汽⻋的⾏驶⾥程"""
              print(f"This car has {self.odometer_reading} miles on it.")

          def update_odometer(self, mileage):
              """
              将⾥程表读数设置为指定的值
              拒绝将⾥程表往回调
              """
              if mileage >= self.odometer_reading:
                  self.odometer_reading = mileage
              else:
                  print("You can't roll back an odometer!")
          def increment_odometer(self, miles):
              """让⾥程表读数增加指定的量"""
              self.odometer_reading += miles

      class Battery:
          """⼀次模拟电动汽⻋电瓶的简单尝试"""
          def __init__(self, battery_size=40):
              """初始化电池的属性"""
              self.battery_size = battery_size
          def describe_battery(self):
              """打印⼀条描述电池容量的消息"""
              print(f"This car has a {self.battery_size}-kWh battery.")
          def get_range(self):
              """打印⼀条描述电池续航⾥程的消息"""
              if self.battery_size == 40:
                  range = 150
              elif self.battery_size == 65:
                  range = 225
              print(f"This car can go about {range} miles on a full charge.")

      class ElectricCar(Car):
          """模拟电动汽⻋的独特之处"""
          def __init__(self, make, model, year):
              """
              先初始化⽗类的属性，再初始化电动汽⻋特有的属性
              """
              super().__init__(make, model, year)
              self.battery = Battery()
    ```

    my_electric_car.py

    ```python
      from car import ElectricCar

      my_leaf = ElectricCar('nissan', 'leaf', 2024)
      print(my_leaf.get_descriptive_name())
      my_leaf.battery.describe_battery()
      my_leaf.battery.get_range()
    ```
  
  - 从⼀个模块中导⼊多个类 

    my_cars.py 

    ```python
      from car import Car, ElectricCar

      my_mustang = Car('ford', 'mustang', 2024)
      print(my_mustang.get_descriptive_name())
      my_leaf = ElectricCar('nissan', 'leaf', 2024)
      print(my_leaf.get_descriptive_name())
    ```

  - 导⼊整个模块 

    my_cars.py

    ```python
      import car

      my_mustang = car.Car('ford', 'mustang', 2024)
      print(my_mustang.get_descriptive_name())
      my_leaf = car.ElectricCar('nissan', 'leaf', 2024)
      print(my_leaf.get_descriptive_name())
    ```
  
  - 导⼊模块中的所有类 

    ```python

      from module_name import *
    
    ```

  - 在⼀个模块中导⼊另⼀个模块 

    electric_car.py 

    ```python
      from car import Car

      class Battery:
          """⼀次模拟电动汽⻋电瓶的简单尝试"""
          def __init__(self, battery_size=40):
              """初始化电池的属性"""
              self.battery_size = battery_size
          def describe_battery(self):
              """打印⼀条描述电池容量的消息"""
              print(f"This car has a {self.battery_size}-kWh battery.")
          def get_range(self):
              """打印⼀条描述电池续航⾥程的消息"""
              if self.battery_size == 40:
                  range = 150
              elif self.battery_size == 65:
                  range = 225
              print(f"This car can go about {range} miles on a full charge.")

      class ElectricCar(Car):
          """模拟电动汽⻋的独特之处"""
          def __init__(self, make, model, year):
              """
              先初始化⽗类的属性，再初始化电动汽⻋特有的属性
              """
              super().__init__(make, model, year)
              self.battery = Battery()
    ```

    car.py  

    ```python

      class Car:
        """⼀次模拟汽⻋的简单尝试"""
        def __init__(self, make, model, year):
            """初始化描述汽⻋的属性"""
            self.make = make
            self.model = model
            self.year = year
            self.odometer_reading = 0

        def get_descriptive_name(self):
            """返回格式规范的描述性名称"""
            long_name = f"{self.year} {self.make} {self.model}"
            return long_name.title()
        
        def read_odometer(self):
            """打印⼀条消息，指出汽⻋的⾏驶⾥程"""
            print(f"This car has {self.odometer_reading} miles on it.")

        def update_odometer(self, mileage):
            """
            将⾥程表读数设置为指定的值
            拒绝将⾥程表往回调
            """
            if mileage >= self.odometer_reading:
                self.odometer_reading = mileage
            else:
                print("You can't roll back an odometer!")
        def increment_odometer(self, miles):
            """让⾥程表读数增加指定的量"""
            self.odometer_reading += miles
    
    ```

    my_cars.py

    ```python

      from car import Car
      from electric_car import ElectricCar

      my_mustang = Car('ford', 'mustang', 2024)
      print(my_mustang.get_descriptive_name())
      my_leaf = ElectricCar('nissan', 'leaf', 2024)
      print(my_leaf.get_descriptive_name())
    
    ```

  - 使⽤别名 

    ```python

      from electric_car import ElectricCar as EC

      my_leaf = EC('nissan', 'leaf', 2024)
    
    ```

    ```python

      import electric_car as ec

      my_leaf = ec.ElectricCar('nissan', 'leaf', 2024)
    ```

 ## Python 标准库 

  > Python 标准库是⼀组模块，在安装 Python 时已经包含在内。你现在已经对函数和类的⼯作原理有了⼤致的了解，可以开始使⽤其他程序员编写好的模块了。你可以使⽤标准库中的任何函数和类，只需在程序开头添加⼀条简单的 import 语句即可。下⾯来看看模块 random，它在你模拟很多现实情况时很有⽤。

  ```python

    from random import randint

    print(randint(1,6))
  
  ```


  ```python

    from random import choice

    players = ['a','b','c']
    first_up = choice(players)

    print(first_up)
  
  ```

 ## 类的编程⻛格 

  > 类名应采⽤驼峰命名法，即将类名中的每个单词的⾸字⺟都⼤写，并且不使⽤下划线。实例名和模块名都采⽤全⼩写格式，并在单词之间加上下划线。  

  > 对于每个类，都应在类定义后⾯紧跟⼀个⽂档字符串。这种⽂档字符串简要地描述类的功能。每个模块也都应包含⼀个⽂档字符串，对其中的类可⽤来做什么进⾏描述。

  > 可以使⽤空⾏来组织代码，但不宜过多。在类中，可以使⽤⼀个空⾏来分隔⽅法. ⽽在模块中，可以使⽤两个空⾏来分隔类。  
  当需要同时导⼊标准库中的模块和你编写的模块时，先编写导⼊标准库模块的 import 语句，再添加⼀个空⾏，然后编写导⼊你⾃⼰编写的模块的import 语句。在包含多条 import 语句的程序中，这种做法让⼈更容易明⽩程序使⽤的各个模块来⾃哪⾥。


# ⽂件和异常 

 ## 读取⽂件 

  - 读取⽂件的全部内容

      data.txt

      ```txt
      3.1415926535
        8979323846
        2643383279
      ```

      file_reader.py

      ```python
        from pathlib import Path

        path = Path('data.txt')
        contents = path.read_text()
        print(contents)
      ```

  - 相对⽂件路径和绝对⽂件路径 

    > 相对路径,将txt文件放在当前路径下的files文件夹中

    ```python
    
      from pathlib import Path

      path = Path('files/data.txt')
      contents = path.read_text()
      print(contents)

    ```

    > 绝对路径

    ```python

      from pathlib import Path

      path = Path('D:/xxx/files/data.txt')
      contents = path.read_text()
      print(contents)

    ```

  - 访问⽂件中的各⾏ 

    ```python
      from pathlib import Path

      path = Path('data.txt')
      contents = path.read_text()


      lines = contents.splitlines()
      for line in lines:
          print("line:",line)
    ```

  - 使用文件的内容

    ```python

      from pathlib import Path

      path = Path('data.txt')
      contents = path.read_text()


      lines = contents.splitlines()
      str = ''
      for line in lines:
          print(line.strip())
          str += line.strip()

      print(str)
      print(len(str))
    
    ```


 ## 写⼊⽂件 

  - 写入一行 

    ```python 

      from pathlib import Path

      path = Path('programming.txt')
      path.write_text("I love programming.你好",encoding='utf-8')
  
    ```

  - 写⼊多⾏ 

    ```python
      from pathlib import Path

      contents = "I love programming.\n"
      contents += "I love creating new games.\n"
      contents += "I also love working with data.\n"
      path = Path('programming.txt')
      path.write_text(contents)
    ```

    > 注意：在对 path 对象调⽤ write_text() ⽅法时，务必谨慎。如果指定的⽂件已存在， write_text() 将删除其内容，并将指定的内容写⼊其中。本章后⾯将介绍如何使⽤ pathlib 检查指定的⽂件是否存在。  

 ## 异常 

  > Python 使⽤称为异常（exception）的特殊对象来管理程序执⾏期间发⽣的错误。每当发⽣让 Python 不知所措的错误时，它都会创建⼀个异常对象。如果你编写了处理该异常的代码，程序将继续运⾏；如果你未对异常进⾏处理，程序将停⽌，并显⽰⼀个 traceback，其中包含有关异常的报告。  

  > 异常是使⽤ try-except 代码块处理的。try-except 代码块让 Python执⾏指定的操作，同时告诉 Python 在发⽣异常时应该怎么办。在使⽤try-except 代码块时，即便出现异常，程序也将继续运⾏：显⽰你编写的友好的错误消息，⽽不是令⽤户迷惑的 traceback  

  - 处理 ZeroDivisionError 异常 

    ```python

      print(5/0) # 显示traceback 错误信息
    
    ```

    ```python

      Traceback (most recent call last):
        File "1.py", line 1, in <module>
          print(5/0)
      ZeroDivisionError: division by zero

    ```

  - 使⽤ try-except 代码块 

    ```python

      try:
        print(5/0)
      except ZeroDivisionError:
        print("You can't divide by zero!")

    ```

  - 使⽤异常避免崩溃 

    ```python
      print("Give me two numbers, and I'll divide them.")
      print("Enter 'q' to quit.")
      while True:
          first_number = input("\nFirst number: ")
          if first_number == 'q':
              break
          second_number = input("Second number: ")
          if second_number == 'q':
              break
          try:
              answer = int(first_number) / int(second_number)
          except ZeroDivisionError:
              print("can't divide by 0")
          else:
              print(answer)
    ```

  - 处理 FileNotFoundError 异常 

    ```python

      from pathlib import Path

      path = Path('alice.txt')
      contents = path.read_text(encoding='utf-8')

    ```

    ```python

      from pathlib import Path

      path = Path('alice.txt')
      try:
          contents = path.read_text(encoding='utf-8')
      except FileNotFoundError:
          print(f"Sorry, the file {path} does not exist.")
    ```

  - 静默失败 

    ```python

      def count_words(path):
        """计算⼀个⽂件⼤致包含多少个单词"""
        try:
          --snip--
        except FileNotFoundError:
          pass
        else:
          --snip--

    ```

    > pass 语句充当占位符，提醒你在程序的某个地⽅什么都没有做，⽽且以后也许要在这⾥做些什么。

## 存储数据 

  - 使⽤ json.dumps() 和 json.loads() 

    ```python 

      from pathlib import Path
      import json

      numbers = [2, 3, 5, 7, 11, 13]
      path = Path('numbers.json')
      contents = json.dumps(numbers)
      print(contents)
      path.write_text(contents)

    ```

    ```python

      from pathlib import Path
      import json
      path = Path('numbers.json')
      contents = path.read_text()
      numbers = json.loads(contents)
      print(numbers)

      print(type(numbers))

      print(numbers[1])

    ```

  - 保存和读取⽤户⽣成的数据 

    ```python

      from pathlib import Path
      import json

      path = Path('username.json')
      if path.exists():
          contents = path.read_text()
          username = json.loads(contents)
          print(f"Welcome back, {username}!")
      else:
          username = input("What is your name? ")
          contents = json.dumps(username)
          path.write_text(contents)
          print(f"We'll remember you when you come back, {username}!")

    ```

# 测试代码 

 ## 安装

  - 安装 pytest

    ```shell

      pip install pytest

      #conda

      conda create --name env_name python=3.11

      conda activate env_name

      conda install pytest

    ```

  - 更新 pip 

    ```shell

      python -m pip install --upgrade pip

      pip install --upgrade pip
    ```

    > 这个命令的第⼀部分（python -m pip）让 Python 运⾏ pip 模块；第⼆部分（install --upgrade）让 pip 更新⼀个已安装的包；⽽最后⼀部分（pip）指定要更新哪个第三⽅包。  

    > 可使⽤下⾯的命令更新系统中安装的任何包：  

    ```shell
      python -m pip install --upgrade package_name 

      pip install --upgrade package_name 
    ```

    > 如果你使⽤的是 Linux，在安装 Python 时可能不会⾃动安装pip。如果在你试图更新 pip 时出现错误消息  

  - conda 更新

    ```shell

      conda update  package_name 
    ```

  - 测试函数 

    get_formatted_name.py
    
    ```python

      def get_formatted_name(first, last):
        """⽣成格式规范的姓名"""
        full_name = f"{first} {last}"
        return full_name.title()
    ```

    names.py

    ```python

      from a import get_formatted_name

      print("Enter 'q' at any time to quit.")
      while True:
          first = input("\nPlease give me a first name: ")
          if first == 'q':
              break
          last = input("Please give me a last name: ")
          if last == 'q':
              break
          formatted_name = get_formatted_name(first, last)
          print(f"\tNeatly formatted name: {formatted_name}.")
    
    ```

  - 单元测试和测试⽤例

    > ⼀种最简单的测试是单元测试（unit test）  
    > 测试⽤例（test case）是⼀组单元测试  

  - 可通过的测试 

    > 使⽤ pytest 进⾏测试，会让单元测试编写起来⾮常简单。我们将编写⼀个测试函数，它会调⽤要测试的函数，并做出有关返回值的断⾔。如果断⾔正确，表⽰测试通过；如果断⾔不正确，表⽰测试未通过。这个针对 get_formatted_name() 函数的测试如下：

    test_name_function.py

    ```python
      from a import get_formatted_name

      def test_first_last_name():
          """能够正确地处理像 Janis Joplin 这样的姓名吗？"""
          formatted_name = get_formatted_name('janis', 'joplin')
          assert formatted_name == 'Janis Joplin'

    ```

  - 运⾏测试 

    ```shell

      pytest test_name_function.py
    
    ```
 
 ## 测试类 

  - 各种断⾔ 

      | 断⾔ |  ⽤途 |
      | --- | --- |
      | assert a == b | 断⾔两个值相等 |
      | assert a != b | 断⾔两个值不等 |
      | assert a      | 断⾔ a 的布尔求值为 True |
      | assert not a  | 断⾔ a 的布尔求值为 False |
      | assert element in list     | 断⾔元素在列表中   |
      | assert element not in list | 断⾔元素不在列表中 |
  