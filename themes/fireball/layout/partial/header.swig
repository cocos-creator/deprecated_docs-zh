<header>
    <nav class="navbar navbar-inverse">
        <div class="container navbar-wrapper">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">
                    <img alt="logo" src="{{ url_for('images/logo.png') }}">
                </a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    {% for title, link in site.data.menu %}
                    <li {% if is_current(url_for(link)) %}class="active"{% endif %}><a href="{{ url_for(link) }}">{{ title }}</a></li>
                    {% endfor %}
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="{{ edit_link() }}"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></a></li>
                </ul>
            </div>

        </div>
    </nav>
</header>
