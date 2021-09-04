import React from 'react';


// Starwars component
class StarWars extends React.Component {
    constructor() {
        super()

        this.state = {
            loadedCharacter: false,
            name: null,
            height: null,
            wiki: null,
            films: [],
            image: null
        }
    }



    fetchData = async (randomNum) => {
        const url = `https://akabab.github.io/starwars-api/api/id/${randomNum}.json`;
        const res = await fetch(url);
        const data = await res.json();
        this.setState({
            name: data.name,
            height: data.height,
            wiki: data.wiki,
            films: data.films,
            image: data.image,
            loadedCharacter: true
        })
    }


    getNewCharacter = () => {
        const randomNum = Math.round(Math.random() * 88)
        this.fetchData(randomNum);
    }

    render() {
        return (
            <div>
                <h1 className="title">Star Wars Character</h1>
                {
                    this.state.loadedCharacter &&
                    <div>
                        <img className="charImage" src={this.state.image} alt="img" />
                        <h2>{this.state.name}</h2>
                        <p>Height: {this.state.height}</p>
                        <p><a href={this.state.wiki}>Wiki</a></p>
                        {/* <ol>
                            {movies}
                        </ol> */}
                    </div>
                }

                <button
                    type="button"
                    onClick={() => this.getNewCharacter()}
                    className="btn"
                >
                    Randomize Characters
                </button>
            </div>
        )
    }
}

export default StarWars;