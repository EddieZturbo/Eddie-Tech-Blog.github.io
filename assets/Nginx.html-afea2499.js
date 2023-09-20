import{_ as i,W as t,X as l,Z as s,a1 as n,$ as c,Y as a,F as o}from"./framework-e28ace55.js";const p={},r=a(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20230108220502330.png" alt="image-20230108220502330"></p><p>https://www.nginx.com/</p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20230108220603891.png" alt="image-20230108220603891"></p><p><strong>——反向代理</strong></p><p><strong>——负载均衡</strong></p><p><strong>——HTTP服务器（动静分离）</strong></p><p><strong>——正向代理</strong></p><h2 id="linux安装nginx" tabindex="-1"><a class="header-anchor" href="#linux安装nginx" aria-hidden="true">#</a> Linux安装nginx</h2><blockquote><p><strong>在linux下安装nginx，首先需要安装 gcc-c++编译器。然后安装nginx依赖的pcre和zlib包。最后安装nginx即可。</strong></p></blockquote><p>1.先安装gcc-c++编译器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> gcc-c++
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.再安装pcre包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> pcre pcre-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.再安装zlib包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> zlib zlib-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>下面进行nginx的安装</strong></p></blockquote><p>1.在/usr/local/下创建文件nginx文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /usr/local/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.在网上下nginx包上传至Linux（https://nginx.org/download/），也可以直接下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://nginx.org/download/nginx-1.19.9.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.解压并进入nginx目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.19.9.tar.gz
<span class="token builtin class-name">cd</span> nginx-1.19.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4.使用nginx默认配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5.编译安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>6.查找安装路径</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>whereis nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7.进入sbin目录，可以看到有一个可执行文件nginx，直接**./nginx**执行就OK了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>9.查看是否启动成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20230108232749175.png" alt="image-20230108232749175"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20230108232809842.png" alt="image-20230108232809842"></p><h2 id="nginx配置文件结构" tabindex="-1"><a class="header-anchor" href="#nginx配置文件结构" aria-hidden="true">#</a> Nginx配置文件结构</h2><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20230129095354392.png" alt="image-20230129095354392"></p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20230108233047491.png" alt="image-20230108233047491"></p><ul><li>1、<strong>全局块</strong>：配置影响nginx全局的指令。一般有运行nginx服务器的用户组，nginx进程pid存放路径，日志存放路径，配置文件引入，允许生成worker process数等。</li><li>2、<strong>events块</strong>：配置影响nginx服务器或与用户的网络连接。有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等。</li><li>3、<strong>http块</strong>：可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。如文件引入，mime-type定义，日志自定义，是否使用sendfile传输文件，连接超时时间，单连接请求数等。</li><li>4、<strong>server块</strong>：配置虚拟主机的相关参数，一个http中可以有多个server。</li><li>5、<strong>location块</strong>：配置请求的路由，以及各种页面的处理情况。</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment">#user  nobody;</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>

    <span class="token comment">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    <span class="token comment">#access_log  logs/access.log  main;</span>

    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>

    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    root           html;</span>
        <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
        <span class="token comment">#    fastcgi_index  index.php;</span>
        <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
        <span class="token comment">#    include        fastcgi_params;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
        <span class="token comment"># concurs with nginx&#39;s one</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ /\\.ht {</span>
        <span class="token comment">#    deny  all;</span>
        <span class="token comment">#}</span>
    <span class="token punctuation">}</span>


    <span class="token comment"># another virtual host using mix of IP-, name-, and port-based configuration</span>
    <span class="token comment">#</span>
    <span class="token comment">#server {</span>
    <span class="token comment">#    listen       8000;</span>
    <span class="token comment">#    listen       somename:8080;</span>
    <span class="token comment">#    server_name  somename  alias  another.alias;</span>

    <span class="token comment">#    location / {</span>
    <span class="token comment">#        root   html;</span>
    <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token comment">#    }</span>
    <span class="token comment">#}</span>


    <span class="token comment"># HTTPS server</span>
    <span class="token comment">#</span>
    <span class="token comment">#server {</span>
    <span class="token comment">#    listen       443 ssl;</span>
    <span class="token comment">#    server_name  localhost;</span>

    <span class="token comment">#    ssl_certificate      cert.pem;</span>
    <span class="token comment">#    ssl_certificate_key  cert.key;</span>

    <span class="token comment">#    ssl_session_cache    shared:SSL:1m;</span>
    <span class="token comment">#    ssl_session_timeout  5m;</span>

    <span class="token comment">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
    <span class="token comment">#    ssl_prefer_server_ciphers  on;</span>

    <span class="token comment">#    location / {</span>
    <span class="token comment">#        root   html;</span>
    <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token comment">#    }</span>
    <span class="token comment">#}</span>

