export const validate=(data,type)=>{
    const errors={};
   
    if (!data.email) {
        errors.email="Email is required."
    }
    else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email="Email is not valid"
    }
    else {delete errors.email}

    if (!data.password) {
        errors.password="Password is required."
    }
    else if (!/^(?!.*\.\.)(?!.*@@)(?!.*--)(?=.*[0-9])(?=.*[.@-])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9.@-]{8,15}$/.test(data.password)){
        errors.password="Password should contain at least 8 characters including at least 1 Latin Alphabetic (a-z,A-Z), 1 number (0-9) and 1 symbol (@-.)"
    }
    else {delete errors.password}

    if (type==="signUp"){
      
        if (!data.confirmPassword) {
            errors.confirmPassword="Confirm your password."
        }
        else if (data.confirmPassword !== data.password){
            errors.confirmPassword ="Password doesn't match."
        }
        else { delete errors.confirmPassword }
        if (data.isAccepted) {delete errors.isAccepted}
        else {errors.isAccepted="Please read our privacy policy terms."}
    }
    return errors;
}