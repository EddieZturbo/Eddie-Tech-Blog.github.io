import{_ as t,W as l,X as d,Z as e,a1 as n,$ as a,Y as i,F as r}from"./framework-e28ace55.js";const o={},c=e("h1",{id:"docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),n(" Docker")],-1),p={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/docker/docker-ce",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,[e("img",{src:"https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221212210743682.png",alt:"image-20221212210743682"})],-1),v=e("p",null,[e("img",{src:"https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221213113557406.png",alt:"image-20221213113557406"})],-1),g={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},b=i('<h2 id="docker-架构" tabindex="-1"><a class="header-anchor" href="#docker-架构" aria-hidden="true">#</a> Docker 架构</h2><p>Docker 使用<strong>客户端-服务器 (C/S) 架构模式</strong>，使用远程API来管理和创建Docker容器。</p><ul><li><strong>Docker 客户端(Client)</strong> : Docker 客户端通过命令行或者其他工具使用 Docker SDK (https://docs.docker.com/develop/sdk/) 与 Docker 的守护进程通信。</li><li><strong>Docker 主机(Host)</strong> ：一个物理或者虚拟的机器用于执行 Docker 守护进程和容器。</li></ul><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20230416100435961.png" alt="image-20230416100435961"></p><p>Docker 包括<strong>三个基本概念:</strong></p><ul><li><strong>镜像（Image）</strong>：Docker 镜像（Image），就相当于是一个 root 文件系统。比如官方镜像 ubuntu:16.04 就包含了完整的一套 Ubuntu16.04 最小系统的 root 文件系统。</li><li><strong>容器（Container）</strong>：镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和实例一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。</li><li><strong>仓库（Repository）</strong>：仓库可看成一个代码控制中心，用来保存镜像。</li></ul><p>Docker 使用客户端-服务器 (C/S) 架构模式，使用远程API来管理和创建Docker容器。</p><p>Docker 容器通过 Docker 镜像来创建。</p><p>容器与镜像的关系类似于面向对象编程中的对象与类。</p><table><thead><tr><th style="text-align:left;">Docker</th><th style="text-align:left;">面向对象</th></tr></thead><tbody><tr><td style="text-align:left;">容器</td><td style="text-align:left;">对象</td></tr><tr><td style="text-align:left;">镜像</td><td style="text-align:left;">类</td></tr></tbody></table><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221212231228057.png" alt="image-20221212231228057"></p>',11),h=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"概念"),e("th",{style:{"text-align":"left"}},"说明")])],-1),k=e("tr",null,[e("td",{style:{"text-align":"center"}},"Docker 镜像(Images)"),e("td",{style:{"text-align":"left"}},"Docker 镜像是用于创建 Docker 容器的模板，比如 Ubuntu 系统。")],-1),x=e("tr",null,[e("td",{style:{"text-align":"center"}},"Docker 容器(Container)"),e("td",{style:{"text-align":"left"}},"容器是独立运行的一个或一组应用，是镜像运行时的实体。")],-1),y=e("tr",null,[e("td",{style:{"text-align":"center"}},"Docker 客户端(Client)"),e("td",{style:{"text-align":"left"}},"Docker 客户端通过命令行或者其他工具使用 Docker SDK (https://docs.docker.com/develop/sdk/) 与 Docker 的守护进程通信。")],-1),f=e("tr",null,[e("td",{style:{"text-align":"center"}},"Docker 主机(Host)"),e("td",{style:{"text-align":"left"}},"一个物理或者虚拟的机器用于执行 Docker 守护进程和容器。")],-1),_=e("td",{style:{"text-align":"center"}},"Docker Registry",-1),D={style:{"text-align":"left"}},q={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},E=e("strong",null,"<仓库名>:<标签>",-1),A=e("strong",null,"latest",-1),O=e("tr",null,[e("td",{style:{"text-align":"center"}},"Docker Machine"),e("td",{style:{"text-align":"left"}},"Docker Machine是一个简化Docker安装的命令行工具，通过一个简单的命令行即可在相应的平台上安装Docker，比如VirtualBox、 Digital Ocean、Microsoft Azure。")],-1),I=i(`<h2 id="linux-cent-os-7-install" tabindex="-1"><a class="header-anchor" href="#linux-cent-os-7-install" aria-hidden="true">#</a> Linux Cent OS 7 Install</h2><p><strong>安装 Docker Engine-Community 使用 Docker 仓库进行安装</strong></p><p>卸载老版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> sudo yum remove docker \\
                  docker-client \\
                  docker-client-latest \\
                  docker-common \\
                  docker-latest \\
                  docker-latest-logrotate \\
                  docker-logrotate \\
                  docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装所需要的软件包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y install gcc

yum -y install gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>阿里云
$ sudo yum-config-manager \\
    --add-repo \\
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
    
清华大学源
$ sudo yum-config-manager \\
    --add-repo \\
    https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新yum元件包索引</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 Docker Engine-Community 最近版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo yum install docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221212230745921.png" alt="image-20221212230745921"></p><p>启动 Docker</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221212230952197.png" alt="image-20221212230952197"></p><p>查看版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@192 ~]# docker version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221212231058720.png" alt="image-20221212231058720"></p><p>Hello World</p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221212231915265.png" alt="image-20221212231915265"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221213081230899.png" alt="image-20221213081230899"></p><h2 id="docker-镜像加速" tabindex="-1"><a class="header-anchor" href="#docker-镜像加速" aria-hidden="true">#</a> Docker 镜像加速</h2><p>阿里云镜像获取地址：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors，登陆后，左侧菜单选中镜像加速器就可以看到你的专属地址了</p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221212232640952.png" alt="image-20221212232640952"></p><p>可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://6tkr32bt.mirror.aliyuncs.com&quot;]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>检查加速器是否生效</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221212232957453.png" alt="image-20221212232957453"></p><h2 id="docker常用命令★" tabindex="-1"><a class="header-anchor" href="#docker常用命令★" aria-hidden="true">#</a> Docker常用命令★</h2>`,31),T={href:"https://www.runoob.com/docker/docker-command-manual.html",target:"_blank",rel:"noopener noreferrer"},S=i(`<p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221213105701021.png" alt="image-20221213105701021"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221213105733766.png" alt="image-20221213105733766"></p><h3 id="帮助启动类命令" tabindex="-1"><a class="header-anchor" href="#帮助启动类命令" aria-hidden="true">#</a> 帮助启动类命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>启动
systemctl start docker

停止
systemctl stop docker

重启
systemctl restart docker

查看状态
systemctl status docker

开启开机启动
systemctl enable docker

查看概要信息
docker info

帮助文档
docker --help

具体命令的帮助文档
docker 具体命令 --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像命令" tabindex="-1"><a class="header-anchor" href="#镜像命令" aria-hidden="true">#</a> 镜像命令</h3><p><strong>docker images :</strong> 列出本地镜像。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker images [OPTIONS] [REPOSITORY[:TAG]]

-a :列出本地所有的镜像（含中间映像层，默认情况下，过滤掉中间映像层）；

--digests :显示镜像的摘要信息；

-f :显示满足条件的镜像；

--format :指定返回值的模板文件；

--no-trunc :显示完整的镜像信息；

-q :只显示镜像ID。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221213082943563.png" alt="image-20221213082943563"></p><p>列出本地镜像中REPOSITORY为ubuntu的镜像列表。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@runoob:~# docker images  ubuntu
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
ubuntu              14.04               90d5884b1ee0        9 weeks ago         188 MB
ubuntu              15.10               4e3b13c8a266        3 months ago        136.3 MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docker search :</strong> 从Docker Hub查找镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search [OPTIONS] TERM

--automated :只列出 automated build类型的镜像；

--no-trunc :显示完整的镜像描述；

-f &lt;过滤条件&gt;:列出收藏数不小于指定值的镜像。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从 Docker Hub 查找所有镜像名包含 java，并且收藏数大于 10 的镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>runoob@runoob:~$ docker search -f stars=10 java
NAME                  DESCRIPTION                           STARS   OFFICIAL   AUTOMATED
java                  Java is a concurrent, class-based...   1037    [OK]       
anapsix/alpine-java   Oracle Java 8 (and 7) with GLIBC ...   115                [OK]
develar/java                                                 46                 [OK]
isuper/java-oracle    This repository contains all java...   38                 [OK]
lwieske/java-8        Oracle Java 8 Container - Full + ...   27                 [OK]
nimmis/java-centos    This is docker images of CentOS 7...   13                 [OK]

NAME: 镜像仓库源的名称

DESCRIPTION: 镜像的描述

OFFICIAL: 是否 docker 官方发布

stars: 类似 Github 里面的 star，表示点赞、喜欢的意思。

AUTOMATED: 自动构建。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只看前五个 使用--limit进行限制</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@192 ~]# docker search --limit 5 redis
NAME                     DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
redis                    Redis is an open source key-value store that…   11651     [OK]       
redislabs/redisinsight   RedisInsight - The GUI for Redis                75                   
redislabs/redisearch     Redis With the RedisSearch module pre-loaded…   56                   
redislabs/redis          Clustered in-memory database engine compatib…   36                   
redislabs/rebloom        A probablistic datatypes module for Redis       21                   [OK]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docker pull :</strong> 从镜像仓库中拉取或者更新指定镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull [OPTIONS] NAME[:TAG|@DIGEST]
未指定tag的默认拉取最新的版本

-a :拉取所有 tagged 镜像

--disable-content-trust :忽略镜像的校验,默认开启
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于获取指定编译平台的镜像：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull --platform=arm64|amd64... image_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>docker push :</strong> 将本地的镜像上传到镜像仓库,要先登陆到镜像仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker push [OPTIONS] NAME[:TAG]

--disable-content-trust :忽略镜像的校验,默认开启
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上传本地镜像myapache:v1到镜像仓库中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker push myapache:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>**docker system df ：**查看镜像/容器/数据卷所占用空间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@192 ~]# docker system df
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          1         1         13.26kB   0B (0%)
Containers      1         0         0B        0B
Local Volumes   0         0         0B        0B
Build Cache     0         0         0B        0B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docker rmi :</strong> 删除本地一个或多个镜像。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rmi [OPTIONS] IMAGE [IMAGE...]

-f :强制删除；

--no-prune :不移除该镜像的过程镜像，默认移除；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>强制删除本地镜像 runoob/ubuntu:v4。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@runoob:~# docker rmi -f runoob/ubuntu:v4
Untagged: runoob/ubuntu:v4
Deleted: sha256:1c06aa18edee44230f93a90a7d88139235de12cd4c089d41eed8419b503072be
Deleted: sha256:85feb446e89a28d58ee7d80ea5ce367eebb7cec70f0ec18aa4faa874cbd97c73
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除所有本地镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@192 ~]# docker rmi -f $(docker images -qa)
Untagged: hello-world:latest
Untagged: hello-world@sha256:faa03e786c97f07ef34423fccceeec2398ec8a5759259f94d99078f264e9d7af
Deleted: sha256:feb5d9fea6a5e9606aa995e879d862b825965ba48de054caab5ef356dc6b3412
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**docker prune 命令：**prune 命令用来删除不再使用的 docker 对象。</p><p>删除所有未被 tag 标记和未被容器使用的镜像:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ docker image prune
WARNING! This will remove all dangling images.
Are you sure you want to continue? [y/N] y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除所有未被容器使用的镜像:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ docker image prune -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除所有停止运行的容器:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ docker container prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除所有未被挂载的卷:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ docker volume prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除所有网络:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ docker network prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除 docker 所有资源:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ docker system prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="容器命令" tabindex="-1"><a class="header-anchor" href="#容器命令" aria-hidden="true">#</a> 容器命令</h3><p>**docker run ：**创建一个新的容器并运行一个命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

-a stdin: 指定标准输入输出内容类型，可选 STDIN/STDOUT/STDERR 三项；

-d: 后台运行容器，并返回容器ID；

-i: 以交互模式运行容器，通常与 -t 同时使用；

-P: 随机端口映射，容器内部端口随机映射到主机的端口

-p: 指定端口映射，格式为：主机(宿主)端口:容器端口

-t: 为容器重新分配一个伪输入终端，通常与 -i 同时使用；

--name=&quot;nginx-lb&quot;: 为容器指定一个名称；

--dns 8.8.8.8: 指定容器使用的DNS服务器，默认和宿主一致；

--dns-search example.com: 指定容器DNS搜索域名，默认和宿主一致；

-h &quot;mars&quot;: 指定容器的hostname；

-e username=&quot;ritchie&quot;: 设置环境变量；

--env-file=[]: 从指定文件读入环境变量；

--cpuset=&quot;0-2&quot; or --cpuset=&quot;0,1,2&quot;: 绑定容器到指定CPU运行；

-m :设置容器使用内存最大值；

--net=&quot;bridge&quot;: 指定容器的网络连接类型，支持 bridge/host/none/container: 四种类型；

--link=[]: 添加链接到另一个容器；

--expose=[]: 开放一个端口或一组端口；

--volume , -v: 绑定一个卷
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用docker镜像Ubuntu容器； 交互式启动并在容器内执行/bin/bash（bash）命令; 指定name为myubuntu</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@192 ~]# docker run --name myubuntu -it ubuntu bash
root@3988f7d93f0e:/# ls
bin   dev  home  lib32  libx32  mnt  proc  run   srv  tmp  var
boot  etc  lib   lib64  media   opt  root  sbin  sys  usr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@192 ~]# docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED         STATUS         PORTS     NAMES
3988f7d93f0e   ubuntu    &quot;bash&quot;    3 minutes ago   Up 3 minutes             myubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**exit：**从容其中退出并停止容器 **Ctrl + q + p：**从容器中退出不停止容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@3988f7d93f0e:/# exit
exit
[root@192 ~]# 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定容器的 8080 端口，并将其映射到本地主机 127.0.0.1 的 80 端口上。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ docker run -p 127.0.0.1:80:8080/tcp ubuntu bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用镜像 nginx:latest，以后台模式启动一个容器,将容器的 80 端口映射到主机的 80 端口,主机的目录 /data 映射到容器的 /data。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 80:80 -v /data:/data -d nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221213093702964.png" alt="image-20221213093702964"></p><p>**docker rm ：**删除一个或多个容器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rm [OPTIONS] CONTAINER [CONTAINER...]

-f :通过 SIGKILL 信号强制删除一个运行中的容器。

-l :移除容器间的网络连接，而非容器本身。

-v :删除与容器关联的卷。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除所有已经停止的容器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rm $(docker ps -a -q)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>docker ps :</strong> 列出容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps [OPTIONS]

-a :显示所有的容器，包括未运行的。

-f :根据条件过滤显示的内容。

--format :指定返回值的模板文件。

-l :显示最近创建的容器。

-n :列出最近创建的n个容器。

--no-trunc :不截断输出。

-q :静默模式，只显示容器编号。

-s :显示总的文件大小。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docker start</strong> :启动一个或多个已经被停止的容器</p><p><strong>docker stop</strong> :停止一个运行中的容器</p><p><strong>docker restart</strong> :重启容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker start [OPTIONS] CONTAINER [CONTAINER...]
docker stop [OPTIONS] CONTAINER [CONTAINER...]
docker restart [OPTIONS] CONTAINER [CONTAINER...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docker kill</strong> :杀掉一个运行中的容器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker kill [OPTIONS] CONTAINER [CONTAINER...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>docker pause</strong> :暂停容器中所有的进程。</p><p><strong>docker unpause</strong> :恢复容器中所有的进程。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pause CONTAINER [CONTAINER...]
docker unpause CONTAINER [CONTAINER...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>**docker exec ：**在运行的容器中执行命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec [OPTIONS] CONTAINER COMMAND [ARG...]

-d :分离模式: 在后台运行

-i :即使没有附加也保持STDIN 打开

-t :分配一个伪终端
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在容器 mynginx 中以交互模式执行容器内 /root/runoob.sh 脚本:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>runoob@runoob:~$ docker exec -it mynginx /bin/sh /root/runoob.sh
http://www.runoob.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在容器 mynginx 中开启一个交互模式的终端:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>runoob@runoob:~$ docker exec -i -t  mynginx /bin/bash
root@b1a0703e41e7:/#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以通过 <strong>docker ps -a</strong> 命令查看已经在运行的容器，然后使用容器 ID 进入容器。</p><p>查看已经在运行的容器 ID：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker ps -a 
...
9df70f9a0714        openjdk             &quot;/usercode/script.sh…&quot; 
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一列的 9df70f9a0714 就是容器 ID。</p><p>通过 exec 命令对指定的容器执行 bash:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker exec -it 9df70f9a0714 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>docker inspect 容器</strong>：检阅容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker inspect redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>容器自动启动</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker udpate (containerId) --restart=always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker镜像" tabindex="-1"><a class="header-anchor" href="#docker镜像" aria-hidden="true">#</a> Docker镜像</h2><p><strong>镜像</strong>：是一种<strong>轻量级，可执行的独立软件包</strong>，它包含运行某个软件所需的所有内容，我们把应用程序和配置依赖打包好成一个可交付的运行环境（包括<strong>代码，运行时需要的库，环境变量和配置文件</strong>等），这个打包好的运行环境就是image镜像文件</p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221213112935552.png" alt="image-20221213112935552"></p><h3 id="分层" tabindex="-1"><a class="header-anchor" href="#分层" aria-hidden="true">#</a> 分层</h3><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221213115711428.png" alt="image-20221213115711428"></p><p>镜像采用分层的最大好处就是共享资源，方便复制迁移，就是为了复用</p><p>多个镜像都是由相同的base镜像构建而来，那么Docker Host只需在磁盘中保存一份base镜像；</p><p>同时内存中也只需加载一份base镜像，就可以为所有的容器服务。并且镜像每一层都可以被共享</p><p><strong>镜像层：只读层</strong></p><p><strong>容器层：可写层</strong></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221213114830383.png" alt="image-20221213114830383"></p><h3 id="docker镜像加载原理" tabindex="-1"><a class="header-anchor" href="#docker镜像加载原理" aria-hidden="true">#</a> Docker镜像加载原理</h3><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221213115716043.png" alt="image-20221213115716043"></p><p>docker镜像实际是由一层一层的文件系统组成，这种层级的文件系统称之为UnionFS</p><p>BootFS（Boot File System）主要包含BootLoader和Kernel;BootLoader主要是引导加载kernel，Linux刚启动时会加载bootfs文件系统。</p><p>在Docker镜像的最底层是引导文件系统bootfs。这一层与典型的Linux系统一样，包含boot加载器和内核。当boot加载完成之后，整个内核就在内存中了，此时内存的是哟权已由bootfs转交给内核，此时系统也会卸载bootfs。</p><p>rootfs可以很小；只需要包括最基本的命令，工具和程序库即可；因为最底层直接使用了host宿主机的kernel，自己只需要提供rootfs即可；</p><p>例如不同的Linux发行版本，bootfs基本一致，rootfs会有差别，因此不同的发行版可以共用bootfs。</p><h2 id="本地镜像发布到aliyun" tabindex="-1"><a class="header-anchor" href="#本地镜像发布到aliyun" aria-hidden="true">#</a> 本地镜像发布到aliyun</h2><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221215100748194.png" alt="image-20221215100748194"></p><h2 id="私服仓库" tabindex="-1"><a class="header-anchor" href="#私服仓库" aria-hidden="true">#</a> 私服仓库</h2><h2 id="容器卷★" tabindex="-1"><a class="header-anchor" href="#容器卷★" aria-hidden="true">#</a> 容器卷★</h2><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221215102642770.png" alt="image-20221215102642770"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221215102750514.png" alt="image-20221215102750514"></p><h3 id="宿主机和容器之间添加映射容器卷" tabindex="-1"><a class="header-anchor" href="#宿主机和容器之间添加映射容器卷" aria-hidden="true">#</a> 宿主机和容器之间添加映射容器卷</h3><p><strong>tip: --privileged（开启权限）</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dicker run --name redis -p 6379:6379 --privileged=true -v 宿主机路径目录:容器内路径目录 -d redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="读写规则rw-ro" tabindex="-1"><a class="header-anchor" href="#读写规则rw-ro" aria-hidden="true">#</a> 读写规则rw/ro</h3><p><strong>默认支持主机和容器互通读写</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dicker run --name redis -p 6379:6379 --privileged=true -v 宿主机路径目录:容器内路径目录:rw -d redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>限制容器内的写</strong></p><p><strong>此时宿主机写入的内容可以同步到容器内</strong>，容器可以读取到；容器不能写</p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221215103636796.png" alt="image-20221215103636796"></p><h3 id="容器卷的继承和共享" tabindex="-1"><a class="header-anchor" href="#容器卷的继承和共享" aria-hidden="true">#</a> 容器卷的继承和共享</h3><p><strong>使用 --volume-from 容器01</strong></p><p><strong>照搬容器01的映射卷规则</strong></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221215104959713.png" alt="image-20221215104959713"></p><h2 id="docker容器下的复杂安装" tabindex="-1"><a class="header-anchor" href="#docker容器下的复杂安装" aria-hidden="true">#</a> Docker容器下的复杂安装</h2><h2 id="dockerfile★" tabindex="-1"><a class="header-anchor" href="#dockerfile★" aria-hidden="true">#</a> DockerFile★</h2>`,128),N={href:"https://www.runoob.com/docker/docker-dockerfile.html",target:"_blank",rel:"noopener noreferrer"},R=i(`<blockquote><p>DockerFile 是一个用来构建镜像的文本文件</p></blockquote><h3 id="dockerfile指令" tabindex="-1"><a class="header-anchor" href="#dockerfile指令" aria-hidden="true">#</a> Dockerfile指令</h3><h4 id="dockerfile指令摘要" tabindex="-1"><a class="header-anchor" href="#dockerfile指令摘要" aria-hidden="true">#</a> Dockerfile指令摘要：</h4><ul><li><p>FROM- 镜像从那里来</p></li><li><p>MAINTAINER- 镜像维护者信息</p></li><li><p>RUN- 构建镜像执行的命令，每一次RUN都会构建一层</p></li><li><p>CMD- 容器启动的命令，如果有多个则以最后一个为准，也可以为ENTRYPOINT提供参数</p></li><li><p>VOLUME- 定义数据卷，如果没有定义则使用默认</p></li><li><p>USER- 指定后续执行的用户组和用户</p></li><li><p>WORKDIR- 切换当前执行的工作目录</p></li><li><p>HEALTHCHECH- 健康检测指令</p></li><li><p>ARG- 变量属性值，但不在容器内部起作用</p></li><li><p>EXPOSE- 暴露端口</p></li><li><p>ENV- 变量属性值，容器内部也会起作用</p></li><li><p>ADD- 添加文件，如果是压缩文件也解压</p></li><li><p>COPY- 添加文件，以复制的形式</p></li><li><p>ENTRYPOINT- 容器进入时执行的命令</p></li></ul><h4 id="dockerfile指令-1" tabindex="-1"><a class="header-anchor" href="#dockerfile指令-1" aria-hidden="true">#</a> Dockerfile指令：</h4><ul><li>FROM</li></ul><p>构建镜像基于哪个镜像</p><ul><li>MAINTAINER</li></ul><p>镜像维护者姓名或邮箱地址</p><ul><li>RUN</li></ul><p>构建镜像时运行的指令</p><ul><li>CMD</li></ul><p>运行容器时执行的shell环境</p><ul><li>VOLUME</li></ul><p>指定容器挂载点到宿主机自动生成的目录或其他容器</p><ul><li>USER</li></ul><p>为RUN、CMD、和 ENTRYPOINT 执行命令指定运行用户</p><ul><li>WORKDIR</li></ul><p>为 RUN、CMD、ENTRYPOINT、COPY 和 ADD 设置工作目录，就是切换目录</p><ul><li>HEALTHCHECH</li></ul><p>健康检查</p><ul><li>ARG</li></ul><p>构建时指定的一些参数</p><ul><li>EXPOSE</li></ul><p>声明容器的服务端口（仅仅是声明）</p><ul><li>ENV</li></ul><p>设置容器环境变量</p><ul><li>ADD</li></ul><p>拷贝文件或目录到容器中，如果是URL或压缩包便会自动下载或自动解压</p><ul><li>COPY</li></ul><p>拷贝文件或目录到容器中，跟ADD类似，但不具备自动下载或解压的功能</p><ul><li>ENTRYPOINT</li></ul><p>运行容器时执行的shell命令</p><h3 id="使用-dockerfile-定制centos镜像" tabindex="-1"><a class="header-anchor" href="#使用-dockerfile-定制centos镜像" aria-hidden="true">#</a> 使用 Dockerfile 定制Centos镜像</h3><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216122145419.png" alt="image-20221216122145419"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216122440141.png" alt="image-20221216122440141"></p><p>DockerFile文本文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>FROM centos
MAINTAINER zzyy 
ENV MYPATH /usr/localWORKDIR 
$MYPATH 
<span class="token comment">#安装vim编辑器</span>
RUN yum <span class="token punctuation">-</span>y install vim
<span class="token comment">#安装ifconfig命令查看网络IP</span>
RUN yum <span class="token punctuation">-</span>y install net<span class="token punctuation">-</span>tools
<span class="token comment">#安装java8及lib库</span>
RUN yum <span class="token punctuation">-</span>y install glibc.i686RUN mkdir /usr/local/java
<span class="token comment">#ADD 是相对路径jar,把jdk-8u171-linux-x64.tar.gz添加到容器中,安装包必须要和Dockerfile文件在同一位置</span>
ADD jdk<span class="token punctuation">-</span>8u171<span class="token punctuation">-</span>linux<span class="token punctuation">-</span>x64.tar.gz /usr/local/java/
<span class="token comment">#配置java环境变量</span>
ENV JAVA_HOME /usr/local/java/jdk1.8.0_171
ENV JRE_HOME $JAVA_HOME/jre
ENV CLASSPATH $JAVA_HOME/lib/dt.jar<span class="token punctuation">:</span>$JAVA_HOME/lib/tools.jar<span class="token punctuation">:</span>$JRE_HOME/lib<span class="token punctuation">:</span>$CLASSPATHENV PATH $JAVA_HOME/bin<span class="token punctuation">:</span>$PATH 
EXPOSE 80 
CMD echo $MYPATHCMD echo &quot;success<span class="token punctuation">---</span><span class="token punctuation">---</span><span class="token punctuation">---</span><span class="token punctuation">---</span><span class="token punctuation">-</span><span class="token punctuation">-</span>ok&quot;CMD /bin/bash 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将微服务构建成镜像" tabindex="-1"><a class="header-anchor" href="#将微服务构建成镜像" aria-hidden="true">#</a> 将微服务构建成镜像</h3><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216122148499.png" alt="image-20221216122148499"></p><p>将编写好的微服务打成jar包 发送至Linux中的MyDocker文件夹</p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216121900159.png" alt="image-20221216121900159"></p><p>并vim Dockerfile 编写构建文本文件的内容</p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216121839375.png" alt="image-20221216121839375"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216122200324.png" alt="image-20221216122200324"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221215165944872.png" alt="image-20221215165944872"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221215174134019.png" alt="image-20221215174134019"></p><h2 id="虚悬镜像" tabindex="-1"><a class="header-anchor" href="#虚悬镜像" aria-hidden="true">#</a> 虚悬镜像</h2><h3 id="查看虚悬镜像" tabindex="-1"><a class="header-anchor" href="#查看虚悬镜像" aria-hidden="true">#</a> 查看虚悬镜像</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker image ls -f dangling=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="prune掉虚悬镜像" tabindex="-1"><a class="header-anchor" href="#prune掉虚悬镜像" aria-hidden="true">#</a> prune掉虚悬镜像</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker image prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221215173956773.png" alt="image-20221215173956773"></p><h2 id="docker部署实战★" tabindex="-1"><a class="header-anchor" href="#docker部署实战★" aria-hidden="true">#</a> Docker部署实战★</h2><h3 id="java项目部署" tabindex="-1"><a class="header-anchor" href="#java项目部署" aria-hidden="true">#</a> Java项目部署</h3><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216082950543.png" alt="image-20221216082950543"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216082153225.png" alt="image-20221216082153225"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216082258222.png" alt="image-20221216082258222"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> springboot_demo1_docker:1.1 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216082336420.png" alt="image-20221216082336420"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216082704103.png" alt="image-20221216082704103"></p><h3 id="mysql部署" tabindex="-1"><a class="header-anchor" href="#mysql部署" aria-hidden="true">#</a> MySQL部署</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/root/dockerMetaData/mysql
<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># ls</span>
conf  Data  log

<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># docker run -d \\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">-v</span> <span class="token variable">$pwd</span>/conf/my.cnf:/etc/mysql/my.cnf:rw <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">-v</span> <span class="token variable">$pwd</span>/Data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">-v</span> <span class="token variable">$pwd</span>/log:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">--name</span> mysql8 <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> c71276df4a87
d30f2ce80fe03301e6e69cfdce57a680c98aecbe54e9a5c9f285e2f1add58673

<span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                                                  NAMES
d30f2ce80fe0   c71276df4a87   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">2</span> seconds ago   Up <span class="token number">2</span> seconds   <span class="token number">0.0</span>.0.0:3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, :::3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, <span class="token number">33060</span>/tcp   mysql8

<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># docker exec -it mysql8 /bin/bash</span>
bash-4.4<span class="token comment"># mysql -u root -p</span>
Enter password: 
Welcome to the MySQL monitor.  Commands end with <span class="token punctuation">;</span> or <span class="token punctuation">\\</span>g.
Your MySQL connection <span class="token function">id</span> is <span class="token number">10</span>
Server version: <span class="token number">8.0</span>.33 MySQL Community Server - GPL

Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2000</span>, <span class="token number">2023</span>, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type <span class="token string">&#39;help;&#39;</span> or <span class="token string">&#39;\\h&#39;</span> <span class="token keyword">for</span> help. Type <span class="token string">&#39;\\c&#39;</span> to <span class="token function">clear</span> the current input statement.

mysql<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20230609104012021.png" alt="image-20230609104012021"></p><h3 id="redis部署" tabindex="-1"><a class="header-anchor" href="#redis部署" aria-hidden="true">#</a> Redis部署</h3>`,65),w={href:"https://raw.githubusercontent.com/redis/redis/7.0/redis.conf",target:"_blank",rel:"noopener noreferrer"},M=e("p",null,"提前准备对应版本的 redis.conf 配置文件 用于配置和启动redis",-1),C=e("p",null,[e("img",{src:"https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20230609163444847.png",alt:"image-20230609163444847"})],-1),P=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># ls</span>
conf  data
<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
mysql        <span class="token number">8</span>         c71276df4a87   <span class="token number">4</span> days ago    565MB
redis        latest    0ec8ab59a35f   <span class="token number">2</span> weeks ago   117MB

