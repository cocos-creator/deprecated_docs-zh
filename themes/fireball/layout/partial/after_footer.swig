<!-- Scripts -->
<!-- build:js build/js/main.js -->
<!-- endbuild -->
{#<script src="//cdnjs.cloudflare.com/ajax/libs/retina.js/1.3.0/retina.min.js" async></script>#}
{#{% if page.layout === 'plugins' %}#}
<!-- Plugin search -->
{#<script src="//cdn.jsdelivr.net/lunr/0.5.7/lunr.min.js"></script>#}
{#{% endif %}#}

<!--bootstrap -->
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
{{ js("js/bootstrap.min.js") }}
{% if page.layout !== 'index' and page.layout !== 'category' %}
    {{ js('js/toc') }}
{% endif %}
{{ js("js/anchor.min.js")}}
<script type="text/javascript">
  addAnchors('.content-wrap h1, .content-wrap h2, .content-wrap h3');
</script>
<!-- Swiftype -->
{#<script type="text/javascript">#}
  {#(function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){#}
  {#(w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);#}
  {#e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);#}
  {#})(window,document,'script','//s.swiftypecdn.com/install/v1/st.js','_st');#}

  {#_st('install','{{ config.swiftype_key }}');#}
{#</script>#}
<!--discourse comment -->

{#<script type="text/javascript">#}
    {#var discourseUrl = "http://forum-test.fireball-x.com/";#}
    {#&#123;&#35;console.log("http://docs-zh.fireball-x.com{{ url_for(page.path) }}");&#35;&#125;#}
    {#var discourseEmbedUrl = "http://docs-zh.fireball-x.com{{ url_for(page.path) }}";#}

    {#(function() {#}
        {#var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true;#}
        {#d.src = discourseUrl + 'javascripts/embed.js';#}
        {#(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);#}
    {#})();#}
{#</script>#}
