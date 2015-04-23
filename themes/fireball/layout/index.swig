<div class="title-header">
    {% if not is_home() %}<h1>{{ page.title }}</h1>{% endif %}
</div>

<div class="index">
    <div class="row">
        <div class="col-lg-9">
            {{ page.content }}
            <div class="row">
                <div class="col-lg-4">
                    <h2>新手教程</h2>
                    {{ category_content('tutorial') }}
                </div>
                <div class="col-lg-4">
                    <h2>用户手册</h2>
                    {{ category_content('manual') }}
                </div>
                <div class="col-lg-4">
                    <h2>API文档</h2>
                    <a href="/api">API文档</a>
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        {{ partial('partial/footer') }}
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