<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># docker run -d \\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">-v</span> <span class="token variable">$pwd</span>/conf/redis.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">-v</span> <span class="token variable">$pwd</span>/data:/data <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">--name</span> redis 

<span class="token operator">&gt;</span> 0ec8ab59a35f <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> redis-server <span class="token variable">$pwd</span>/conf/redis.conf

<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                                                  NAMES
8995fb9bbde6   0ec8ab59a35f   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">3</span> seconds ago   Up <span class="token number">2</span> seconds   <span class="token number">0.0</span>.0.0:6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp, :::6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp              redis
d30f2ce80fe0   c71276df4a87   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">6</span> hours ago     Up <span class="token number">6</span> hours     <span class="token number">0.0</span>.0.0:3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, :::3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, <span class="token number">33060</span>/tcp   mysql8

<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># docker exec -it redis /bin/bash</span>
root@8995fb9bbde6:/data<span class="token comment"># </span>

<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># docker exec -it redis redis-cli</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20230609162444990.png" alt="image-20230609162444990"></p><h3 id="mq部署" tabindex="-1"><a class="header-anchor" href="#mq部署" aria-hidden="true">#</a> MQ部署</h3><h3 id="nginx部署" tabindex="-1"><a class="header-anchor" href="#nginx部署" aria-hidden="true">#</a> Nginx部署</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/root/dockerMetaData/nginx
<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">0</span>
drwxrwxrwx. <span class="token number">2</span> root root <span class="token number">6</span> Jun <span class="token number">13</span> <span class="token number">23</span>:00 conf
drwxrwxrwx. <span class="token number">2</span> root root <span class="token number">6</span> Jun <span class="token number">13</span> <span class="token number">23</span>:01 conf.d
drwxrwxrwx. <span class="token number">2</span> root root <span class="token number">6</span> Jun <span class="token number">13</span> <span class="token number">23</span>:00 html
drwxrwxrwx. <span class="token number">2</span> root root <span class="token number">6</span> Jun <span class="token number">13</span> <span class="token number">23</span>:00 logs
<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># </span>

