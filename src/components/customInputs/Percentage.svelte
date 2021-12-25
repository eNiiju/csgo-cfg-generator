<script lang="ts">
    export let value = '0%';
    export let min = 0;
    export let max = 100;
    export let maxlength = 4;

    function handleChange() {
        const max = this.getAttribute('max');
        const min = this.getAttribute('min');

        // Verify if the value isn't illegal
        if (parseInt(this.value) > max) this.value = max;
        else if (parseInt(this.value) < min) this.value = min;
        else if (!this.value) this.value = min;
        if (this.value[this.value.length] !== '%') this.value = `${parseInt(this.value)}%`;
    }

    function handleKeyup() {
        // Format value : just keep numbers and '%' if at the end
        const correctValue = this.value.match(/\d+|%$/gm)?.join('');
        if (correctValue && correctValue !== '%')
            this.value = correctValue;
        else
            this.value = `${min}%`;
    }
</script>

<input type="text" class="csgo-percentage" on:change={handleChange} on:keyup="{handleKeyup}" {value} {min} {max} {maxlength} />

<style>
    .csgo-percentage {
        width: 64px;
        height: 30px;
        padding-right: 10px;
        background: none;
        border: 0;
        box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5);
        border-radius: 2px;
        outline: none;
        color: white;
        font-family: Rajdhani, Helvetica, Arial, sans-serif;
        font-weight: 600;
        font-size: 20px;
        letter-spacing: 1px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.2);
        margin: 8px 2px 8px 16px;
    }

    .csgo-percentage::-webkit-outer-spin-button,
    .csgo-percentage::-webkit-inner-spin-button {
        margin: 0;
        -webkit-appearance: none;
    }

    .csgo-percentage:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }

    .csgo-percentage:focus {
        background-color: rgba(0, 0, 0, 0.6);
    }

    .csgo-percentage::selection {
        color: #7e838a;
        background: #183443;
    }
</style>
