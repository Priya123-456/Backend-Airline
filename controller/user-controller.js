import User from "../model/user.js";


export const addUser= async (request,response)=>{
   try{

    let exist= await User.findOne({sub:request.body.sub});

    if(exist){
        response.status(200).json({msg:'user already exist'});
        return;
    }
    const newUser=new User(request.body);
    await newUser.save();
   return  response.status(200).json(newUser);

   }catch(error){
   return response.status(500).json(error.message);

   }
}

export const getUsers = async (req, res) => {
    try {
      const { userId } = req.params;
      console.log(`Received userId: ${userId}`);
      
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: error.message });
    }
  };
  