<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># docker pull nginx</span>
Using default tag: latest
latest: Pulling from library/nginx
759700526b78: Pull complete 
4fabad4a1317: Pull complete 
1150b893b52b: Pull complete 
e75fa5822000: Pull complete 
1595b4d83afa: Pull complete 
1810e754f450: Pull complete 
Digest: sha256:96b005578b567542e03c754ec1cb1dd9b1d57d5c5d4e50b8e8c59f00dfc9d99b
Status: Downloaded newer image <span class="token keyword">for</span> nginx:latest
docker.io/library/nginx:latest
<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
nginx        latest    7d3c40f240e1   <span class="token number">23</span> hours ago   143MB
mysql        <span class="token number">8</span>         c71276df4a87   <span class="token number">9</span> days ago     565MB
redis        latest    0ec8ab59a35f   <span class="token number">3</span> weeks ago    117MB
<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># </span>

<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># docker run -d --name nginx -p 80:80 nginx</span>
7c1dc4ac30b52bfa15bd77f128aa2729d4f2a6657ec1bb75b00e99e8eabfd34c
<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                                                  NAMES
7c1dc4ac30b5   nginx          <span class="token string">&quot;/docker-entrypoint.…&quot;</span>   <span class="token number">4</span> seconds ago   Up <span class="token number">3</span> seconds   <span class="token number">0.0</span>.0.0:80-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp, :::80-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp                      nginx
d30f2ce80fe0   c71276df4a87   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">5</span> days ago      Up <span class="token number">4</span> hours     <span class="token number">0.0</span>.0.0:3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, :::3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, <span class="token number">33060</span>/tcp   mysql8

