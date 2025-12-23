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
import { forgotPassword } from "@/Redux/Auth/Action";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ForgotPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // ✅ get auth state from redux
    const { jwt, loading } = useSelector((store) => store.auth);

    const form = useForm({
        defaultValues: {
            email: "",
        }
    })

    const onSubmit = (data) => {
        dispatch(forgotPassword(data));   // call redux action
    }

    // ✅ redirect if already logged in
    useEffect(() => {
        if (jwt) {
            navigate("/");   // change to your home page route
        }
    }, [jwt, navigate]);

    return (
        <div className="space-y-5">
            <h1 className="title">Forgot Password</h1>

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

                    <Button
                        type="submit"
                        className="w-full ml-2"
                        disabled={loading}
                    >
                        {loading ? "Resetting Password..." : "Reset Password"}
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default ForgotPassword
