import {Song} from '../models/song.model.js'
//get All songs
export const getAllSongs = async (req, res, next) => {
    try {
        //-1 = Descending => newest to oldest
        //1 = Ascending => oldest to newest
        const songs = await Song.find().sort({createdAt:-1})
        res.josn(songs)
    } catch (error) {
     next(error)   
    }
}

// Featured Songs
export const getFeaturedSongs =async (req, res, next) => {
    try {
        //fetch 6 songs using mongodb's aggregation pipeline
        const songs = await Song.aggregate([
            {$sample:{size:6}},
            {
                $project:{
                    _id:1,
                    title:1,
                    artist:1,
                    imageUrl:1,
                    audioUrl:1
                }
            }
        ])

        res.json(songs)
    } catch (error) {
        next(error)
    }
}

// Made for you songs
export const getMadeForYouSongs =async (req, res, next) => {
    try {
        //fetch 4 songs using mongodb's aggregation pipeline
        const songs = await Song.aggregate([
            {$sample:{size:4}},
            {
                $project:{
                    _id:1,
                    title:1,
                    artist:1,
                    imageUrl:1,
                    audioUrl:1
                }
            }
        ])

        res.json(songs)
    } catch (error) {
        next(error)
    }
}

// Treding songs
export const getTredingSongs =async (req, res, next) => {
    try {
        //fetch 4 songs using mongodb's aggregation pipeline
        const songs = await Song.aggregate([
            {$sample:{size:4}},
            {
                $project:{
                    _id:1,
                    title:1,
                    artist:1,
                    imageUrl:1,
                    audioUrl:1
                }
            }
        ])

        res.json(songs)
    } catch (error) {
        next(error)
    }
}