<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># docker cp nginx:/etc/nginx/nginx.conf /root/dockerMetaData/nginx/conf/nginx.conf</span>
Successfully copied <span class="token number">2</span>.56kB to /root/dockerMetaData/nginx/conf/nginx.conf
<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># docker cp nginx:/etc/nginx/nginx.conf /root/dockerMetaData/nginx/conf/nginx.conf</span>
Successfully copied <span class="token number">2</span>.56kB to /root/dockerMetaData/nginx/conf/nginx.conf
<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># docker cp nginx:/etc/nginx/conf.d /root/dockerMetaData/nginx/conf.d</span>
Successfully copied <span class="token number">1</span>.54kB to /root/dockerMetaData/nginx/conf.d
<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># docker cp nginx:/usr/share/nginx/html /root/dockerMetaData/nginx/html</span>
Successfully copied <span class="token number">1</span>.54kB to /root/dockerMetaData/nginx/html

<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># ls</span>
conf  conf.d  html  logs
<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># cd conf</span>
<span class="token punctuation">[</span>root@localhost conf<span class="token punctuation">]</span><span class="token comment"># ls</span>
nginx.conf
<span class="token punctuation">[</span>root@localhost conf<span class="token punctuation">]</span><span class="token comment"># </span>

<span class="token punctuation">[</span>root@localhost conf<span class="token punctuation">]</span><span class="token comment"># docker stop nginx </span>
nginx
<span class="token punctuation">[</span>root@localhost conf<span class="token punctuation">]</span><span class="token comment"># docker rm nginx </span>
nginx
<span class="token punctuation">[</span>root@localhost conf<span class="token punctuation">]</span><span class="token comment"># </span>

