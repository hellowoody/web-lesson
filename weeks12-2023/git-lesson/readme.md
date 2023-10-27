# 起源

 - 古早的版本工具

    cvs svn

 - git 
    
    去中心化
    分布式

# 基础命令

## 创建一个资源库(把一个文件夹变成资源库)

 ```
    git init exercise01

    cd 普通的文件夹
    cd exercise02
    git init
 ```

## git配置文件

 ```
 git config --list --show-origin // 可以查看系统，全局，本地的配置文件全部内容

 git config --list --system    // 只看去系统的配置文件
 git config --list --global    // 只看去全局的配置文件
 git config --list --local    // 只看去本地、局部的配置文件
 ```

 - 系统的配置文件（system config）
    
    C:/Program Files/Git/etc/gitconfig

 - 全局的配置文件(global config 系统当前用户)

    C:/Users/Administrator/.gitconfig

 - 本地的配置文件(具体某一项目的配置文件)
    
    .git/config 

## 获取、更新配置文件

 ```
    git config user.name
    git config user.email

    git config user.name "zhangsan"
    git config user.email "zhangsan@abc.com"

    git config --local user.name "zhangsan" 
    git config --local user.email "zhangsan@abc.com"

    git config --global user.name "zhangsan"  // 按全局设置是实战时更推荐的

 ```

## 如何操作git的文件命令

  ```
    git status  // 查看当前的资源库的状态
    git status -s  // 推荐
    git status --short

    git add filename       // filename 移动到暂存区

    git commit -m "xxxxx"  // 将此刻暂存区中的文件批量提交，移到提交区

    git cat-file -p 40hash(文件夹名字2位+文件名38位)

  ```

## 提交已被追踪文件的快捷方式

  ```
   // 一行命令将已被提交过的文件，现在右被修改，然后用下面的命令执行
   // 通过增加参数 -a 省略的 add 这步
  git commit -a -m "add line3" 
  ``` 

## log 日志命令 (重点！)

 ```
 git log
 git log --patch
 git log -p
 git log -p -2
 git log --since=2.weeks 
 // 上面的命令不常用，可以作为了解


 git log --stat
 git log --pretty=oneline
 git log --oneline
 git log --pretty=format:"%h - %an,%ar : %s"

 git log --oneline --decorate --graph --all  // 常用的
 ```

## 设置远端资源库

 ```
   // 查看当前资源库有没有远程资源库
   git remote
   git remote -v

   // 增加远程资源库

   git remote add 资源库的名字 远程资源库的地址(http)

   git remote add origin https://gitee.com/hellowoody/lesson-git.git

   // 将本地的.git 推送到remote

   git push -u origin master

   git pull remote_name branch_name

 ``` 

## 克隆项目、远程项目

 ```

  git clone https://gitee.com/hellowoody/lesson-git.git

 ```

## 辅助命令

 ```

   git reset --hard    // 将本地资源库重置成上一次的提交的状态
   git blame filename  // 该文件每一行最后修改的信息（人 时间 hash）

   // 搜索当前工作区 已被track的文件
   git grep 
   git grep --line-number xxx 
   git grep -n xxx
   git grep -p xxx
   git grep --count xxx 
   git grep -c xxx 
   git grep --show-function xxx

   
   diff

   比较未暂存区(工作区)和已暂存区的区别
   git diff
   比较已暂存区和提交区的区别
   git diff --staged
   git diff --cached

   git diff filename... 比较区中某几个文件


   rm 删除文件（已经暂存 已经提交）

   git rm filename

   git rm --cache filename  // 将file 从暂存区和提交区删除，但保存在工作区
   git rm --force filename  // 将file 从工作区，暂存区和提交区都删除
   git rm -f filename       // 将file 从工作区，暂存区和提交区都删除


   mv 重命名/移动 

   git mv oldname newname
   git mv oldpath newpath   //移动过程中不会创建新文件夹


   tag 标签

   git checkout tagname/branch/hash
   git checkout 想打标签的那次提交的hash值
   git tag tagname  // 打标签

   git push --tags  // 推送标签
   git checkout tagname 

   
 ```


## fetch和pull

   git pull
   相当于
   git fetch
   git merge

## 创建branch分支

   本质上说，用git做多人项目的版本管理，用不用branch其实无所谓

   但是为了后面项目合并时更容易管理，branch是提高效率和理清历史的好方法

   "每一天"的开始

   张三
   1.git pull
   2.git branch xxx     //创建一个名字叫xxx的分支
   3.git checkout xxx   // HEAD指针指向你想要操作的分支
   4.在你刚创建的分支上做你要的操作

   李四
   1.git pull
   2.git checkout -b xxx  // 同时创建xxx分支并切换
   3.在你刚创建的分支上做你要的操作

   "每一天"的结束

   张三

   1.git pull //将团队的所有分支推送都拉取下来
      git pull origin 每个队员分支的名字
   2.git checkout master
   3.git merge fix_home_bug              // 没有新的提交，只是head和master 移到v4上
     git merge origin/add_page_footer    // 本地新提交了一次


   李四
   
   (branch add_page_footer)
   1.git pull                  // v4, merge commit
   2.git checkout master       // 切默认分支
   3.git merge origin/master   // HEAD master 移动到origin/master"节点"上


## 删除分支

      查看本地项目所有的分支

         git branch -v

      删除"本地"的分支

         git branch -d 分支的名字

      删除远程的分支

         git push origin --delete 分支的名字 

         注意：删除远程分支的名字不是 origin/xxx
                              而是  xxx
   
## 配置“忽略”配置文件.gitignore

   通过文件夹名字,文件名字，以及配合正则表达式，来表示哪些内容不需要git管理
