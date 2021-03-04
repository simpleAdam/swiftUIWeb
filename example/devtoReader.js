let list = ["Home", "Explore", "Bell", "Mail"];
let urls = ["./home.html", "./about.html", "./buy.html"];

let endpoint = "https://dev.to/api/articles?username=";

let devToLogoSvg = `./assets/logo.svg`
let bellIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAVOElEQVR4nO3debz992Dn8VcWWYhYJ1JbMbQmURlbTMcUg0ekpWhpLVOK0jIYsZtS26MPLR5DUTWWPJp0aslYaqk1tthGbZVBI1MtRUqIJYkksv3MH8dyJb/8fvd37znnc5bn8/F4/ZnHI/ec+31/fvfec76nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2b6/qJtXDqldU76++XH23uqDaUZ1T/Uv1kerY6lHVzX703wIAS+SW1Qurr1U/3GLfqF5W3WbO/+8AwB66e5Of5Ld66F9Wn6nuW+09vy8FANidm1UfbPoH/yU7ubrdnL4mAOAy7FM9rbqw2R/+G3tZdYU5fH0AwCVcuTqx+R78G/t8dcOZf5UAwE9cqzqlcYf/jzujOnLGXysAUB1andr4w//HnVXdeqZfMQCsuQOrTzX+0N/ZbwJuNMOvGwDW2vGNP+wvq8/nhYEAMHW/0fhDfne9dGZfPQCsoYOqf238Ab+7duTOgQAwNU9p/OG+2f5uRo8BAKyVy1ffafzBvicdPZNHAgDWyAMbf6DvaW+fxQMBAOvk/Y0/0Pe0i5rcrwAA2IIrNv/7/E+rh87g8QCAtXDXxh/kW+01M3g8AGAtLNOr/y/ZP87g8QCAtfC/Gn+Qb7WLqv2m/5AAwOob+XG/0+g6039IAGD1fazxh/h2Onz6DwkArL6/b/whvp0Om/5DAgCra//qptXnGn+Ib6d7VFef8mMDACvh0OrXq2dUb6i+0OQFdKMP72n2zSY3NPrz6veqI6p9p/DYAcBS2L/6T9WTqzdVpzX+cB7VeU1e4/Ci6t7VNbfxuALAQrlcdbvqj6sPNjn0Rh+8i9w/VcdVv1v93J4/3AAwzvWrR1Rvqc5u/KG6zP3f6nnVHZv8YwoAFsoRTf6Gf3LjD81V7bvVX1f3rK6wqWcFAGbgsOrZTX5tPfpwXLfOa/KCyd9s8roKAJipQ6vHtfzvz1+lvlu9orrtLp43ANhje1VHVW9seT+ad136QvXY6qo7fSYBYBOuWj2x+mLjDzbtWec1+SClW1/qWQWAy3D96sXV9xt/kGn7fbi6e5Pf5ADApdyiOqHVuwufJp1aPTQfUQzAj9ysyXv2Rx9Qmk9fbvIPAbciBlhTN63+ptrR+ENJ8++fqwdX+wTAWrhWdXwOfk36fHV0AKysy1dPr85p/KGjxeud1eEBsFLuXX218YeMFruLmrwD5OAAWGrXq97R+INFy9VpTW4zDMCS2bfJTXz8ul/b6c3VdQJgKRxWfbrxh4dWo7OqBwbAwtqrenST28COPjS0er2huloALJRrVu9u/CGh1e7r1a8GwEK4c3VG4w8HrUc7qj/NDYQAhtm7ekZ1ceMPBa1f76sOCYC5ulqTG7eMPgS03p1W3SYA5uLwJh/oMnr8pR9WFzT5TAEAZuio6szGj750yZ7d5J0oAEzZ71cXNn7opcvqhOqAAJia5zR+3KXN9NHqKgGwLXtXL2/8qEt70sl5hwDAlu1bvarxYy5tpS9U1w6APbJ/9abGj7i0nb5U3SAANmW/6u2NH29pGn21+vkA2KV9mnzoyujRlqbZF6ufC4Cd2qs6vvFjLc2iz+XTBAF26iWNH2lpln2yOjgAfuJpjR9naR6d2OQdLgBr7780fpSlefbyANbcr1Q/aPwgS/PuCQGsqRtWZzR+iKURXVz9RgBr5opN7pQ2eoSlkZ3T5OOtAdbG6xo/vtIidEp1UABr4JjGj660SL02gBX3H6sLGj+40qL1yABW1NWrrzV+aKVF7PzqlgGsIPf4l3bdP1QHBLBCHtD4cZWWoRcEsCKuU32v8cMqLUM7qtsHsOT2qt7T+FGVlqkvNblXBsDSenjjx1Raxl4awJI6NL/6l7baxdWRASyhVzV+RKVl7lPVPgEskTs0fjylVehRASyJ/fJBP9K0+l6TP6cBLLwnNX40pVXquAAW3NWrMxs/mNIqdXF10wAW2J81fiylVeztASyoGzT5QJPRQymtav85gAX02sYPpLTKfbzJ3TUBFsYtmtzDfPRASqvevQJYIG9u/DBK69BnAlgQN8lP/9I8u0sAC+DVjR9EaZ36aACD3bC6qPGDKK1btw9goFc0fgildezdAQxyaN73L43siAAG+KPGD6C0zr0sgDnbt/pa4wdQWue+X10pgDm6V+PHT1IdE8Acvb/xwyep/l9uDwzMyeGNHz1JP+2oAObAR/5Ki9UJAczYvtXpjR88ST/tvLwYEJixX2v82Em6dL8XwAy9pvFDJ+nSvT+AGTm4OrfxQyfp0u2orhvADDyo8SMn6bL77wHMwImNHzhJl93JAUzZVaoLGz9wknbd9QKYot9p/LBJ2n2PDmCKXt/4YZO0+94XwJQcUJ3d+GGTtPsubPInO4Btu0vjR03S5rt/AFPw8sYPmqTN9/oApuArjR80SZvvO9XeAWzDjRo/ZpL2vFsEsA0Pa/yQSdrznhjANnj7n7ScvSuALdq7+nbjh0zSnndOtV8AW3Dzxo+YpK132wC24PGNHzBJW+/pAWzBGxs/YJK23jsC2ILTGj9gkrbetwPYQ9du/HhJ2n43CmAP3LPxwyVp+/1OAHvguY0fLknb78UB7IGTGj9ckrbfxwPYpH2q7zd+uCRtv/Or/QPYhBs3frQkTa8jAtiEezV+sCRNr/sFsAnPaPxgSZpezw5gE3wCoLRavSWATTil8YMlaXr9UwC7sX91YeMHS9L02lFdPoBdOKLxYyVp+t0ygF24T+OHStL0u38Au/CUxg+VpOn3tAB24ZWNHypJ0+8vA9iF9zZ+qCRNvw8EsAtfavxQSZp+Xw7gMuxbXdT4oZI0/S5qco0DXMr1Gz9SkmbXDQLYiTs0fqAkza47BrATD2r8QEmaXQ8MYCee3PiBkjS7nhTATryg8QMlaXY9P4CdeHXjB0rS7HpVADvhJkDSaveeAHbic40fKEmz67MB7MS3Gj9QkmbXNwO4hH2rHY0fKEmz6+JqnwA2OLTx4yRp9h0SwAa/2PhhkjT7bhjABrdq/DBJmn03C2ADnwMgrUe3C2CDezR+mCTNvrsGsMH9Gz9MkmbffQPY4BGNHyZJs+8PAtjAJwFK69HjA9jg2Y0fJkmz75kBbOCjgKX16LkBbPDnjR8mSbPv+QFs8D8bP0ySZt+LA9jg2MYPk6TZ99IANji+8cMkafa9MoANXtX4YZI0+44LYIMTGj9MkmbfqwLY4I2NHyZJs++EADZ4S+OHSdLse2MAG/xt44dJ0ux7cwAbvKPxwyRp9r01gA3e3fhhkjT73hbABu9p/DBJmn3vCGCD9zV+mCTNvncFsMEHGj9MkmbfiQFs8MHGD5Ok2ffeADb4cOOHSdLse38AG3y08cMkafadFMAGH2v8MEmafR8KYINPNH6YJM2+jwawwcmNHyZJs++TAWxwSuOHSdLs+2wAG/xz44dJ0uw7NYANvtb4YZI0+74cwAbfavwwSZp9/xrABmc2fpgkzb4zAtjgB40fJkmz7+wANri48cMkafadH8CP7Nv4UZI0vwCqOqjxgyRpfh0QQHWNxg+SpPl1tQCqGzR+kCTNr58PoPqlxg+SpPl1WADVLzd+kCTNr1sFUN2p8YMkaX7dPoDq7o0fJEnz664BVPdr/CBJml/3DqD6/cYPkqT59eAAqsc0fpAkza9HB1A9s/GDJGl+PT2A6kWNHyRJ8+sFAVR/1fhBkjS/jgugekvjB0nS/HpTANWHGj9IkubXSQFUn238IEmaXycHUH218YMkaX59JYDq7MYPkqT5dVbA2rtc48dI0vzbL2CtXavxQyRp/l07YK3dvPFDJGn+3TxgrR3d+CGSNP+ODlhrD2j8EEmafw8IWGtPaPwQSZp/jw9Ya89r/BBJmn/PC1hrxzd+iCTNv+MD1to7Gz9EkubfuwLW2ucaP0SS5t/nA9bamY0fIknzz+2AYY1dsfEjJGlcBwespcMaP0CSxnV4wFo6qvEDJGlc7gYIa+rBjR8gSeN6SMBaenrjB0jSuJ4ZsJaObfwASRqXmwHBmjqp8QMkaVwfCVhLpzV+gCSN6/SAtXNgtaPxAyRpbAcFrJWbNH54JI3v3weslbs3fngkje+eAWvlcY0fHknje1LAWnlp44dH0viODVgr3gIo6YfVxwLWyhmNHx5J4/OxwLBGrtH40ZG0OF03YC3cofGDI2lx+rWAtfCoxg+OpMXpCQFrwTsAJG3suIC18OHGD46kxenvA1bePtX3Gz84khanC6r9A1ba4Y0fG0mL160CVtrvNn5oJC1eDwtYaS9q/NBIWrxeGbDSPtr4oZG0eHkhIKywfapzGj80khavC6oDA1bSLRs/MpIWt9sFrKRjGj8wkha3pwaspDc0fmAkLW7vDFhJpzd+YCQtbmc1ea0QsEJ+ofHjImnxu3nASnlw44dF0uJ3TMBKeU3jh0XS4ve2gJWxd/Wtxg+LpMXvnGq/gJXg/f+S9qQ7BKyEP2z8oEhanp4TsBJOavygSFqePhOw9K7U5B7fowdF0vK0o7pWwFK7X+PHRNLy9ciApfa6xg+JpOXrvQFL64Dq+40fEknL14XV1QKW0t0aPyKSlrcHBSylv2z8gEha3v42YOkcWJ3Z+AGRtLxdUP2bgKVyn8aPh6Tl71EBS+VtjR8OScvfxwOWxiFNXsE7ejgkrUY3DlgKxzR+MCStTn8SsBROafxgSFqdTs9HBMPCu0Pjx0LS6nW/gIX2+sYPhaTV68MBC+uaefGfpNl104CF9KzGD4Sk1e3YgIVzUPXtxg+EpNXt/OpaAQvlMY0fB0mr3/8IWBiXq77a+GGQtPqdXV0lYCE8qPGjIGl9elrAcPtVX2r8IEhan75XXTVgqEc0fgwkrV/PDRjm8tXXGz8Ektavc5vcewQY4EmNHwFJ69vLAubu0OrMxg+ApPXtouqIgLk6rvEXvySdFDA3/6Ha0fgLX5J+WN0nYOb2rj7R+Atekn7cV6srBszUYxt/sUvSJXtJwMz82+qcxl/oknTJdlS/EjAT72v8RS5Jl9Wp1QEBU/Xwxl/ckrS7nh8wNYc1uevW6AtbknbXjurOAdu2f3Vy4y9qSdps36gOCdiWFzb+YpakPe1t1V4BW/Lbjb+IJWmrPTVgjx1Wnd34C1iSttrF1dEBm3Zwk7fTjL54JWm7fbu6fsBu7VO9vfEXrSRNq882+cEG2IWXNP5ilaRp944mP+AAO/GYxl+kkjSr/iLgUu7V5AUzoy9QSZplTw74iTtV5zf+wpSkefSQgI7M2/0krVcXVb8ZrLGbVmc0/mKUpHl3fvWrwRr6pepbjb8IJWlU51VHBWvk8Oqbjb/4JGl051Z3DNbAEdXpjb/oJGlROjcfIcyKO7L6TuMvNklatM6v7hGsoNtWZzX+IpOkRe3C6r7BCrlbk19xjb64JGnRu7h6ZLACHtLkPa+jLypJWqaeFSyxpzb+IpKkZe1l+QAhlsy+1Ssaf/FI0rL31uoKwRK4YvWuxl80krQqfbK6RrDArlOd3PiLRZJWrS81uYkaLJwjq683/iKRpFXtzNwwiAXz203uaT364pCkVe+i6r8Gg+1VPb3a0fiLQpLWqRfnHQIMcmB1QuMvAkla195dXTmYo2s1eVXq6G9+SVr3Tq1+IZiDX86L/SRpkfpudVQwQw9q8olVo7/ZJUk/20XVMcGU7VP9WeO/wSVJu+7Yar9gCq5andj4b2pJ0ub6cHVIsA2HVV9s/DezJGnP+kp1s2ALfr06q/HfxJKkrXVO9VvBHvjD6uLGf/NKkrbXjuoZTW7cBpfpwOrVjf+GlSRNt9dVlw924prVJxr/TSpJmk2fbnIjN/iJW1SnNf6bU5I0206rbhk0eYHIOY3/ppQkzadzq3vF2jukOlSStFa5TwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVI+qfqiF7DO7eN4AYFuObvxBp5332l08bwCwLddt/EGnnffUXTxvALBt32z8YadLd+ddPWkAsF1vbfxhp5/t4uoqu3rSAGC7Htf4A08/26d3+YwBwBQc0fgDTz/bc3b5jAHAlPxL4w89/bTb7PrpAoDpeGHjDz1N+ka1966fLgCYjiMbf/Bp0vN381wBwFSd0vjDT5PXZADA3Py3xh9+695HdvssAcCUXak6q/GH4Dp3n90+SwAwA89t/CG4rn2x2mf3TxEATN+h1bmNPwzXsYdu4vkBgJn508YfhuvWqdW+m3lyAGBWrlyd0fhDcZ2656aeGQCYsT9o/KG4Lp24yecEAGZu7+pjjT8cV73zql/c5HMCAHNxWHV+4w/JVe7Jm342AGCOntj4Q3JV+2je9gfAgtqryd+oRx+Wq9b3qutt/mkAgPm7RvW1xh+aq9KO6h579AwAwCC3rn7Q+MNzFfrjPXzsAWCo+zT56XX0AbrM/e8mf1YBgKXyhMYfosvaB6sD9vwhB4DF8OzGH6bL1ierg7fyYAPAIvGpgZvvU9VVt/YwA8DieUbjD9dF7/9UV9ri4wsAC+vh1cWNP2gXsbdWl9/6QwsAi+0u1ZmNP3AXqRflLn8ArIF/V32h8Qfv6M6rHrzNxxIAlsoVqr9q/CE8qlOrI7b9KALAkrpv9Z3GH8jz7C+a/AMIANbaNas3NP5gnnVfrO40pccMAFbGXat/bPxBPe3OrZ6VO/sBwGXar3pM9a3GH9zb7eLq+OraU32EAGCFHVQ9peX8h8BF1WuqG0/9UQGANXFgkxsI/UPjD/bddWb1wur6M3kkAGBN3bbJr9TPavxh/+N2VB+qHpJX9gPATB1Y3av668a8hfCi6gPVY6vrzvZLBQB2Zp/qyOpJTe6nf3rTP/DPa/JBPc+v7pYP7AGAhXTt6qjq0U3+Jv831d81eYvhGdU51YVNXqX/gyZ/u/9K9Znq3dUrqz+qfqu6SXW5+f7vAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADL4v8DFt2+IQXrXXcAAAAASUVORK5CYII="