<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># docker run -d \\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">-v</span> /root/dockerMetaData/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">-v</span> /root/dockerMetaData/nginx/conf.d:/etc/nginx/conf.d <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">-v</span> /root/dockerMetaData/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">-v</span> /root/dockerMetaData/nginx/logs:/var/log/nginx <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> <span class="token parameter variable">--name</span> nginx <span class="token punctuation">\\</span>
<span class="token operator">&gt;</span> nginx

d5b38fdc7048a5eab073bccf090c3a9e078e7e5a3413c0e1e9d5087d61f2da9d
<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                                                  NAMES
d5b38fdc7048   nginx          <span class="token string">&quot;/docker-entrypoint.…&quot;</span>   <span class="token number">3</span> seconds ago   Up <span class="token number">3</span> seconds   <span class="token number">0.0</span>.0.0:80-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp, :::80-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp                      nginx
d30f2ce80fe0   c71276df4a87   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">5</span> days ago      Up <span class="token number">5</span> hours     <span class="token number">0.0</span>.0.0:3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, :::3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, <span class="token number">33060</span>/tcp   mysql8
<span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="elasticsearch部署" tabindex="-1"><a class="header-anchor" href="#elasticsearch部署" aria-hidden="true">#</a> Elasticsearch部署</h3><h2 id="docker-network★" tabindex="-1"><a class="header-anchor" href="#docker-network★" aria-hidden="true">#</a> Docker NetWork★</h2>`,7),z={href:"https://www.cnblogs.com/zuxing/articles/8780661.html",target:"_blank",rel:"noopener noreferrer"},L=i('<p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216114714529.png" alt="image-20221216114714529"></p><p>安装Docker时，它会自动创建三个网络，bridge（创建容器默认连接到此网络）、 none 、host</p><p>host：容器将不会虚拟出自己的网卡，配置自己的IP等，而是使用宿主机的IP和端口。</p><p>Container：创建的容器不会创建自己的网卡，配置自己的IP，而是和一个指定的容器共享IP、端口范围。</p><p>None：该模式关闭了容器的网络功能。</p><p>Bridge：此模式会为每一个容器分配、设置IP等，并将容器连接到一个docker0虚拟网桥，通过docker0网桥以及Iptables nat表配置与宿主机通信。</p><p>以上都是不用动手的，真正需要配置的是自定义网络。</p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216115110672.png" alt="image-20221216115110672"></p><h3 id="bridge模式☆" tabindex="-1"><a class="header-anchor" href="#bridge模式☆" aria-hidden="true">#</a> Bridge模式☆</h3><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216115303240.png" alt="image-20221216115303240"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216115239162.png" alt="image-20221216115239162"></p><h3 id="自定义模式☆" tabindex="-1"><a class="header-anchor" href="#自定义模式☆" aria-hidden="true">#</a> 自定义模式☆</h3><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216114853228.png" alt="image-20221216114853228"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216115556439.png" alt="image-20221216115556439"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216115539819.png" alt="image-20221216115539819"></p><h3 id="host模式" tabindex="-1"><a class="header-anchor" href="#host模式" aria-hidden="true">#</a> Host模式</h3><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216115202752.png" alt="image-20221216115202752"></p><h3 id="container模式" tabindex="-1"><a class="header-anchor" href="#container模式" aria-hidden="true">#</a> Container模式</h3><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216115219706.png" alt="image-20221216115219706"></p><h3 id="none模式" tabindex="-1"><a class="header-anchor" href="#none模式" aria-hidden="true">#</a> None模式</h3><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216115230339.png" alt="image-20221216115230339"></p><h2 id="docker-compose★" tabindex="-1"><a class="header-anchor" href="#docker-compose★" aria-hidden="true">#</a> Docker Compose★</h2>',22),U={href:"https://docs.docker.com/compose/install/other/",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.runoob.com/docker/docker-compose.html",target:"_blank",rel:"noopener noreferrer"},B=i(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -SL https://github.com/docker/compose/releases/download/v2.14.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose

