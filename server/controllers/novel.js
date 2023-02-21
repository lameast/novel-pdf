import axios from 'axios';
import cheerio from 'cheerio';
import Novel from '../models/novel.js';

export const getNovel = (req, res) => {
    Novel.find({}, (err, data) => {
        if (err) throw err;
        console.log(JSON.stringify(data)); 
    });
} 

export const postNewChapter = (req, res) => {

    axios.get(req.body.url)
    .then(res => {
        const $ = cheerio.load(res.data);
        let chapterContent = $('.chapter-content').find('p').text();
        let title = $('.fic-header').find('h2').text();
        let author =  $('.fic-header').find('h3 > a').text();
        let chapterTitle = $('.fic-header').find('h1').text();
        let query = {"title": title};
        let update = {"$push" : {"chapters": {"title": chapterTitle, "content": chapterContent}}};
        console.log(title, author, chapterTitle)
        Novel.findOneAndUpdate(query, update, {upsert: true}, (err, data) => {
            if (err) throw err;
            console.log(JSON.stringify(data)); 
        });
    }).catch(err => {
        console.log(err);
    })
    
}