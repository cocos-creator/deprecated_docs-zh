YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        {
            "displayName": "Intersection",
            "name": "Intersection",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "_CallbacksHandler",
            "name": "_CallbacksHandler",
            "namespace": "",
            "module": "Fire",
            "description": "The CallbacksHandler is an abstract class that can register and unregister callbacks by key.\nSubclasses should implement their own methods about how to invoke the callbacks.",
            "access": "private"
        },
        {
            "displayName": "_ObjectFlags",
            "name": "_ObjectFlags",
            "namespace": "",
            "module": "Fire",
            "description": "Bit mask that controls object states.",
            "access": "private"
        },
        {
            "displayName": "_Runtime.RenderContext",
            "name": "_Runtime.RenderContext",
            "namespace": "_Runtime",
            "module": "Fire",
            "description": "The abstract renderer class which will be totally replaced with runtime implementation.\nhere just used as the mocker for unit tests.",
            "access": "private"
        },
        {
            "displayName": "Animation",
            "name": "Animation",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "AnimationNode",
            "name": "AnimationNode",
            "namespace": "",
            "module": "Fire",
            "description": "The collection and instance of playing animations created by entity.animate.",
            "access": "public"
        },
        {
            "displayName": "AnimationNodeBase",
            "name": "AnimationNodeBase",
            "namespace": "",
            "module": "Fire",
            "description": "The abstract interface for all playing animation.",
            "access": "public"
        },
        {
            "displayName": "AnimationState",
            "name": "AnimationState",
            "namespace": "",
            "module": "Fire",
            "description": "The AnimationState gives full control over animation playback process.\nIn most cases the Animation Component is sufficient and easier to use. Use the AnimationState if you need full control.",
            "access": "public"
        },
        {
            "displayName": "Array",
            "name": "Array",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "Asset",
            "name": "Asset",
            "namespace": "",
            "module": "Fire",
            "description": "Base class for asset handling.",
            "access": "public"
        },
        {
            "displayName": "AssetBundleBase",
            "name": "AssetBundleBase",
            "namespace": "",
            "module": "Fire",
            "description": "AssetBundleBase 为 Resources 提供了上层接口，用于加载资源包里的资源。",
            "access": "public"
        },
        {
            "displayName": "AssetLibrary",
            "name": "AssetLibrary",
            "namespace": "",
            "module": "Fire",
            "description": "The asset library which managing loading/unloading assets in project.",
            "access": "public"
        },
        {
            "displayName": "AtlasAsset",
            "name": "AtlasAsset",
            "namespace": "",
            "module": "Fire.Spine",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "AudioClip",
            "name": "AudioClip",
            "namespace": "",
            "module": "Fire",
            "description": "The audio clip is an audio source data.",
            "access": "public"
        },
        {
            "displayName": "AudioSource",
            "name": "AudioSource",
            "namespace": "",
            "module": "Fire",
            "description": "The audio source component.",
            "access": "public"
        },
        {
            "displayName": "BitmapFont",
            "name": "BitmapFont",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "BitmapText",
            "name": "BitmapText",
            "namespace": "",
            "module": "Fire",
            "description": "The bitmap font renderer component.",
            "access": "public"
        },
        {
            "displayName": "CallbacksInvoker",
            "name": "CallbacksInvoker",
            "namespace": "",
            "module": "Fire",
            "description": "The callbacks invoker to handle and invoke callbacks by key",
            "access": "public"
        },
        {
            "displayName": "Camera",
            "name": "Camera",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "Color",
            "name": "Color",
            "namespace": "",
            "module": "Fire",
            "description": "Representation of RGBA colors.\n\nEach color component is a floating point value with a range from 0 to 1.\n\nYou can also use the convenience method <% crosslink Fire.color Fire.color %> to create a new Color.",
            "access": "public"
        },
        {
            "displayName": "Component",
            "name": "Component",
            "namespace": "",
            "module": "Fire",
            "description": "Base class for everything attached to Entity.\n\nNOTE: Not allowed to use construction parameters for Component's subclasses,\n      because Component is created by the engine.",
            "access": "public"
        },
        {
            "displayName": "ContentStrategyType",
            "name": "ContentStrategyType",
            "namespace": "",
            "module": "Fire",
            "description": "内容适配策略负责缩放摄像机画面以适应画布(Canvas)。",
            "access": "public"
        },
        {
            "displayName": "EmitterMode",
            "name": "EmitterMode",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "Engine",
            "name": "Engine",
            "namespace": "",
            "module": "Fire",
            "description": "这个静态模块提供引擎运行时的一些全局接口和状态状态。",
            "access": "public"
        },
        {
            "displayName": "Entity",
            "name": "Entity",
            "namespace": "",
            "module": "Fire",
            "description": "Class of all entities in scenes.",
            "access": "public"
        },
        {
            "displayName": "EqualToFrame",
            "name": "EqualToFrame",
            "namespace": "",
            "module": "Fire",
            "description": "Strategy that makes the container's size equals to the frame's size",
            "access": "public"
        },
        {
            "displayName": "Event",
            "name": "Event",
            "namespace": "",
            "module": "Fire",
            "description": "An event allows for signaling that something has occurred. E.g. that an asset has completed downloading.",
            "access": "public"
        },
        {
            "displayName": "EventTarget",
            "name": "EventTarget",
            "namespace": "",
            "module": "Fire",
            "description": "EventTarget is an object to which an event is dispatched when something has occurred.\nEntity are the most common event targets, but other objects can be event targets too.\n\nEvent targets are an important part of the Fireball event model.\nThe event target serves as the focal point for how events flow through the scene graph.\nWhen an event such as a mouse click or a keypress occurs, Fireball dispatches an event object\ninto the event flow from the root of the hierarchy. The event object then makes its way through\nthe scene graph until it reaches the event target, at which point it begins its return trip through\nthe scene graph. This round-trip journey to the event target is conceptually divided into three phases:\n- The capture phase comprises the journey from the root to the last node before the event target's node\n- The target phase comprises only the event target node\n- The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the tree\nSee also: http://www.w3.org/TR/DOM-Level-3-Events/#event-flow\n\nEvent targets can implement the following methods:\n - _getCapturingTargets\n - _getBubblingTargets",
            "access": "public"
        },
        {
            "displayName": "FixedHeight",
            "name": "FixedHeight",
            "namespace": "",
            "module": "Fire",
            "description": "Strategy to scale the content's height to container's height and proportionally scale its width.",
            "access": "public"
        },
        {
            "displayName": "FObject",
            "name": "FObject",
            "namespace": "",
            "module": "Fire",
            "description": "The base class of most of all the objects in Fireball.",
            "access": "public"
        },
        {
            "displayName": "FontFlagType",
            "name": "FontFlagType",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "HashObject",
            "name": "HashObject",
            "namespace": "",
            "module": "Fire",
            "description": "提供获取对象ID的功能，该ID全局唯一但不会被序列化，可用于索引对象。\n\n如果你将对象索引起来，必须记住清除索引，否则对象将永远不会被销毁。",
            "access": "public"
        },
        {
            "displayName": "Input",
            "name": "Input",
            "namespace": "",
            "module": "Fire",
            "description": "Interface into the Input system.",
            "access": "public"
        },
        {
            "displayName": "InputField",
            "name": "InputField",
            "namespace": "",
            "module": "Fire",
            "description": "The Input Field renderer component.",
            "access": "public"
        },
        {
            "displayName": "_DeserializeInfo",
            "name": "_DeserializeInfo",
            "namespace": "",
            "module": "Fire",
            "description": "包含反序列化时的一些信息",
            "access": "public"
        },
        {
            "displayName": "KeyboardEvent",
            "name": "KeyboardEvent",
            "namespace": "",
            "module": "Fire",
            "description": "KeyboardEvent objects describe a user interaction with the keyboard. Each event describes a key; the event type (keydown, keypress, or keyup) identifies what kind of activity was performed.\nThis class is just an alias to the Web [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)",
            "access": "public"
        },
        {
            "displayName": "LoadManager",
            "name": "LoadManager",
            "namespace": "",
            "module": "Fire",
            "description": "The manager scheduling resources loading\n- It will:\n  - select registered loader\n  - merge same url request\n  - limit the max concurrent request\n- It will NOT:\n  - cache what has being loaded\n  - load depends of resource",
            "access": "public"
        },
        {
            "displayName": "Matrix23",
            "name": "Matrix23",
            "namespace": "",
            "module": "Fire",
            "description": "Simple matrix to do 2D affine transformations.\nIt is actually 3x3 but the last row is [0 0 1].",
            "access": "public"
        },
        {
            "displayName": "ModifierKeyStates",
            "name": "ModifierKeyStates",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "MouseEvent",
            "name": "MouseEvent",
            "namespace": "",
            "module": "Fire",
            "description": "The MouseEvent interface represents events that occur due to the user interacting with a pointing device (such as a mouse). Common events using this interface include click, dblclick, mouseup, mousedown.\n\nSee\n- https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent\n- http://www.quirksmode.org/dom/w3c_events.html#mousepos",
            "access": "public"
        },
        {
            "displayName": "NoScale",
            "name": "NoScale",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "ParticleSystem",
            "name": "ParticleSystem",
            "namespace": "",
            "module": "Fire",
            "description": "粒子系统组件",
            "access": "public"
        },
        {
            "displayName": "Path",
            "name": "Path",
            "namespace": "",
            "module": "Fire",
            "description": "The utils for path operation",
            "access": "public"
        },
        {
            "displayName": "Playable",
            "name": "Playable",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "PositionType",
            "name": "PositionType",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "Rect",
            "name": "Rect",
            "namespace": "",
            "module": "Fire",
            "description": "A 2D rectangle defined by x, y position and width, height.\n\nsee {% crosslink Fire.rect Fire.rect %}",
            "access": "public"
        },
        {
            "displayName": "Renderer",
            "name": "Renderer",
            "namespace": "",
            "module": "Fire",
            "description": "The base for all renderer",
            "access": "public"
        },
        {
            "displayName": "Resources",
            "name": "Resources",
            "namespace": "",
            "module": "Fire",
            "description": "Resources 模块允许你在运行时动态加载资源。资源以路径的形式标识，路径不能包含文件后缀名。\nResources 能够使用路径加载项目里所有 `Resources` 目录下的资源，例如 `sprites/npc/001`。",
            "access": "public"
        },
        {
            "displayName": "ResourcesBundle",
            "name": "ResourcesBundle",
            "namespace": "",
            "module": "Fire",
            "description": "这个加载类用于在运行时访问项目里的 Resources 目录",
            "access": "public"
        },
        {
            "displayName": "Screen",
            "name": "Screen",
            "namespace": "",
            "module": "Fire",
            "description": "Screen class can be used to access display information.",
            "access": "public"
        },
        {
            "displayName": "Screen.ContainerStrategy",
            "name": "Screen.ContainerStrategy",
            "namespace": "",
            "module": "Fire",
            "description": "ContainerStrategy class is the root strategy class of container's scale strategy,\nit controls the behavior of how to scale the container and canvas.",
            "access": "public"
        },
        {
            "displayName": "Screen.ContentStrategy",
            "name": "Screen.ContentStrategy",
            "namespace": "",
            "module": "Fire",
            "description": "ContentStrategy class is the root strategy class of content's scale strategy,\nit controls the behavior of how to scale the scene and setup the viewport for the game.",
            "access": "public"
        },
        {
            "displayName": "Skeleton",
            "name": "Skeleton",
            "namespace": "",
            "module": "Fire.Spine",
            "description": "The skeleton animation of spine.",
            "access": "public"
        },
        {
            "displayName": "SkeletonDataAsset",
            "name": "SkeletonDataAsset",
            "namespace": "",
            "module": "Fire.Spine",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "SkeletonRenderer",
            "name": "SkeletonRenderer",
            "namespace": "",
            "module": "Fire.Spine",
            "description": "The base class of Skeleton.",
            "access": "public"
        },
        {
            "displayName": "Sprite",
            "name": "Sprite",
            "namespace": "",
            "module": "Fire",
            "description": "Represents a Sprite object which obtained from Texture.",
            "access": "public"
        },
        {
            "displayName": "SpriteAnimation",
            "name": "SpriteAnimation",
            "namespace": "",
            "module": "Fire",
            "description": "The sprite animation Component.",
            "access": "public"
        },
        {
            "displayName": "SpriteAnimationClip",
            "name": "SpriteAnimationClip",
            "namespace": "",
            "module": "Fire",
            "description": "The sprite animation clip.",
            "access": "public"
        },
        {
            "displayName": "SpriteAnimationState",
            "name": "SpriteAnimationState",
            "namespace": "",
            "module": "Fire",
            "description": "The sprite animation state.",
            "access": "public"
        },
        {
            "displayName": "SpriteRenderer",
            "name": "SpriteRenderer",
            "namespace": "",
            "module": "Fire",
            "description": "Renders a sprite in the scene.",
            "access": "public"
        },
        {
            "displayName": "Text",
            "name": "Text",
            "namespace": "",
            "module": "Fire",
            "description": "The text renderer component.",
            "access": "public"
        },
        {
            "displayName": "Texture.FilterMode",
            "name": "Texture.FilterMode",
            "namespace": "Texture",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "Texture.Texture",
            "name": "Texture.Texture",
            "namespace": "Texture",
            "module": "Fire",
            "description": "Class for texture handling.\nUse this to create textures on the fly or to modify existing texture assets.",
            "access": "public"
        },
        {
            "displayName": "Texture.WrapMode",
            "name": "Texture.WrapMode",
            "namespace": "Texture",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "Time",
            "name": "Time",
            "namespace": "",
            "module": "Fire",
            "description": "Time 模块用于获得游戏里的时间和帧率相关信息。直接使用 Fire.Time.*** 访问即可。\n\n请参考教程[计时和帧率](/zh/scripting/time/)",
            "access": "public"
        },
        {
            "displayName": "Transform",
            "name": "Transform",
            "namespace": "",
            "module": "Fire",
            "description": "Defines position, rotation and scale of an entity.",
            "access": "public"
        },
        {
            "displayName": "ValueType",
            "name": "ValueType",
            "namespace": "",
            "module": "Fire",
            "description": "The base class of all value types.",
            "access": "public"
        },
        {
            "displayName": "Vec2",
            "name": "Vec2",
            "namespace": "",
            "module": "Fire",
            "description": "Representation of 2D vectors and points.\n\nsee {% crosslink Fire.v2 Fire.v2 %}",
            "access": "public"
        }
    ],
    "enums": [
        {
            "displayName": "Fire.KeyCode",
            "name": "Fire.KeyCode",
            "namespace": "",
            "module": "Fire",
            "description": "Key codes returned by Event.keyCode. These map directly to a physical key on the keyboard.",
            "access": "public"
        },
        {
            "displayName": "FontType",
            "name": "FontType",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "ImageType",
            "name": "ImageType",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "SpriteAnimationClip.StopAction",
            "name": "SpriteAnimationClip.StopAction",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "SpriteAnimationClip.WrapMode",
            "name": "SpriteAnimationClip.WrapMode",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "TextAlign",
            "name": "TextAlign",
            "namespace": "",
            "module": "Fire",
            "description": "文字对齐方式",
            "access": "public"
        },
        {
            "displayName": "TextAnchor",
            "name": "TextAnchor",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "WrapMode",
            "name": "WrapMode",
            "namespace": "",
            "module": "Fire",
            "description": "Specifies how time is treated when it is outside of the keyframe range of an Animation.",
            "access": "public"
        }
    ],
    "modules": [
        {
            "displayName": "Editor",
            "name": "Editor",
            "submodules": []
        },
        {
            "displayName": "Fire",
            "name": "Fire",
            "submodules": []
        },
        {
            "displayName": "Fire.JS",
            "name": "Fire.JS",
            "submodules": []
        },
        {
            "displayName": "Fire.Spine",
            "name": "Fire.Spine",
            "submodules": []
        },
        {
            "displayName": "Math",
            "name": "Math",
            "submodules": []
        }
    ],
    "allModules": [
        {
            "displayName": "Editor",
            "name": "Editor",
            "description": "Global object with classes, properties and methods you can access from anywhere."
        },
        {
            "displayName": "Fire",
            "name": "Fire",
            "description": "可全局访问的公共方法和属性，也会包括一些组件和类的静态方法\n包含的子模块:\n- [JS](./Fire.JS.html)\n- [Spine](./Fire.Spine.html)"
        },
        {
            "displayName": "Fire.JS",
            "name": "Fire.JS",
            "description": "This module provides some JavaScript utilities."
        },
        {
            "displayName": "Fire.Spine",
            "name": "Fire.Spine",
            "description": "The namespace of Spine, all classes, functions, properties and constants of Spine are defined in this\nmodule."
        },
        {
            "displayName": "Math",
            "name": "Math",
            "description": "扩展 JavaScript 内建的数学计算属性和方法。\n请参考[MDN上的Global_Objects/Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)"
        }
    ]
} };
});