[root@192 nacos]# docker-compose version
Docker Compose version v2.14.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h3><p>If you used <code>curl</code> to install Compose CLI plugin, to uninstall it, run:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ rm $DOCKER_CONFIG/cli-plugins/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Or, if you have installed Compose for all users, run:</p><p>Remove for all users</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ rm /usr/local/lib/docker/cli-plugins/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h3><h4 id="一个文件" tabindex="-1"><a class="header-anchor" href="#一个文件" aria-hidden="true">#</a> 一个文件</h4><p>docker-compose.yml</p><h4 id="两个要素" tabindex="-1"><a class="header-anchor" href="#两个要素" aria-hidden="true">#</a> 两个要素</h4><p>服务（service）：一个个的应用容器实例（mysql容器/redis容器/nginx容器）</p><p>工程（project）：由一组关联的应用容器组成的完整业务单元在docker-compose.yml中定义</p><h3 id="docker-compose常用命令" tabindex="-1"><a class="header-anchor" href="#docker-compose常用命令" aria-hidden="true">#</a> Docker-Compose常用命令</h3><p>Compose常用命令</p><p>docker-compose -h # 查看帮助</p><p><strong>docker-compose up</strong> # <strong>启动</strong>所有docker-compose服务</p><p><strong>docker-compose up -d</strong> # <strong>启动</strong>所有docker-compose服务并<strong>后台运行</strong></p><p>docker-compose down # 停止并删除容器、网络、卷、镜像。</p><p>docker-compose exec yml里面的服务id # 进入容器实例内部 docker-compose exec docker-compose.yml文件中写的服务id /bin/bash</p><p><strong>docker-compose ps</strong> # <strong>展示</strong>当前docker-compose编排过的<strong>运行的所有容器</strong></p><p><strong>docker-compose top</strong> # <strong>展示</strong>当前docker-compose<strong>编排过的容器进程</strong></p><p><strong>docker-compose logs yml里面的服务id</strong> # <strong>查看容器输出日志</strong></p><p>docker-compose config # 检查配置</p><p><strong>docker-compose config -q</strong> # <strong>检查配置，有问题才有输出</strong></p><p><strong>docker-compose restart</strong> # <strong>重启</strong>服务</p><p><strong>docker-compose start</strong> # <strong>启动</strong>服务</p><p><strong>docker-compose stop</strong> # <strong>停止</strong>服务</p><h3 id="docker-compose-yml配置指令" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml配置指令" aria-hidden="true">#</a> docker-compose.yml配置指令</h3><p><strong>version</strong></p><p>指定本 yml 依从的 compose 哪个版本制定的。</p><p><strong>build</strong></p><p>指定为构建镜像上下文路径：</p><p>例如 webapp 服务，指定为从上下文路径 ./dir/Dockerfile 所构建的镜像：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;3.7&quot;
services:
  webapp:
    build: ./dir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，作为具有在上下文指定的路径的对象，以及可选的 Dockerfile 和 args：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;3.7&quot;
services:
  webapp:
    build:
      context: ./dir
      dockerfile: Dockerfile-alternate
      args:
        buildno: 1
      labels:
        - &quot;com.example.description=Accounting webapp&quot;
        - &quot;com.example.department=Finance&quot;
        - &quot;com.example.label-with-empty-value&quot;
      target: prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>context：上下文路径。</li><li>dockerfile：指定构建镜像的 Dockerfile 文件名。</li><li>args：添加构建参数，这是只能在构建过程中访问的环境变量。</li><li>labels：设置构建镜像的标签。</li><li>target：多层构建，可以指定构建哪一层。</li></ul><p><strong>cap_add，cap_drop</strong></p><p>添加或删除容器拥有的宿主机的内核功能。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cap_add:
  - ALL # 开启全部权限

cap_drop:
  - SYS_PTRACE # 关闭 ptrace权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>cgroup_parent</strong></p><p>为容器指定父 cgroup 组，意味着将继承该组的资源限制。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cgroup_parent: m-executor-abcd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>command</strong></p><p>覆盖容器启动的默认命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>command: [&quot;bundle&quot;, &quot;exec&quot;, &quot;thin&quot;, &quot;-p&quot;, &quot;3000&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>container_name</strong></p><p>指定自定义容器名称，而不是生成的默认名称。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>container_name: my-web-container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>depends_on</strong></p><p>设置依赖关系。</p><ul><li>docker-compose up ：以依赖性顺序启动服务。在以下示例中，先启动 db 和 redis ，才会启动 web。</li><li>docker-compose up SERVICE ：自动包含 SERVICE 的依赖项。在以下示例中，docker-compose up web 还将创建并启动 db 和 redis。</li><li>docker-compose stop ：按依赖关系顺序停止服务。在以下示例中，web 在 db 和 redis 之前停止。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;3.7&quot;
