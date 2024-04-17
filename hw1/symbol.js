const music = [
    { title: "Toxicity", author: "System of a down", year: 2001},
    { title: "Around the Fur", author: "Deftones" , year: 1997},
    { title: "Mutter", author: "Rammstein" , year: 2001}
    ];

    const musicCollection = {
        music: [...music],
        [Symbol.iterator]: function() {
            let index = 0;
            return {
                next: () => {
                    if (index < this.music.length){
                    return {value: this.music[index++], done: false};
                    } else {
                        return { done: true};
                    }
    
                }
            };
        }
    };

    
 for (let music of musicCollection) {
    console.log(`${music.title} by ${music.author} ${music.year}`);
}