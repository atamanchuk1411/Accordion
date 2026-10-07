const lists = document.querySelectorAll('a')
console.log(lists)

lists.forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault()

        let target = e.target
        let textBlock = target.nextElementSibling;

        console.log(target)
        console.log(textBlock)

        if(item.classList.contains('active')) {
            item.classList.remove('active')
            textBlock.classList.add('hidden')
            return
        }

        lists.forEach(itemActive => {
            if(itemActive.classList.contains("active")) {
                itemActive.classList.remove('active')
            }
        })

        document.querySelectorAll('p').forEach(p => {
            p.classList.add('hidden')
        })

        item.classList.add('active')
        textBlock.classList.remove('hidden')
    })
})