services:
  web:
    build: .
    depends_on:
      - db
      - redis
  redis:
    image: redis
  db:
    image: postgres
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：web 服务不会等待 redis db 完全启动 之后才启动。</p><p><strong>deploy</strong></p><p>指定与服务的部署和运行有关的配置。只在 swarm 模式下才会有用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;3.7&quot;
services:
  redis:
    image: redis:alpine
    deploy:
      mode：replicated
      replicas: 6
      endpoint_mode: dnsrr
      labels: 
        description: &quot;This redis service label&quot;
      resources:
        limits:
          cpus: &#39;0.50&#39;
          memory: 50M
        reservations:
          cpus: &#39;0.25&#39;
          memory: 20M
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
        window: 120s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以选参数：</p><p><strong>endpoint_mode</strong>：访问集群服务的方式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>endpoint_mode: vip 
# Docker 集群服务一个对外的虚拟 ip。所有的请求都会通过这个虚拟 ip 到达集群服务内部的机器。
endpoint_mode: dnsrr
# DNS 轮询（DNSRR）。所有的请求会自动轮询获取到集群 ip 列表中的一个 ip 地址。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>labels</strong>：在服务上设置标签。可以用容器上的 labels（跟 deploy 同级的配置） 覆盖 deploy 下的 labels。</p><p><strong>mode</strong>：指定服务提供的模式。</p><ul><li><p><strong>replicated</strong>：复制服务，复制指定服务到集群的机器上。</p></li><li><p><strong>global</strong>：全局服务，服务将部署至集群的每个节点。</p></li><li><p>图解：下图中黄色的方块是 replicated 模式的运行情况，灰色方块是 global 模式的运行情况。</p><p><img src="https://www.runoob.com/wp-content/uploads/2019/11/docker-composex.png" alt="img"></p></li></ul><p><strong>replicas：mode</strong> 为 replicated 时，需要使用此参数配置具体运行的节点数量。</p><p><strong>resources</strong>：配置服务器资源使用的限制，例如上例子，配置 redis 集群运行需要的 cpu 的百分比 和 内存的占用。避免占用资源过高出现异常。</p><p><strong>restart_policy</strong>：配置如何在退出容器时重新启动容器。</p><ul><li>condition：可选 none，on-failure 或者 any（默认值：any）。</li><li>delay：设置多久之后重启（默认值：0）。</li><li>max_attempts：尝试重新启动容器的次数，超出次数，则不再尝试（默认值：一直重试）。</li><li>window：设置容器重启超时时间（默认值：0）。</li></ul><p><strong>rollback_config</strong>：配置在更新失败的情况下应如何回滚服务。</p><ul><li>parallelism：一次要回滚的容器数。如果设置为0，则所有容器将同时回滚。</li><li>delay：每个容器组回滚之间等待的时间（默认为0s）。</li><li>failure_action：如果回滚失败，该怎么办。其中一个 continue 或者 pause（默认pause）。</li><li>monitor：每个容器更新后，持续观察是否失败了的时间 (ns|us|ms|s|m|h)（默认为0s）。</li><li>max_failure_ratio：在回滚期间可以容忍的故障率（默认为0）。</li><li>order：回滚期间的操作顺序。其中一个 stop-first（串行回滚），或者 start-first（并行回滚）（默认 stop-first ）。</li></ul><p><strong>update_config</strong>：配置应如何更新服务，对于配置滚动更新很有用。</p><ul><li>parallelism：一次更新的容器数。</li><li>delay：在更新一组容器之间等待的时间。</li><li>failure_action：如果更新失败，该怎么办。其中一个 continue，rollback 或者pause （默认：pause）。</li><li>monitor：每个容器更新后，持续观察是否失败了的时间 (ns|us|ms|s|m|h)（默认为0s）。</li><li>max_failure_ratio：在更新过程中可以容忍的故障率。</li><li>order：回滚期间的操作顺序。其中一个 stop-first（串行回滚），或者 start-first（并行回滚）（默认stop-first）。</li></ul><p><strong>注</strong>：仅支持 V3.4 及更高版本。</p><p><strong>devices</strong></p><p>指定设备映射列表。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>devices:
  - &quot;/dev/ttyUSB0:/dev/ttyUSB0&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>dns</strong></p><p>自定义 DNS 服务器，可以是单个值或列表的多个值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dns: 8.8.8.8

dns:
  - 8.8.8.8
  - 9.9.9.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>dns_search</strong></p><p>自定义 DNS 搜索域。可以是单个值或列表。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dns_search: example.com

dns_search:
  - dc1.example.com
  - dc2.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>entrypoint</strong></p><p>覆盖容器默认的 entrypoint。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>entrypoint: /code/entrypoint.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以是以下格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>entrypoint:
    - php
    - -d
    - zend_extension=/usr/local/lib/php/extensions/no-debug-non-zts-20100525/xdebug.so
    - -d
    - memory_limit=-1
    - vendor/bin/phpunit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>env_file</strong></p><p>从文件添加环境变量。可以是单个值或列表的多个值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>env_file: .env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以是列表格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>env_file:
  - ./common.env
  - ./apps/web.env
  - /opt/secrets.env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>environment</strong></p><p>添加环境变量。您可以使用数组或字典、任何布尔值，布尔值需要用引号引起来，以确保 YML 解析器不会将其转换为 True 或 False。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>environment:
  RACK_ENV: development
  SHOW: &#39;true&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>expose</strong></p><p>暴露端口，但不映射到宿主机，只被连接的服务访问。</p><p>仅可以指定内部端口为参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>expose:
 - &quot;3000&quot;
 - &quot;8000&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>extra_hosts</strong></p><p>添加主机名映射。类似 docker client --add-host。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>extra_hosts:
 - &quot;somehost:162.242.195.82&quot;
 - &quot;otherhost:50.31.209.229&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上会在此服务的内部容器中 /etc/hosts 创建一个具有 ip 地址和主机名的映射关系：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>162.242.195.82  somehost