<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">nginx</span> 文件结构

...              <span class="token comment">#全局块</span>

events</span> <span class="token punctuation">{</span>         <span class="token comment">#events块</span>
   ...
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span>      <span class="token comment">#http块</span></span>
<span class="token punctuation">{</span>
    ...   <span class="token comment">#http全局块</span>
    <span class="token directive"><span class="token keyword">server</span>        <span class="token comment">#server块</span></span>
    <span class="token punctuation">{</span> 
        ...       <span class="token comment">#server全局块</span>
        <span class="token directive"><span class="token keyword">location</span> [PATTERN]   <span class="token comment">#location块</span></span>
        <span class="token punctuation">{</span>
            ...
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">location</span> [PATTERN]</span> 
        <span class="token punctuation">{</span>
            ...
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span>
    <span class="token punctuation">{</span>
      ...
    <span class="token punctuation">}</span>
    ...     <span class="token comment">#http全局块</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx操作指令" tabindex="-1"><a class="header-anchor" href="#nginx操作指令" aria-hidden="true">#</a> Nginx操作指令</h2><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20230108233229741.png" alt="image-20230108233229741"></p><h2 id="nginx进程模型" tabindex="-1"><a class="header-anchor" href="#nginx进程模型" aria-hidden="true">#</a> Nginx进程模型</h2><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20230108233321810.png" alt="image-20230108233321810"></p><p>在工作方式上，Nginx 分为<strong>单工作进程</strong>和<strong>多工作进程</strong>两种模式。</p><ul><li><strong>单工作进程模式</strong>：除主进程外，还有一个工作进程，工作进程是单线程的；</li><li><strong>多工作进程模式</strong>：每个工作进程包含多个线程。Nginx 默认为单工作进程模式；</li></ul><p>Nginx 在启动后，会有<strong>一个 master 进程和多个 worker 进程</strong>。</p><h3 id="master-进程" tabindex="-1"><a class="header-anchor" href="#master-进程" aria-hidden="true">#</a> master 进程</h3><p>master 进程主要用来管理 worker 进程，包含：接收来自外界的信号，向各 worker 进程发送信号，监控 worker 进程的运行状态，当异常情况下 worker 进程退出后，会自动重新启动新的 worker 进程。 master 进程充当整个进程组与用户的交互接口，同时对进程进行监护。它<strong>不需要处理网络事件，不负责业务的执行</strong>，只会通过<strong>管理 worker 进程</strong>来实现重启服务、平滑升级、更换日志文件、配置文件实时生效等功能。 我们要控制 Nginx，只需要通过 kill 向 master 进程发送信号就行了。比如 kill -HUP pid，我们一般用这个信号来重启 Nginx，或重新加载配置。因为是从容地重启，因此服务是不中断的。master 进程在接收到 HUP 信号后是怎么做的呢？首先 master 进程在接到信号后，会先重新加载配置文件，然后再启动新的 worker 进程，并向所有老的 worker 进程发送信号，告诉他们可以光荣退休了。新的 worker 在启动后，就开始接收新的请求，而老的 worker 在收到来自 master 的信号后，就不再接收新的请求，并且在当前进程中的所有未处理完的请求处理完成后，再退出。</p><blockquote><p>注： 直接给 master 进程发送信号，这是比较老的操作方式。Nginx 在 0.8 版本之后，引入了一系列命令行参数，来方便我们管理。比如：</p></blockquote><ul><li><code>./nginx -s reload</code>：重启 nginx；</li><li><code>./nginx -s stop</code>：停止nginx的运行；</li></ul><p>如何做到的呢？我们还是拿 reload 来说，我们看到，执行命令时，我们是启动一个新的 nginx 进程，而新的 nginx 进程在解析到 reload 参数后，就知道我们的目的是控制 nginx 来重新加载配置文件了，它会向 master 进程发送信号，然后接下来的动作，就和我们直接向 master 进程发送信号一样了。</p><h3 id="worker" tabindex="-1"><a class="header-anchor" href="#worker" aria-hidden="true">#</a> Worker</h3><p>基本的网络事件，则是放在 worker 进程中来处理了。<strong>多个 worker 进程之间是对等的</strong>，他们同等竞争来自客户端的请求，各进程互相之间是独立的，<strong>一个请求只可能在一个 worker 进程中处理</strong>。worker 进程的个数是可以设置的，一般我们会<strong>设置与机器 CPU 核数一致</strong>，这里面的原因与 Nginx 的<strong>进程模型</strong>以及<strong>事件处理模型</strong>是分不开的。 worker 进程之间是平等的，每个进程，处理请求的机会也是一样的。当我们提供 80 端口的 HTTP 服务时，一个连接请求过来，每个进程都有可能处理这个连接，怎么做到的呢？步骤如下：</p><ol><li>每个 worker 进程都是从 master 进程 fork 过来，在 master 进程里面，建立好需要 listen 的 socket (listenfd) 之后；</li><li>fork 出多个 worker 进程；</li><li>所有 worker 进程的 listenfd 会在新连接到来时变得可读，为保证只有一个进程处理该连接，<strong>所有 worker 进程在注册 listenfd 读事件前抢 accept_mutex</strong>，抢到互斥锁的 worker 进程注册 listenfd 读事件；在读事件里调用 accept 接受该连接。</li><li>当一个 worker 进程在 accept 这个连接之后，就开始读取请求，解析请求，处理请求。产生数据后，再返回给客户端，最后才断开连接；</li></ol><h2 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h2><h3 id="正向代理与反向代理的区别" tabindex="-1"><a class="header-anchor" href="#正向代理与反向代理的区别" aria-hidden="true">#</a> 正向代理与反向代理的区别：</h3><p>反向代理和正向代理的区别就是：<strong>正向代理代理客户端，反向代理代理服务器。</strong></p><p><strong>正向代理相对于目标服务器而言隐藏了客户端的真实IP地址</strong>，因为对于目标服务器而言所有请求都是从正向代理服务器发出的，正向代理主要是为了突破网络访问限制，比如科学上网，还有就是隐藏客户端IP地址。</p><p><strong>反向代理对于客户端而言隐藏了目标服务器IP地址</strong>，只需要知道代理服务器地址就能访问到目标服务器的资源。其主功能是可以做负载均衡和安全防护。不过，不管正向代理还是反向代理，都能加快客户端的访问速度，因为nginx服务器是一个高性能的http web服务器，其能够对代理中的数据作缓冲。</p><p>反向代理，其实客户端对代理是无感知的，因为客户端不需要任何配置就可以访问，我们只需要将请求发送到反向代理服务器，由反向代理服务器去选择目标服务器获取数据后，在返回给客户端，此时反向代理服务器和目标服务器对外就是一个服务器，暴露的是代理服务器地址，隐藏了真实服务器IP地址。</p><h3 id="反向代理配置" tabindex="-1"><a class="header-anchor" href="#反向代理配置" aria-hidden="true">#</a> 反向代理配置</h3><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20230129110830740.png" alt="image-20230129110830740"></p><h4 id="简单配置" tabindex="-1"><a class="header-anchor" href="#简单配置" aria-hidden="true">#</a> 简单配置</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  www.zhengqing520.com</span><span class="token punctuation">;</span><span class="token comment"># 服务器地址或绑定域名</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span> <span class="token comment"># 访问80端口后的所有路径都转发到 proxy_pass 配置的ip中</span>
        <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
   		<span class="token directive"><span class="token keyword">proxy_pass</span> http://zhengqingya.gitee.io</span><span class="token punctuation">;</span> <span class="token comment"># 配置反向代理的ip地址和端口号 【注：url地址需加上http:// 或 https://】</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂配置" tabindex="-1"><a class="header-anchor" href="#复杂配置" aria-hidden="true">#</a> 复杂配置</h4><ol><li>www.zhengqing520.com/api 转发到 http://www.zhengqing520.com:9528/api/</li><li>www.zhengqing520.com/blog/ 转发到 http://zhengqingya.gitee.io/blog/</li></ol><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  www.zhengqing520.com</span><span class="token punctuation">;</span><span class="token comment"># 服务器地址或绑定域名</span>
 
    <span class="token directive"><span class="token keyword">location</span> ^~ /api</span> <span class="token punctuation">{</span>  <span class="token comment"># ^~/api 表示匹配前缀为api的请求</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span>  http://www.zhengqing520.com:9528/api/</span><span class="token punctuation">;</span>  <span class="token comment"># 注：proxy_pass的结尾有/， -&gt; 效果：会在请求时将/api/*后面的路径直接拼接到后面</span>
  
        <span class="token comment"># proxy_set_header作用：设置发送到后端服务器(上面proxy_pass)的请求头值  </span>
            <span class="token comment"># 【当Host设置为 $http_host 时，则不改变请求头的值;</span>
            <span class="token comment">#   当Host设置为 $proxy_host 时，则会重新设置请求头中的Host信息;</span>
            <span class="token comment">#   当为$host变量时，它的值在请求包含Host请求头时为Host字段的值，在请求未携带Host请求头时为虚拟主机的主域名;</span>
            <span class="token comment">#   当为$host:$proxy_port时，即携带端口发送 ex: $host:8080 】</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span> 
  
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span> <span class="token comment"># 在web服务器端获得用户的真实ip 需配置条件①    【 $remote_addr值 = 用户ip 】</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span><span class="token comment"># 在web服务器端获得用户的真实ip 需配置条件②</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> REMOTE-HOST <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token comment"># proxy_set_header X-Forwarded-For $http_x_forwarded_for; # $http_x_forwarded_for变量 = X-Forwarded-For变量</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> ^~ /blog/</span> <span class="token punctuation">{</span> <span class="token comment"># ^~/blog/ 表示匹配前缀为blog/后的请求</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span>  http://zhengqingya.gitee.io/blog/</span><span class="token punctuation">;</span> 
  
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$proxy_host</span></span><span class="token punctuation">;</span> <span class="token comment"># 改变请求头值 -&gt; 转发到码云才会成功</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>  X-Real-IP  <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>  X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-NginX-Proxy true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2><p>负载均衡也是Nginx常用的一个功能，负载均衡其意思就是分摊到多个操作单元上进行执行，例如Web服务器、FTP服务器、企业关键应用服务器和其它关键任务服务器等，从而共同完成工作任务。简单而言就是当有2台或以上服务器时，根据规则随机的将请求分发到指定的服务器上处理，<strong>负载均衡配置一般都需要同时配置反向代理，通过反向代理跳转到负载均衡</strong>。而Nginx目前支持自带3种负载均衡策略，还有2种常用的第三方策略。</p><p><img src="https://eddie-typora-image.oss-cn-shenzhen.aliyuncs.com/typora-user-images/image-20230108234753837.png" alt="image-20230108234753837"></p><h3 id="负载均衡策略" tabindex="-1"><a class="header-anchor" href="#负载均衡策略" aria-hidden="true">#</a> 负载均衡策略</h3>`,72),d=s("strong",null,"1) 轮询（默认）",-1),v={href:"https://www.cnblogs.com/spec-dog/p/13292111.html",target:"_blank",rel:"noopener noreferrer"},m=a(`<h3 id="负载均衡配置" tabindex="-1"><a class="header-anchor" href="#负载均衡配置" aria-hidden="true">#</a> 负载均衡配置</h3><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> cluster</span><span class="token punctuation">{</span><span class="token comment">#负载均衡配置 可以指定负载均衡规则</span>
	<span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.199.181:8080</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.199.181:8081</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>
        <span class="token comment">#charset koi8-r;</span>
        <span class="token comment">#access_log  logs/host.access.log  main;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token comment">#root   html;</span>
            <span class="token comment">#index  index.html index.htm;</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://cluster</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>
        <span class="token comment">#charset koi8-r;</span>
        <span class="token comment">#access_log  logs/host.access.log  main;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token comment">#root   html;</span>
            <span class="token comment">#index  index.html index.htm;</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://cluster</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动静分离-http服务器" tabindex="-1"><a class="header-anchor" href="#动静分离-http服务器" aria-hidden="true">#</a> <strong>动静分离&amp;HTTP服务器</strong></h2><h3 id="动静分离" tabindex="-1"><a class="header-anchor" href="#动静分离" aria-hidden="true">#</a> 动静分离</h3><p>动静分离是让动态网站里的动态网页根据一定规则把不变的资源和经常变的资源区分开来，动静资源做好了拆分以后，我们就可以根据静态资源的特点将其做缓存操作，这就是网站静态化处理的核心思路</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> test</span><span class="token punctuation">{</span>  
       <span class="token directive"><span class="token keyword">server</span> localhost:8080</span><span class="token punctuation">;</span>  
       <span class="token directive"><span class="token keyword">server</span> localhost:8081</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>   

    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>  
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>  
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>  

        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>  
            <span class="token directive"><span class="token keyword">root</span>   e:\\wwwroot</span><span class="token punctuation">;</span>  
            <span class="token directive"><span class="token keyword">index</span>  index.html</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  

        <span class="token comment"># 所有静态请求都由nginx处理，存放目录为html  </span>
        <span class="token directive"><span class="token keyword">location</span> ~ \\.(gif|jpg|jpeg|png|bmp|swf|css|js)$</span> <span class="token punctuation">{</span>  
            <span class="token directive"><span class="token keyword">root</span>    e:\\wwwroot</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  

        <span class="token comment"># 所有动态请求都转发给tomcat处理  </span>
        <span class="token directive"><span class="token keyword">location</span> ~ \\.(jsp|do)$</span> <span class="token punctuation">{</span>  
            <span class="token directive"><span class="token keyword">proxy_pass</span>  http://test</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  

        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>  
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>  
            <span class="token directive"><span class="token keyword">root</span>   e:\\wwwroot</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们就可以吧HTML以及图片和css以及js放到wwwroot目录下，而tomcat只负责处理jsp和请求，例如当我们后缀为gif的时候，Nginx默认会从wwwroot获取到当前请求的动态图文件返回，当然这里的静态文件跟Nginx是同一台服务器，我们也可以在另外一台服务器，然后通过反向代理和负载均衡配置过去就好了，只要搞清楚了最基本的流程，很多配置就很简单了，另外localtion后面其实是一个正则表达式，所以非常灵活</p><h3 id="http服务器" tabindex="-1"><a class="header-anchor" href="#http服务器" aria-hidden="true">#</a> HTTP服务器</h3><p>Nginx本身也是一个静态资源的服务器，当只有静态资源的时候，就可以使用Nginx来做服务器，同时现在也很流行动静分离，就可以通过Nginx来实现，首先看看Nginx做静态资源服务器</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>                                                         
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>                                               
        <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">1024M</span></span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
               <span class="token directive"><span class="token keyword">root</span>   e:\\wwwroot</span><span class="token punctuation">;</span>
               <span class="token directive"><span class="token keyword">index</span>  index.html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样如果访问http://localhost 就会默认访问到E盘wwwroot目录下面的index.html，如果一个网站只是静态页面的话，那么就可以通过这种方式来实现部署。</p>`,11);function u(k,b){const e=o("ExternalLinkIcon");return t(),l("div",null,[r,s("p",null,[d,n(" 每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。 2)、weight 权重 指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。 3)、ip_hash 每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，"),s("strong",null,[n("可以解决session的问题"),s("a",v,[n("nginx反向代理导致session失效的问题处理 - 【雨歌】 - 博客园 (cnblogs.com)"),c(e)])]),n("。 4)、fair（第三方） 按后端服务器的响应时间来分配请求，响应时间短的优先分配。 5)、url_hash（第三方）")]),m])}const h=i(p,[["render",u],["__file","Nginx.html.vue"]]);export{h as default};
