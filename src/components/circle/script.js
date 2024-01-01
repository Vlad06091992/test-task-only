gsap.registerPlugin(MotionPathPlugin);

const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
circlePath.id = "circlePath";
const svgElement = document.querySelector("svg")
svgElement.prepend(circlePath);
const wrapper = document.querySelector('.wrapper')
const items = gsap.utils.toArray(".item"),
    numItems = items.length,
    itemStep = 1 / numItems,
    wrapProgress = gsap.utils.wrap(0, 1),
    snap = gsap.utils.snap(itemStep),
    wrapTracker = gsap.utils.wrap(0, numItems),
    tracker = {item: 0};

console.log(items)
console.log(wrapper)

gsap.set(items, {
    motionPath: {
        path: circlePath,
        align: circlePath,
        alignOrigin: [0.5, 0.5],
        end: i => i / items.length
    }, scale: 0.9
});

const tl = gsap.timeline({paused: true, reversed: true});

console.log(tl)
tl.to(wrapper, {
    rotation: 360,
    transformOrigin: 'center',
    duration: 1,
    ease: 'none'
});

tl.to(items, {
    rotation: "-=360",
    transformOrigin: 'center',
    duration: 1,
    ease: 'none',
}, 0);

console.log(tracker)

tl.to(tracker, {
    item: numItems,
    duration: 1,
    ease: 'none',
    modifiers: {
        item(value) {
            console.log(numItems);
            return wrapTracker(numItems - Math.round(value))
        }
    }
}, 0);


document.getElementById('next').addEventListener("click", function () {
    return moveWheel(-itemStep);
});

document.getElementById('prev').addEventListener("click", function () {
    return moveWheel(itemStep);
});

function moveWheel(amount, i, index) {
// debugger
    let progress = tl.progress();
    console.log(progress)
    tl.progress(wrapProgress(snap(tl.progress() + amount)))
    let next = tracker.item;
    tl.progress(progress);

    document.querySelector('.item.active').classList.remove('active');
    items[next].classList.add('active');

    gsap.to(tl, {
        progress:   snap(tl.progress() + amount),
        modifiers: {
            progress: wrapProgress
        }
    });
}