50.31.209.229   otherhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>healthcheck</strong></p><p>用于检测 docker 服务是否健康运行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>healthcheck:
  test: [&quot;CMD&quot;, &quot;curl&quot;, &quot;-f&quot;, &quot;http://localhost&quot;] # 设置检测程序
  interval: 1m30s # 设置检测间隔
  timeout: 10s # 设置检测超时时间
  retries: 3 # 设置重试次数
  start_period: 40s # 启动后，多少秒开始启动检测程序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>image</strong></p><p>指定容器运行的镜像。以下格式都可以：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>image: redis
image: ubuntu:14.04
image: tutum/influxdb
image: example-registry.com:4000/postgresql
image: a4bc65fd # 镜像id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>logging</strong></p><p>服务的日志记录配置。</p><p>driver：指定服务容器的日志记录驱动程序，默认值为json-file。有以下三个选项</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>driver: &quot;json-file&quot;
driver: &quot;syslog&quot;
driver: &quot;none&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>仅在 json-file 驱动程序下，可以使用以下参数，限制日志得数量和大小。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>logging:
  driver: json-file
  options:
    max-size: &quot;200k&quot; # 单个文件大小为200k
    max-file: &quot;10&quot; # 最多10个文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当达到文件限制上限，会自动删除旧得文件。</p><p>syslog 驱动程序下，可以使用 syslog-address 指定日志接收地址。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>logging:
  driver: syslog
  options:
    syslog-address: &quot;tcp://192.168.0.42:123&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>network_mode</strong></p><p>设置网络模式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>network_mode: &quot;bridge&quot;
network_mode: &quot;host&quot;
network_mode: &quot;none&quot;
network_mode: &quot;service:[service name]&quot;
network_mode: &quot;container:[container name/id]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>networks</strong></p><p>配置容器连接的网络，引用顶级 networks 下的条目 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services:
  some-service:
    networks:
      some-network:
        aliases:
         - alias1
      other-network:
        aliases:
         - alias2
networks:
  some-network:
    # Use a custom driver
    driver: custom-driver-1
  other-network:
    # Use a custom driver which takes special options
    driver: custom-driver-2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>aliases</strong> ：同一网络上的其他容器可以使用服务名称或此别名来连接到对应容器的服务。</p><p><strong>restart</strong></p><ul><li>no：是默认的重启策略，在任何情况下都不会重启容器。</li><li>always：容器总是重新启动。</li><li>on-failure：在容器非正常退出时（退出状态非0），才会重启容器。</li><li>unless-stopped：在容器退出时总是重启容器，但是不考虑在Docker守护进程启动时就已经停止了的容器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>restart: &quot;no&quot;
restart: always
restart: on-failure
restart: unless-stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：swarm 集群模式，请改用 restart_policy。</p><p><strong>secrets</strong></p><p>存储敏感数据，例如密码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;3.1&quot;
services:

mysql:
  image: mysql
  environment:
    MYSQL_ROOT_PASSWORD_FILE: /run/secrets/my_secret
  secrets:
    - my_secret

secrets:
  my_secret:
    file: ./my_secret.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>security_opt</strong></p><p>修改容器默认的 schema 标签。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>security-opt：
  - label:user:USER   # 设置容器的用户标签
  - label:role:ROLE   # 设置容器的角色标签
  - label:type:TYPE   # 设置容器的安全策略标签
  - label:level:LEVEL  # 设置容器的安全等级标签
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>stop_grace_period</strong></p><p>指定在容器无法处理 SIGTERM (或者任何 stop_signal 的信号)，等待多久后发送 SIGKILL 信号关闭容器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>stop_grace_period: 1s # 等待 1 秒
stop_grace_period: 1m30s # 等待 1 分 30 秒 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>默认的等待时间是 10 秒。</p><p><strong>stop_signal</strong></p><p>设置停止容器的替代信号。默认情况下使用 SIGTERM 。</p><p>以下示例，使用 SIGUSR1 替代信号 SIGTERM 来停止容器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>stop_signal: SIGUSR1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>sysctls</strong></p><p>设置容器中的内核参数，可以使用数组或字典格式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sysctls:
  net.core.somaxconn: 1024
  net.ipv4.tcp_syncookies: 0

sysctls:
  - net.core.somaxconn=1024
  - net.ipv4.tcp_syncookies=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>tmpfs</strong></p><p>在容器内安装一个临时文件系统。可以是单个值或列表的多个值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tmpfs: /run

tmpfs:
  - /run
  - /tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ulimits</strong></p><p>覆盖容器默认的 ulimit。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ulimits:
  nproc: 65535
  nofile:
    soft: 20000
    hard: 40000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>volumes</strong></p><p>将主机的数据卷或着文件挂载到容器里。</p><div class="language-version line-numbers-mode" data-ext="version"><pre class="language-version"><code>version: &quot;3.7&quot;
services:
  db:
    image: postgres:latest
    volumes:
      - &quot;/localhost/postgres.sock:/var/run/postgres/postgres.sock&quot;
      - &quot;/localhost/data:/var/lib/postgresql/data&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行实例" tabindex="-1"><a class="header-anchor" href="#运行实例" aria-hidden="true">#</a> 运行实例</h3><p><strong>1）将自己的微服务项目通过Dockerfile的形式构建成镜像</strong></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216120523673.png" alt="image-20221216120523673"></p><p><strong>2）编写docker-compose.yml文件</strong></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216120316245.png" alt="image-20221216120316245"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216120358566.png" alt="image-20221216120358566"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216120550430.png" alt="image-20221216120550430"></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span> 
  <span class="token key atrule">microservice</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> springboot_demo1_docker<span class="token punctuation">:</span><span class="token number">1.1</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> ms01
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token string">&quot;6001:6001&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> eddie_net
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> redis
      <span class="token punctuation">-</span> mysql

  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis_compose
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6379:6379&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /mydata/redis_compose/data<span class="token punctuation">:</span>/data
      <span class="token punctuation">-</span> /mydata/redis_compose/conf/redis.conf<span class="token punctuation">:</span>/etc/redis/redis.conf
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> eddie_net
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>server /etc/redis/redis.conf

  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span>8.0.18
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql_compose
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&#39;root&#39;</span>
      <span class="token key atrule">MYSQL_ALLOW_EMPLY_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&#39;no&#39;</span>
      <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> <span class="token string">&#39;db2021&#39;</span>
      <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> <span class="token string">&#39;eddie&#39;</span>
      <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&#39;eddie&#39;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /mydata/mysql_compose/log<span class="token punctuation">:</span>/var/log/mysql
      <span class="token punctuation">-</span> /mydata/mysql_compose/data<span class="token punctuation">:</span>/var/lib/mysql
      <span class="token punctuation">-</span> /mydata/mysql_compose/conf<span class="token punctuation">:</span>/var/etc/mysql
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> eddie_net
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>default<span class="token punctuation">-</span>authentication<span class="token punctuation">-</span>plugin=mysql_native_password <span class="token comment">#解决外部无法访问</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
    <span class="token key atrule">eddie_net</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3）启动docker-compose服务</strong></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216120618059.png" alt="image-20221216120618059"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216120643441.png" alt="image-20221216120643441"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20221216120818682.png" alt="image-20221216120818682"></p>`,169);function $(H,j){const s=r("ExternalLinkIcon");return l(),d("div",null,[c,e("p",null,[e("a",p,[n("Docker: Accelerated, Containerized Application Development"),a(s)])]),e("p",null,[e("a",u,[n("GitHub - docker/docker-ce: This repository is deprecated and will be archived (Docker CE itself is NOT deprecated) see the https://github.com/docker/docker-ce/blob/master/README.md"),a(s)])]),m,v,e("p",null,[e("a",g,[n("Docker Hub Container Image Library | App Containerization"),a(s)])]),b,e("table",null,[h,e("tbody",null,[k,x,y,f,e("tr",null,[_,e("td",D,[n("Docker 仓库用来保存镜像，可以理解为代码控制中的代码仓库。Docker Hub("),e("a",q,[n("https://hub.docker.com"),a(s)]),n(") 提供了庞大的镜像集合供使用。一个 Docker Registry 中可以包含多个仓库（Repository）；每个仓库可以包含多个标签（Tag）；每个标签对应一个镜像。通常，一个仓库会包含同一个软件不同版本的镜像，而标签就常用于对应该软件的各个版本。我们可以通过 "),E,n(" 的格式来指定具体是这个软件哪个版本的镜像。如果不给出标签，将以 "),A,n(" 作为默认标签。")])]),O])]),I,e("p",null,[e("a",T,[n("Docker 命令大全 | 菜鸟教程 (runoob.com)"),a(s)])]),S,e("p",null,[e("a",N,[n("Docker Dockerfile | 菜鸟教程 (runoob.com)"),a(s)])]),R,e("blockquote",null,[e("p",null,[e("a",w,[n("raw.githubusercontent.com/redis/redis/7.0/redis.conf"),a(s)])]),M,C]),P,e("p",null,[e("a",z,[n("Docker：网络模式详解 - Gringer - 博客园 (cnblogs.com)"),a(s)])]),L,e("p",null,[e("a",U,[n("Install the Compose standalone | Docker Documentation"),a(s)])]),e("p",null,[e("a",G,[n("Docker Compose | 菜鸟教程 (runoob.com)"),a(s)])]),B])}const V=t(o,[["render",$],["__file","Docker.html.vue"]]);export{V as default};
