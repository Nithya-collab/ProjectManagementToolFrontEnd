// import {
//     Form,
//     FormField,
//     FormMessage,
//     FormControl,
//     FormItem
// } from "@/components/ui/form"
// import { useForm } from "react-hook-form"
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import api, { API_BASE_URL } from "@/config/api";

// function Login() {
//     const navigate = useNavigate();
//     const form = useForm({
//         defaultValues: {
//             email: "",
//             password: ""
//         }
//     })

//     // const onSubmit = (data) => {
//     //     console.log("create project data", data);
//     // }

//     const onSubmit = async (data) => {
//         try {
//             console.log("login data", data);
            
//             // ✅ call backend API
//             const response = await api.post(`${API_BASE_URL}/auth/signin`, data);

//             // ✅ store JWT in localStorage
//             localStorage.setItem("jwt", response.data.jwt);

//             // ✅ redirect to dashboard
//             navigate(""); 

//         } catch (error) {
//             console.error("Login failed:", error.response?.data || error.message);
//             alert(error.response?.data?.message || "Invalid email or password");
//         }
//     };

//     return (
//         <div className="space-y-5">
//             <h1 className="title">Login</h1>
//             <Form {...form}>
//                 <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                  

//                     <FormField
//                         control={form.control}
//                         name="email"
//                         render={({ field }) => <FormItem>
//                             <FormControl>
//                                 <Input {...field}
//                                     type="text"
//                                     className="border w-full border-gray-700 py-5 px-5"
//                                     placeholder="User Email ... "
//                                 />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>}
//                     />

//                     <FormField
//                         control={form.control}
//                         name="password"
//                         render={({ field }) => <FormItem>
//                             <FormControl>
//                                 <Input {...field}
//                                     type="password"
//                                     className="border w-full border-gray-700 py-5 px-5"
//                                     placeholder="Password ... "
//                                 />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>}
//                     />

//                     <Button type="submit" className="w-full ml-2"> Login </Button>

//                 </form>
//             </Form>
//         </div>
//     )
// }

// export default Login













import {
    Form,
    FormField,
    FormMessage,
    FormControl,
    FormItem
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/Redux/Auth/Action";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // ✅ get auth state from redux
    const { jwt, user, loading } = useSelector((store) => store.auth);

    const form = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (data) => {
        dispatch(login(data));   // call redux action
        console.log("login data", data);
    }

    // ✅ redirect if already logged in
    useEffect(() => {
        if (jwt) {
            navigate("/");   // change to your home page route
        }
    }, [jwt, navigate]);

    return (
        <div className="space-y-5">
            <h1 className="title">Login</h1>
            <Form {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="border w-full border-gray-700 py-5 px-5"
                                        placeholder="User Email ... "
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="password"
                                        className="border w-full border-gray-700 py-5 px-5"
                                        placeholder="Password ... "
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full ml-2"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default Login
