<template>
    <div>
        <form @submit.prevent="getFormValues">

            <h1><b>About You</b></h1>
            
            First Name: <input type="text" v-model="login_data.fname" placeholder="Enter your first name">
            <br/>

            Last Name: <input type="text" v-model="login_data.lname" placeholder="Enter your last name">
            <br/>

            Pin Code: <input type="text" v-model="login_data.pincode" placeholder="Enter the pin code">
            <br/>

            <button type="submit" v-on:click="login">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'first',
        methods:{
            login(){
                console.log(this.login_data);
            }
        },
        data(){
            return{
                login_data:{
                    fname:null,
                    lname:null,
                    pincode:null
                }
            }
        }
    }
</script>
