controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        ......fffff......
        .....feeeeef.....
        ....feeeeeeef....
        ....feeeeeeef....
        ....feeeeeeef....
        ....feeeeeeef....
        ....feeeeeef.....
        .....feeeeef.....
        ......fefef......
        ......fefff......
        .....fdfdddf.....
        .ffff89ddd98ffff.
        f668888999888866f
        f922888888888229f
        f222f8888888f222f
        f222f8888888f222f
        f222f8888888f222f
        f222f8888888f222f
        f222f8888888f222f
        f222f8888888f222f
        fdddf8888888fdddf
        fdddf8888888fdddf
        .fdf.fffffff.fdf.
        ..f.f6666666ffef.
        ....f666f666ffef.
        ....f666f666f.f..
        ....f666f666f....
        ....f999f999f....
        ....fdddfdddf....
        ....fdddfdddf....
        ....fdddfdddf....
        ....fdddfdddf....
        ....f888f888f....
        ....f888f888f....
        ....f888f888f....
        .....fff.fff.....
        `)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        .................fffeeefff...fffff................
        .................f..eee..f..feeeeef...............
        .................feeeeeeef.feeeeeeef..............
        .................fffeeeffffeeeeeeeef..............
        ...................feeef...fdddeeeeef.............
        ...................feeef...f96deeeeef.............
        ...................fdddf..fd68ddeeeef.............
        ...................fdddf...fdddddeeef.............
        ...................f22df...f33dddeef..............
        ...................f222f....fddddff...............
        ...................f2222ff..fddddf................
        ...................f222222ff888888f...............
        ....................f2222222ff88888f..............
        .....................ff2222222fff88f..............
        .......................ff22222222f8f..............
        .........................ff222222f8f..............
        ..........................fff2222f8f..............
        ..........................f88ffff88f..............
        ..........................f88888888f..............
        ..........................f88888888f..............
        ..........................f88888888f..............
        ..........................f88888888f..............
        ...........................f888888f...............
        ...........................ffffffff...............
        ...........................f666666f...............
        ...........................f66ff66f...............
        ...........................f66ff66f...............
        ...........................f99ff99f...............
        ...........................fddffddf...............
        ...........................fddffddf...............
        ...........................fddffddf...............
        ...........................fddffddf...............
        ..........................ff88ff88f...............
        .........................f66886688f...............
        .........................f68886888f...............
        ..........................ffffffff................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        .................fffff........
        ................feeeeef.......
        ...............feeeeeeef......
        ..............feeeeeeeef......
        ...............fdddeeeeef.....
        ...............f96deeeeef.....
        ..............fd68ddeeeef.....
        ...............fdddddeeef.....
        ...............f33dddeef......
        ................fddddff.......
        ................fddddf........
        ...............f888888f.......
        ..............f888fff88f......
        ..............f88f222f8f......
        ..............f88f222f8f......
        ..............f88f222f8f......
        ..............f88f222f8f......
        .........f....f8f2222f8f......
        ........fef..fffdd222f8f......
        .ffffffffefffdddddd2f88f......
        fd1111111eeedddddddf888f......
        fddddddddeeeedddfff8888f......
        .ffffffffeffffff888888f.......
        ........fef....ffffffff.......
        .........f.....f666666f.......
        ...............f66ff66f.......
        ...............f66ff66f.......
        ...............f99ff99f.......
        ...............fddffddf.......
        ...............fddffddf.......
        ...............fddffddf.......
        ...............fddffddf.......
        ..............ff88ff88f.......
        .............f66886688f.......
        .............f68886888f.......
        ..............ffffffff........
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        ...fffff.................
        ..feeeeef................
        .feeeeeeef...............
        .feeeeeeeef..............
        feeeeedddf...............
        feeeeed69f...............
        feeeedd86df..............
        feeedddddf...............
        .feeddd33f...............
        ..ffddddf................
        ...fddddf................
        ..f888888f...............
        .f88fff888f..............
        .f8f222f88f..............
        .f8f222f88f..............
        .f8f222f88f..............
        .f8f222f88f..............
        .f8f2222f8f....f.........
        .f8f222ddfff..fef........
        .f88f2ddddddfffeffffffff.
        .f888fdddddddeee1111111df
        .f8888fffdddeeeeddddddddf
        ..f888888ffffffeffffffff.
        ..ffffffff....fef........
        ..f666666f.....f.........
        ..f66ff66f...............
        ..f66ff66f...............
        ..f99ff99f...............
        ..fddffddf...............
        ..fddffddf...............
        ..fddffddf...............
        ..fddffddf...............
        ..f88ff88ff..............
        ..f88668866f.............
        ..f88868886f.............
        ...ffffffff..............
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        ......fffff......
        .....feeeeef.....
        ....feedddeef....
        ....fedddddef....
        ....fe86d86ef....
        ....fe69d69ef....
        ....fedd1ddff....
        .....fdddddf.....
        .....fd333df.....
        ......fdddf......
        .....fdfffdf.....
        .ffff89ddd98ffff.
        f668888999888866f
        f922888888888229f
        f222f8888888f222f
        f222f8888888f222f
        f222f8888888f222f
        f222f8888888f222f
        f2e2f8888888f222f
        f2e2f8888888f222f
        fd1df8888888fdddf
        fd1df8888888fdddf
        .f1f.fffffff.fdf.
        .feff6666666f.f..
        .feff666f666f....
        ..f.f666f666f....
        ....f666f666f....
        ....f999f999f....
        ....fdddfdddf....
        ....fdddfdddf....
        ....fdddfdddf....
        ....fdddfdddf....
        ....f888f888f....
        ....f868f868f....
        ....f666f666f....
        .....fff.fff.....
        `)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    ......fffff......
    .....feeeeef.....
    ....feedddeef....
    ....fedddddef....
    ....fe86d86ef....
    ....fe69d69ef....
    ....fedd1ddff....
    .....fdddddf.....
    .....fd333df.....
    ......fdddf......
    .....fdfffdf.....
    .ffff89ddd98ffff.
    f668888999888866f
    f922888888888229f
    f222f8888888f222f
    f222f8888888f222f
    f222f8888888f222f
    f222f8888888f222f
    f2e2f8888888f222f
    f2e2f8888888f222f
    fd1df8888888fdddf
    fd1df8888888fdddf
    .f1f.fffffff.fdf.
    .feff6666666f.f..
    .feff666f666f....
    ..f.f666f666f....
    ....f666f666f....
    ....f999f999f....
    ....fdddfdddf....
    ....fdddfdddf....
    ....fdddfdddf....
    ....fdddfdddf....
    ....f888f888f....
    ....f868f868f....
    ....f666f666f....
    .....fff.fff.....
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
forever(function () {
    music.playMelody("C5 G F E D G E C ", 315)
})
