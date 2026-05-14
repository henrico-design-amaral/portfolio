DECISION INFRASTRUCTURE DESIGN SYSTEM
Canonical Specification
Author: Henrico Amaral
Version: 1.0
Status: Foundational Interface Platform Layer


SYSTEM PURPOSE

This design system defines the structural interface language for decision-support environments operating across distributed operational contexts.

It supports:

monitoring platforms
enterprise workflows
multi-actor coordination surfaces
data interpretation environments
compliance-driven systems
signal orchestration interfaces

It is not a marketing UI system.

It is a decision-surface infrastructure specification.



SYSTEM PRINCIPLES

Architecture before interface

Signal before layout

Constraints before interaction

Structure before styling

State before representation

Decision before navigation



SYSTEM STRUCTURE

Foundation
Tokens
Typography
Color System
Surface Model
Elevation Model
Grid System
Layout Primitives
Component Library
Form Architecture
Table Architecture
Navigation Architecture
Feedback Systems
Overlay Systems
Motion Model
Iconography
Accessibility Layer
Responsive Logic
Content Patterns
Data Visualization Layer
Decision Surfaces



FOUNDATION LAYER

Primary palette

Primary accent
#680A08

Secondary surface
#DACCB7

Structural black
#000000

Structural white
#FFFFFF


Distribution rule

60 percent structural black
30 percent reading surface
10 percent decision accent



TOKEN ARCHITECTURE


COLOR TOKENS


Primary scale

--color-primary-50
--color-primary-100
--color-primary-200
--color-primary-300
--color-primary-400
--color-primary-500 (#680A08)
--color-primary-600
--color-primary-700
--color-primary-800
--color-primary-900


Secondary scale

--color-secondary-50
--color-secondary-100
--color-secondary-200
--color-secondary-300
--color-secondary-400
--color-secondary-500 (#DACCB7)
--color-secondary-600
--color-secondary-700
--color-secondary-800
--color-secondary-900


Neutral scale

--color-neutral-0 (#000000)
--color-neutral-50
--color-neutral-100
--color-neutral-200
--color-neutral-300
--color-neutral-400
--color-neutral-500
--color-neutral-600
--color-neutral-700
--color-neutral-800
--color-neutral-900
--color-neutral-1000 (#FFFFFF)



SEMANTIC COLORS


Success

--color-success-100
--color-success-300
--color-success-500
--color-success-700


Warning

--color-warning-100
--color-warning-300
--color-warning-500
--color-warning-700


Danger

--color-danger-100
--color-danger-300
--color-danger-500
--color-danger-700


Info

--color-info-100
--color-info-300
--color-info-500
--color-info-700



INTERACTION TOKENS


--color-hover
--color-focus
--color-active
--color-disabled



SURFACE TOKENS


--surface-page
--surface-section
--surface-card
--surface-raised
--surface-overlay
--surface-floating



SPACING SYSTEM


Spacing scale

4
8
12
16
24
32
48
64
96
128



RADIUS SYSTEM


--radius-xs
--radius-sm
--radius-md
--radius-lg
--radius-xl



SHADOW SYSTEM


Elevation 0
no shadow

Elevation 1
border elevation

Elevation 2
ambient soft shadow

Elevation 3
directional shadow

Elevation 4
modal shadow

Elevation 5
maximum overlay depth



BORDER SYSTEM


--border-subtle
--border-default
--border-strong



OPACITY SYSTEM


--opacity-muted
--opacity-disabled
--opacity-overlay



Z-INDEX SYSTEM


--z-base
--z-navigation
--z-dropdown
--z-overlay
--z-modal
--z-toast



TYPOGRAPHY SYSTEM


Display font

Syne


Reading font

Inter


Technical font

JetBrains Mono



TYPOGRAPHY SCALE


Display XL

64
72
700

Entry anchor typography


Display L

56
64
700

Hero structure typography


Heading 1

48
56
600

Primary section titles


Heading 2

36
44


Heading 3

28
36


Heading 4

22
30


Heading 5

18
26


Heading 6

16
24


Body Large

18
28


Body Medium

16
26


Body Small

14
22


Label Large

16
20


Label Medium

14
18


Label Small

12
16


Caption

12
18


Code

13
20



SURFACE MODEL


Page background

structural black


Section surface

layer separation


Card surface

information grouping


Raised surface

interaction readiness


Overlay surface

context interruption


Floating surface

temporary UI layers



ELEVATION MODEL


Elevation 0

page background


Elevation 1

card grouping


Elevation 2

panel separation


Elevation 3

interactive readiness


Elevation 4

overlay interaction


Elevation 5

modal priority depth



GRID SYSTEM


Max container width

1200px


Fluid container

100 percent


Column systems

12 column grid
8 column grid
4 column grid



Breakpoints

1440
1280
1024
768
480
360



Gutter scale

24 desktop
16 tablet
12 mobile



LAYOUT PRIMITIVES


Stack layout

vertical flow architecture


Inline layout

horizontal grouping


Split layout

primary secondary structure


Sidebar layout

persistent navigation anchor


Dashboard layout

monitoring multi-panel surface


Reading layout

narrow narrative column


Centered layout

hero anchoring surface



COMPONENT LIBRARY


Buttons

Primary
Secondary
Ghost


Icon buttons

16
20
24
32


Badges

status markers


Tags

categorization labels


Chips

filter selections


Cards

information containers


Avatars

identity surfaces


Lists

structured reading groups


Dividers

visual separators



FORM SYSTEM


Text input

Textarea

Select

Checkbox

Radio

Switch

Slider

Date picker



States

Default
Focus
Error
Success
Disabled



Include

label structure
helper text
validation messaging



TABLE SYSTEM


Header row

Body row

Footer row



Variants

Striped
Compact
Dense
Selectable



States

Hover row
Selected row
Sorted column



Capabilities

Pagination
Column sorting
Row actions



NAVIGATION SYSTEM


Top navigation

global structure anchor


Sidebar navigation

sectional hierarchy


Tabs

context switching


Breadcrumbs

location traceability


Pagination

dataset traversal



FEEDBACK SYSTEM


Alert

Toast

Inline message

Progress bar

Spinner

Status indicator



Variants

Success
Warning
Error
Info



OVERLAY SYSTEM


Modal

Drawer

Popover

Tooltip



Include

focus trap logic
layer hierarchy
escape handling



MOTION SYSTEM


Motion tokens

fast
normal
slow



Curves

ease-in
ease-out
ease-in-out
spring-like



Component motion

hover lift
press compression
fade entrance
slide entrance
scale entrance
overlay reveal



ICON SYSTEM


Sizes

16
20
24
32



Usage

inline
button
decorative



Icons inherit contextual color automatically



ACCESSIBILITY LAYER


Focus visible required

Contrast safe typography mandatory

Semantic labels required

ARIA compatible forms required



RESPONSIVE SYSTEM


Grid collapse behavior

Sidebar collapse logic

Navigation adaptation

Table horizontal fallback



CONTENT PATTERNS


Empty states

Loading states

Error states

Success states

Skeleton screens



DATA VISUALIZATION LAYER


Bar chart

Line chart

Pie chart

Legend system

Tooltip interaction logic



DECISION SURFACE LAYER


Signal panels

Monitoring boards

Escalation layers

Status matrices

Permission matrices

State transition maps

Operational timelines

Event coordination surfaces



SYSTEM OUTCOME


Defines visual architecture before interface implementation

Eliminates homepage-first dependency

Demonstrates system thinking maturity

Creates reusable infrastructure layer

Positions author at senior decision-surface design level