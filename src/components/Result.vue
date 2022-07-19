<script setup lang="ts">
    const stateCategory = false;
</script>
<template>
    <div class="content">
        <section id="results">
            <h3>Election Results In Real Time</h3>
            <div>
                <div class="select">
                    <h4>Select Election Category</h4>
                    <select name="category" id="category">
                        <option value="presidential">Presidential</option>
                        <option value="state">State</option>
                        <option value="local">Local</option>
                    </select>
                </div>
                <div v-if="stateCategory" class="select">
                    <h4>Select State</h4>
                    <select name="category" id="category">
                        <option value="abia">Abia</option>
                        <option value="adamawa">Adamawa</option>
                        <option value="local">Local</option>
                        <option value="gorvernorship">Gorvernorship</option>
                    </select>
                </div>
            </div>
            <div>
                <table class="table">
                    <thead>
                        <th>S / N</th>
                        <th>Name of Aspirant</th>
                        <th>Photo</th>
                        <th>Political Party</th>
                        <th>Votes Casted</th>
                        <th>Contesting</th>
                        <th>State</th>
                        <th>Position</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="S / N">1</td>
                            <td data-label="Name">Uche Nwuju</td>
                            <td data-label="Photo"><img src="@/assets/img/img1.jpg" alt="photo"></td>
                            <td data-label="Party">Pdp</td>
                            <td data-label="Votes Casted">15</td>
                            <td data-label="Contesting">Presidency</td>
                            <td v-if="stateCategory" data-label="State">Lagos</td>
                            <td data-label="Position">1</td>
                        </tr>
                        <tr>
                            <td data-label="S / N">1</td>
                            <td data-label="Name">Uche Nwuju</td>
                            <td data-label="Photo"><img src="@/assets/img/img2.jpg" alt="photo"></td>
                            <td data-label="Party">Pdp</td>
                            <td data-label="Votes Casted">15</td>
                            <td data-label="Contesting">Presidency</td>
                            <td data-label="State">Lagos</td>
                            <td data-label="Position">1</td>
                        </tr>
                        <tr>
                            <td data-label="S / N">1</td>
                            <td data-label="Name">Uche Nwuju</td>
                            <td data-label="Photo"><img src="@/assets/img/img3.jpg" alt="photo"></td>
                            <td data-label="Party">Pdp</td>
                            <td data-label="Votes Casted">15</td>
                            <td data-label="Contesting">Presidency</td>
                            <td data-label="State">Lagos</td>
                            <td data-label="Position">1</td>
                        </tr>
                        <tr>
                            <td data-label="S / N">1</td>
                            <td data-label="Name">Uche Nwuju</td>
                            <td data-label="Photo"><img src="@/assets/img/img1.jpg" alt="photo"></td>
                            <td data-label="Party">Pdp</td>
                            <td data-label="Votes Casted">15</td>
                            <td data-label="Contesting">Presidency</td>
                            <td data-label="State">Lagos</td>
                            <td data-label="Position">1</td>
                        </tr>
                    </tbody>
                </table>
            
            </div>
        </section>
    </div>
</template>