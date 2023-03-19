# Angular - Generalized form with reused design using content projection

This structure basically lets you reuse the same basic dialog/modal/pop-up for everything, while having the more complicated stuff inside ng-content.

So you can have one base dialog that got all the design, and multiple tiny components that only handles the content projection.

Would also recommend sending in a custom config for the base dialog, to set up things like if the cancel button should be shown or maybe change the title.
