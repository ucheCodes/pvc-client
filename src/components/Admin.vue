<script setup lang="ts">
    function Alert(){
        alert("Unauthorized access!!! You do not have the privileges to use this. ")
    }
</script>
<template>
    <div class="content">
        <section id="admin">
            <h3>Election Information Entry Page</h3>
            <form>
                <div class="select">
                    <label for="category">Select Category</label>
                    <select name="category" id="category">
                        <option value="presidential">Presidential</option>
                        <option value="state">State</option>
                        <option value="local">Local</option>
                        <option value="gorvernorship">Gorvernorship</option>
                    </select>
                </div>
                <div class="select">
                    <label for="state">Select State</label>
                    <select name="category" id="category">
                        <option value="abia">Abia</option>
                        <option value="abia">Adamawa</option>
                        <option value="abia">Anambra</option>
                        <option value="abia">Bauchi</option>
                    </select>
                </div>
                <h3>Aspiring Politician Information</h3>
                <div>
                    <div class="input">
                        <span> Aspirant's  Name</span>
                        <input type="text" placeholder="Enter Aspirant's name">
                    </div>
                    <div class="input">
                        <span> Aspirant's  NIN</span>
                        <input type="text" placeholder="Enter Aspirant's NIN">
                    </div>
                    <div class="input">
                        <span> Political Party</span>
                        <select name="category" id="category">
                            <option value="apc">Apc</option>
                            <option value="apc">Pdp</option>
                            <option value="apc">Lp</option>
                            <option value="apc">Prp</option>
                        </select>
                    </div>
                    <div class="input">
                        <span> Contesting Category</span>
                        <select name="category" id="category">
                            <option value="presidential">Presidential</option>
                            <option value="state">State</option>
                            <option value="local">Local</option>
                            <option value="gorvernorship">Gorvernorship</option>
                        </select>
                    </div>
                    <div class="input">
                        <span> Aspirant's  Purpose</span>
                        <textarea name="textarea" id="textarea"  
                            placeholder="Enter a descriptive message illustrating aspirant's purpose"
                            maxlength="300" cols="30" rows="10">
                        </textarea>
                    </div>

                </div>
                <div class="btn">
                    <button @click="Alert">Submit</button>
                </div>
            </form>
            <div>
                <h3>Add a new Election Category</h3>
                <div>
                    <div class="input">
                        <span> Election Category Name</span>
                        <input type="text" placeholder="Enter a new category name">
                    </div>
                    <div class="input">
                        <span>Start Date</span>
                        <input type="date" placeholder="Enter date when election commences">
                    </div>
                    <div class="input">
                        <span>End Date</span>
                        <input type="date" placeholder="Enter date when election ends">
                    </div>
                </div>
                <div class="btn">
                    <button @click="Alert">Submit</button>
                </div>
            </div>
        </section>
    </div>
</template>