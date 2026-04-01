# Multiple styles setup

## Overview

*terminals*,,*interface modelsstyles*When you need to set up and use different design styles of the payment form for different scenarios within one or several projects, you can use the capabilities of configuringand. To do so effectively, you need to understand what the Payment Widget design involves and what you can do with its separate elements.

If simultaneous support of different design styles is needed for different situations, the corresponding interface models and styles should be applied to the required number of projects and terminals within separate projects.Each version of the Payment Widget design is based on the combination of an interface model and a style. The interface model specifies the composition, size, placement, and colours of various elements while the style can additionally determine the look of certain images and colours used on the form. Only one interface model and one style can be applied to the opening of the payment form at a time.

If simultaneous support of different design styles is needed for different situations, you can configure each version and specify it when invoking the payment form. Note that each style can be used for only one project in which it was created.

Overall, to configure multiple styles of the Payment Widget design, the merchant can do the following:

- *and terminalsArrange and use the combination of projectsthat the merchant needs.*`project_idterminal_id`To use the project and the terminal that the merchant needs in specific situations, the merchant has to provide the IDs of those in the requests to open Payment Widget (in theandparameters respectively).All actions to set up this combination in the payment platform are carried out by the Platform specialists in accordance with the merchant's requirements.
- *and terminalsCoordinate the use of the necessary interface models for specific projects.*for specific projects and terminalsfor specific casesAs a rule, the Payment Widget design is based on the most recent version of the basic interface model developed by Platform. At the same time, it is possible to coordinate with the Platform account manager the use of other interface models.
- *and terminalsCreate, set up, and apply required design styles to specific projects.*These capabilities are fully available when the merchant works with the most recent version of the basic interface model developed by Platform and can be partially or fully unavailable when the merchant works with other interface models. Working with design styles is described in the following section.

## Special aspects

**Projects**You can work with the design styles in Dashboard using the designer tool that you can access in thetab of thesection.

****Note the following special aspects of using the:

- It does not allow switching between projects in the process of configuration. To modify design styles for specific projects, open the designer for each project individually.
- It does not support simultaneous work on multiple design styles and does not allow changing styles in bulk. If you need to work with multiple styles at the same time, open and use the designer in different browser tabs.
- It does not support simultaneous work on the same design style by multiple users. Therefore, in order to prevent conflicts and loss of unsaved changes, avoid situations when changes are made to the same style at the same time on different devices.
