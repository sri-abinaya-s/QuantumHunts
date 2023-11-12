$(document).ready(function () {
    $('.original-image').each(function () {
        const $img = $(this);
        const imgWidth = $img.width();
        const imgHeight = $img.height();

        if (imgWidth !== imgHeight) {
            if (imgWidth > imgHeight) {
                $img.css('height', '100%');
            } else {
                $img.css('width', '100%');
            }
        }
    });
});
