<script lang="ts">
    export let value = 0;
    export let min = 0;
    export let max = 100;
    export let step = 1;
    export let maxlength = 4;

    function handleChange() {
        const max = this.getAttribute('max');
        const min = this.getAttribute('min');
        const step = this.getAttribute('step');

        // Verify if the value isn't illegal
        const nbDecimalPoint = parseFloat(step) < 1 ? step.slice(2).length : 0;
        if (parseFloat(this.value) > parseFloat(max)) this.value = max;
        else if (parseFloat(this.value) < parseFloat(min)) this.value = min;
        this.value = parseFloat(this.value).toFixed(nbDecimalPoint);
    }
</script>

<input
    type="text"
    class="csgo-number"
    on:change={handleChange}
    value={parseFloat(value).toFixed(parseFloat(step) < 1 ? step.toString().slice(2).length : 0)}
    {min}
    {max}
    {step}
    {maxlength}
/>

<style>
    .csgo-number {
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

    .csgo-number::-webkit-outer-spin-button,
    .csgo-number::-webkit-inner-spin-button {
        margin: 0;
        -webkit-appearance: none;
    }

    .csgo-number:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }

    .csgo-number:focus {
        background-color: rgba(0, 0, 0, 0.6);
    }

    .csgo-number::selection {
        color: #7e838a;
        background-color: #183443;
    }
</style>
