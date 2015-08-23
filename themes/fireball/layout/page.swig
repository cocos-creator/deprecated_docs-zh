<div class="container sidebar">
    {{ partial('partial/sidebar') }}
</div>
<div class="container content-wrap">
    <div class="row">
        <div class="col-lg-8 col-md-7 col-sm-9">
            <div class="title-header" id="top">
                {% if not is_home() %}<h1>{{ page.title }}</h1>{% endif %}
            </div>
            <div>
                <ol class="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li><a href="{{ url_for(category_link()) }}">{{ category_name() }}</a></li>
                    <li class="active">{{ page.title }}</li>
                </ol>
            </div>
            {{ page.content }}
            <div>
                <hr>
                <a href="{{ edit_link() }}">Edit This Page</a>
            </div>
            <div id="discourse-comments"></div>
            <div class="footer">
                {{ partial('partial/footer') }}
            </div>
        </div>
        <div class="col-lg-1 col-md-2 hidden-sm hidden-xs">
            <aside id="article-toc" role="navigation" class="fixed">
                <div id="article-toc-inner">
                    <strong class="sidebar-title">TOC</strong>
                    {{ toc(page.content, {list_number: false}) }}
                    <a href="#top" id="article-toc-top">back to top</a>
                </div>
            </aside>
        </div>
    </div>
</div>



{#<div id="content-wrap">#}
  {#<div id="content" class="wrapper">#}
  {#<div id="content-inner">#}
    {#<article class="article-container" itemscope itemtype="http://schema.org/Article">#}
    {#<div class="article-inner">#}
      {#<div class="article">#}
      {#<div class="inner">#}
        {#<header class="article-header">#}
        {#<h1 class="article-title" itemprop="name">{{ page.title }}</h1>#}
        {#<a href="{{ raw_link(page.source) }}" class="article-edit-link" title="{{ __('page.improve') }}"><i class="fa fa-pencil"></i></a>#}
        {#</header>#}
        {#<div class="article-content" itemprop="articleBody" data-swiftype-index="true">#}
        {#{{ page_anchor(page.content) }}#}
        {#</div>#}
        {#<footer class="article-footer">#}
        {#<time class="article-footer-updated" datetime="{{ date_xml(page.updated) }}" itemprop="dateModified">{{ __('page.last_updated', date(page.updated)) }}</time>#}
        {#{{ page_nav() }}#}
        {#</footer>#}
        {#{{ partial('partial/comment') }}#}
      {#</div>#}
      {#</div>#}
      {#<aside id="article-toc" role="navigation">#}
      {#<div id="article-toc-inner">#}
        {#<strong class="sidebar-title">{{ __('page.contents') }}</strong>#}
        {#{{ toc(page.content, {list_number: false}) }}#}
        {#<a href="#" id="article-toc-top">{{ __('page.back_to_top') }}</a>#}
      {#</div>#}
      {#</aside>#}
    {#</div>#}
    {#</article>#}
    {#{{ partial('partial/sidebar') }}#}
  {#</div>#}
  {#</div>#}
{#</div>#}