function getData(api) {
  fetch(api)
    .then((d) => d.json())
    .then((obj) => {
      render(homePageView(obj));
    });
}

function dummyAction(e, vNode) {
  let searchterm = vNode.el[0].value;
  getData("https://dev.to/api/articles?username=" + searchterm);
}

function render(node) {
  app.innerHTML = "";
  app.appendChild(node.el);
}

const pageTitle = "Search Dev.to for users";

function homePageView(datasource) {
  let homePage = vStack(
    header(
      vStack(
        hStack(
          image(devToLogoSvg).css({
            height: "40px",
            paddingRight: "20px",
          }),
          text(pageTitle).css({ fontWeight: 700, fontSize: "1.2rem" })
        ).css({ alignItems: "center" }),
        form(
          { action: dummyAction },
          hStack(
            input({ action: "", type: "text" })
              .attr({
                id: "searchv",
                name: "searchv",
                placeholder: "search users",
              })
              .css({ flex: 1 }),
            button({ action: dummyAction }, "submit").css({
              paddingLeft: "10px",
            })
          ).css({ padding: "6px 0px" })
        )
      )
    ).css({
      justifyContent: "flex-start",
      alignItems: "center",
      borderBottom: "2px solid #1119",
    }),
    scrollable(
      "vStack",
      ...datasource.map((each) =>
        vStack(
          hStack(
            text(each.user.name).css({ fontWeight: 700, paddingRight: "10px" }),
            text(each.user.username).css({ fontWeight: 200, color: "#000a" })
          ),
          text(each.created_at).css({ fontSize: ".8rem" }),
          text(each.title).css({
            padding: "8px 2px 0px 2px",
            color: "#666",
            fontSize: ".95rem",
          })
        ).css({ border: "1px solid #1112", padding: "10px 12px" })
      )
    ).css({ overflowY: "scroll" }),
    spacer(),
    footer(
      ...list.map((each) =>
        hStack(
          image(bellIcon).css({
            height: "36px",
            padding: "3px",
            background: "rgba(50,50,60,.9)",
            boxSizing: "border-box",
          }),
          text(String(each)).css({ paddingLeft: "5px" })
        ).css({ alignItems: "center" })
      )
    ).css({ minHeight: "40px", alignItems: "center" })
  );

  return homePage;
}

getData(endpoint);
