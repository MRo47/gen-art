// credits: https://dev.to/andyhaskell/convert-images-to-mosaics-in-p5js-2dlc

function draw_mosaic(dot_radius, image, background_color) {
    noStroke();
    background(background_color);

    col_width = dot_radius * 3;
    num_cols = Math.ceil(width / col_width);

    for (let i = 0; i < num_cols; i++) {
        x_offset = i * col_width;
        draw_col_dots(dot_radius, x_offset, image);
    }
}

function draw_col_dots(dot_radius, x_offset, image) {
    let dot_diameter = dot_radius * 2;
    let dot_height_with_pad = dot_diameter + 2;
    let num_dot_in_col = Math.floor(height / dot_height_with_pad);

    let top_y = Math.floor(random(10));

    for (let i = -2; i < num_dot_in_col+2; i++) {
        let center_x = Math.floor(random(
            x_offset + dot_radius,
            x_offset + col_width - dot_radius,
        ));

        let center_y = top_y + i * dot_height_with_pad + dot_radius;

        fill(image.get(center_x, center_y));
        circle(center_x, center_y, dot_diameter);
    }
}

