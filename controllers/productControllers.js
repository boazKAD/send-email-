import Blog from "../model/product";


export const GetAllBlogs= async (req, res, next )=>{
    let blogs;
    try {
        blogs= await Blog.find();

    } catch(err) {
        console.log(err);

    }
    if(!blogs) {
        return res.status(404).json({message:'No Blogs  Found'});
    }
    res.status(200).json({ blogs });
}

export const addBlog= async (req, res, next) => {
    const {title, description, image, user}= req.body;
    const blog = new Blog({
        title, 
        description, 
        image, 
        user
    })
    try {
        await blog.save();
    } catch (err) {
        console.log(err);        
    }
    return res.status(200).json({ blog });

}

export const updateBlog= async ( req, res, next ) =>{
    const {title, description}= req.body;
    const blogId=req.params.id;

    let blog;
    try {
        blog= await Blog.findByIdAndUpdate(blogId,{
            title,
            description
        })
    } catch (err) {
        console.log(err);
    }
    if(!blog) {
        return res.status(500).json({ message: 'Unable To Update The Blog'});
    }
    return res.status(200).json({blog});

}