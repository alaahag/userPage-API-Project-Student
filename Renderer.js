class Renderer
{
    constructor()
    {
        this.data = {};
    }

    renderData(data)
    {
        new RenderUsersData().renderData(data.Users);
        new RenderQuotesData().renderData(data.Quotes);
        new RenderBaconsData().renderData(data.Bacons);
        new RenderPokemonsData().renderData(data.Pokemons);
    }
}

class RenderUsersData extends Renderer
{
    constructor()
    {
        super();
    }

    renderData(data)
    {
        $(".user-container").empty();
        const template = Handlebars.compile($('#usersData-template').html());
        $(".user-container").append(template(data[0]));

        $(".friends-container").empty();
        const template2 = Handlebars.compile($('#friendsData-template').html());
        $(".friends-container").append(template2(data.filter(friends => friends !== data[0])));
    }
}

class RenderQuotesData extends Renderer
{
    constructor()
    {
        super();
    }

    renderData(data)
    {
        $(".quote-container").empty();
        const template = Handlebars.compile($('#quotesData-template').html());
        $(".quote-container").append(template(data));
    }
}

class RenderBaconsData extends Renderer
{
    constructor()
    {
        super();
    }

    renderData(data)
    {
        $(".meat-container").empty();
        const template = Handlebars.compile($('#baconsData-template').html());
        $(".meat-container").append(template(data));
    }
}

class RenderPokemonsData extends Renderer
{
    constructor()
    {
        super();
    }

    renderData(data)
    {
        $(".pokemon-container").empty();
        const template = Handlebars.compile($('#pokemonsData-template').html());
        $(".pokemon-container").append(template(data));
    }
}

Handlebars.registerHelper("capitalize", function(string)
{
    string = string || '';
    return string.slice(0,1).toUpperCase() + string.slice(1);
});