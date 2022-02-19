<script>
	function drag(node, callback) {
		function handleMousedown(event) {
			function handleMousemove(event) {
				event.preventDefault();

				node.dispatchEvent(
					new CustomEvent('drag', {
						detail: {
							value: event.clientY / window.innerHeight
						}
					})
				);
			}

			function handleMouseup(event) {
				window.removeEventListener('mousemove', handleMousemove);
				window.removeEventListener('mouseup', handleMouseup);
			}

			window.addEventListener('mousemove', handleMousemove);
			window.addEventListener('mouseup', handleMouseup);
		}

		node.addEventListener('mousedown', handleMousedown);

		return {
			destroy() {
				node.removeEventListener('mousedown', handleMousedown);
			}
		};
	}

	export let value;
	export let label;
</script>

<div class="label" style="top: {value * 100}%" use:drag on:drag={(e) => (value = e.detail.value)}>
	<div class="drag-target" />
	<hr />
	<span style="top: {value > 0.5 ? '-1.4em' : '0.2em'}">{label}</span>
</div>

<style>
	.label {
		position: fixed;
		top: 0;
		right: 0;
		width: 80px;
		height: 0;
		cursor: ns-resize;
	}

	.drag-target {
		position: absolute;
		height: 20px;
		top: -10px;
	}

	hr {
		position: absolute;
		top: 0;
		width: 100%;
		height: 1px;
		background: rgb(170, 30, 30);
		border: none;
		margin: 0;
	}

	span {
		position: absolute;
		color: #666;
		font-size: 12px;
	}
</style>
