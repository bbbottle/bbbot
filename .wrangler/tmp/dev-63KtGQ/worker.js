var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedAsync(name) {
  const fn = /* @__PURE__ */ notImplemented(name);
  fn.__promisify__ = () => /* @__PURE__ */ notImplemented(name + ".__promisify__");
  fn.native = fn;
  return fn;
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(rawHeaders, "rawHeaders");
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedAsync, "notImplementedAsync");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// ../../Library/pnpm/global/5/.pnpm/@cloudflare+unenv-preset@2.8.0_unenv@2.0.0-rc.24_workerd@1.20260107.1/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "../../Library/pnpm/global/5/.pnpm/@cloudflare+unenv-preset@2.8.0_unenv@2.0.0-rc.24_workerd@1.20260107.1/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// ../../Library/pnpm/global/5/.pnpm/@cloudflare+unenv-preset@2.8.0_unenv@2.0.0-rc.24_workerd@1.20260107.1/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "../../Library/pnpm/global/5/.pnpm/@cloudflare+unenv-preset@2.8.0_unenv@2.0.0-rc.24_workerd@1.20260107.1/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// ../../Library/pnpm/global/5/.pnpm/wrangler@4.58.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "../../Library/pnpm/global/5/.pnpm/wrangler@4.58.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// ../../Library/pnpm/global/5/.pnpm/@cloudflare+unenv-preset@2.8.0_unenv@2.0.0-rc.24_workerd@1.20260107.1/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, isWorkerdProcessV2, unenvProcess, exit, features, platform, env, hrtime3, nextTick, _channel, _disconnect, _events, _eventsCount, _handleQueue, _maxListeners, _pendingMessage, _send, assert2, disconnect, mainModule, _debugEnd, _debugProcess, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _linkedBinding, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, dlopen, domain, emit, emitWarning, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, initgroups, kill, listenerCount, listeners, loadEnvFile, memoryUsage, moduleLoadList, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "../../Library/pnpm/global/5/.pnpm/@cloudflare+unenv-preset@2.8.0_unenv@2.0.0-rc.24_workerd@1.20260107.1/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    isWorkerdProcessV2 = globalThis.Cloudflare.compatibilityFlags.enable_nodejs_process_v2;
    unenvProcess = new Process({
      env: globalProcess.env,
      // `hrtime` is only available from workerd process v2
      hrtime: isWorkerdProcessV2 ? workerdProcess.hrtime : hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      env: (
        // Always implemented by workerd
        env
      ),
      hrtime: (
        // Only implemented in workerd v2
        hrtime3
      ),
      nextTick: (
        // Always implemented by workerd
        nextTick
      )
    } = unenvProcess);
    ({
      _channel,
      _disconnect,
      _events,
      _eventsCount,
      _handleQueue,
      _maxListeners,
      _pendingMessage,
      _send,
      assert: assert2,
      disconnect,
      mainModule
    } = unenvProcess);
    ({
      _debugEnd: (
        // @ts-expect-error `_debugEnd` is missing typings
        _debugEnd
      ),
      _debugProcess: (
        // @ts-expect-error `_debugProcess` is missing typings
        _debugProcess
      ),
      _exiting: (
        // @ts-expect-error `_exiting` is missing typings
        _exiting
      ),
      _fatalException: (
        // @ts-expect-error `_fatalException` is missing typings
        _fatalException
      ),
      _getActiveHandles: (
        // @ts-expect-error `_getActiveHandles` is missing typings
        _getActiveHandles
      ),
      _getActiveRequests: (
        // @ts-expect-error `_getActiveRequests` is missing typings
        _getActiveRequests
      ),
      _kill: (
        // @ts-expect-error `_kill` is missing typings
        _kill
      ),
      _linkedBinding: (
        // @ts-expect-error `_linkedBinding` is missing typings
        _linkedBinding
      ),
      _preload_modules: (
        // @ts-expect-error `_preload_modules` is missing typings
        _preload_modules
      ),
      _rawDebug: (
        // @ts-expect-error `_rawDebug` is missing typings
        _rawDebug
      ),
      _startProfilerIdleNotifier: (
        // @ts-expect-error `_startProfilerIdleNotifier` is missing typings
        _startProfilerIdleNotifier
      ),
      _stopProfilerIdleNotifier: (
        // @ts-expect-error `_stopProfilerIdleNotifier` is missing typings
        _stopProfilerIdleNotifier
      ),
      _tickCallback: (
        // @ts-expect-error `_tickCallback` is missing typings
        _tickCallback
      ),
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      availableMemory,
      binding: (
        // @ts-expect-error `binding` is missing typings
        binding
      ),
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      domain: (
        // @ts-expect-error `domain` is missing typings
        domain
      ),
      emit,
      emitWarning,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      initgroups: (
        // @ts-expect-error `initgroups` is missing typings
        initgroups
      ),
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      memoryUsage,
      moduleLoadList: (
        // @ts-expect-error `moduleLoadList` is missing typings
        moduleLoadList
      ),
      off,
      on,
      once,
      openStdin: (
        // @ts-expect-error `openStdin` is missing typings
        openStdin
      ),
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit: (
        // @ts-expect-error `reallyExit` is missing typings
        reallyExit
      ),
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = isWorkerdProcessV2 ? workerdProcess : unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// ../../Library/pnpm/global/5/.pnpm/wrangler@4.58.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "../../Library/pnpm/global/5/.pnpm/wrangler@4.58.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// ../../Library/pnpm/global/5/.pnpm/wrangler@4.58.0/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../Library/pnpm/global/5/.pnpm/wrangler@4.58.0/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node-built-in-modules:crypto
import libDefault from "crypto";
var require_crypto = __commonJS({
  "node-built-in-modules:crypto"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault;
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/http/request.mjs
import { Socket } from "node:net";
import { Readable } from "node:stream";
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(Boolean);
    }
  }
  return d;
}
var IncomingMessage;
var init_request = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/http/request.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    IncomingMessage = class extends Readable {
      static {
        __name(this, "IncomingMessage");
      }
      __unenv__ = {};
      aborted = false;
      httpVersion = "1.1";
      httpVersionMajor = 1;
      httpVersionMinor = 1;
      complete = true;
      connection;
      socket;
      headers = {};
      trailers = {};
      method = "GET";
      url = "/";
      statusCode = 200;
      statusMessage = "";
      closed = false;
      errored = null;
      readable = false;
      constructor(socket) {
        super();
        this.socket = this.connection = socket || new Socket();
      }
      get rawHeaders() {
        return rawHeaders(this.headers);
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(_msecs, _callback) {
        return this;
      }
      get headersDistinct() {
        return _distinct(this.headers);
      }
      get trailersDistinct() {
        return _distinct(this.trailers);
      }
      _read() {
      }
    };
    __name(_distinct, "_distinct");
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/http/response.mjs
import { Writable as Writable2 } from "node:stream";
var ServerResponse;
var init_response = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/http/response.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ServerResponse = class extends Writable2 {
      static {
        __name(this, "ServerResponse");
      }
      __unenv__ = true;
      statusCode = 200;
      statusMessage = "";
      upgrading = false;
      chunkedEncoding = false;
      shouldKeepAlive = false;
      useChunkedEncodingByDefault = false;
      sendDate = false;
      finished = false;
      headersSent = false;
      strictContentLength = false;
      connection = null;
      socket = null;
      req;
      _headers = {};
      constructor(req) {
        super();
        this.req = req;
      }
      assignSocket(socket) {
        socket._httpMessage = this;
        this.socket = socket;
        this.connection = socket;
        this.emit("socket", socket);
        this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(_socket) {
      }
      writeContinue(_callback) {
      }
      writeHead(statusCode, arg1, arg2) {
        if (statusCode) {
          this.statusCode = statusCode;
        }
        if (typeof arg1 === "string") {
          this.statusMessage = arg1;
          arg1 = void 0;
        }
        const headers = arg2 || arg1;
        if (headers) {
          if (Array.isArray(headers)) {
          } else {
            for (const key in headers) {
              this.setHeader(key, headers[key]);
            }
          }
        }
        this.headersSent = true;
        return this;
      }
      writeProcessing() {
      }
      setTimeout(_msecs, _callback) {
        return this;
      }
      appendHeader(name, value) {
        name = name.toLowerCase();
        const current = this._headers[name];
        const all = [...Array.isArray(current) ? current : [current], ...Array.isArray(value) ? value : [value]].filter(Boolean);
        this._headers[name] = all.length > 1 ? all : all[0];
        return this;
      }
      setHeader(name, value) {
        this._headers[name.toLowerCase()] = Array.isArray(value) ? [...value] : value;
        return this;
      }
      setHeaders(headers) {
        for (const [key, value] of headers.entries()) {
          this.setHeader(key, value);
        }
        return this;
      }
      getHeader(name) {
        return this._headers[name.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(name) {
        return name.toLowerCase() in this._headers;
      }
      removeHeader(name) {
        delete this._headers[name.toLowerCase()];
      }
      addTrailers(_headers) {
      }
      flushHeaders() {
      }
      writeEarlyHints(_headers, cb) {
        if (typeof cb === "function") {
          cb();
        }
      }
    };
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/http/agent.mjs
import { EventEmitter as EventEmitter2 } from "node:events";
var Agent;
var init_agent = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/http/agent.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Agent = class extends EventEmitter2 {
      static {
        __name(this, "Agent");
      }
      __unenv__ = {};
      maxFreeSockets = 256;
      maxSockets = Infinity;
      maxTotalSockets = Infinity;
      freeSockets = {};
      sockets = {};
      requests = {};
      options;
      constructor(opts = {}) {
        super();
        this.options = opts;
      }
      destroy() {
      }
    };
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/http/constants.mjs
var METHODS, STATUS_CODES, maxHeaderSize;
var init_constants = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/http/constants.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    METHODS = [
      "ACL",
      "BIND",
      "CHECKOUT",
      "CONNECT",
      "COPY",
      "DELETE",
      "GET",
      "HEAD",
      "LINK",
      "LOCK",
      "M-SEARCH",
      "MERGE",
      "MKACTIVITY",
      "MKCALENDAR",
      "MKCOL",
      "MOVE",
      "NOTIFY",
      "OPTIONS",
      "PATCH",
      "POST",
      "PRI",
      "PROPFIND",
      "PROPPATCH",
      "PURGE",
      "PUT",
      "REBIND",
      "REPORT",
      "SEARCH",
      "SOURCE",
      "SUBSCRIBE",
      "TRACE",
      "UNBIND",
      "UNLINK",
      "UNLOCK",
      "UNSUBSCRIBE"
    ];
    STATUS_CODES = {
      100: "Continue",
      101: "Switching Protocols",
      102: "Processing",
      103: "Early Hints",
      200: "OK",
      201: "Created",
      202: "Accepted",
      203: "Non-Authoritative Information",
      204: "No Content",
      205: "Reset Content",
      206: "Partial Content",
      207: "Multi-Status",
      208: "Already Reported",
      226: "IM Used",
      300: "Multiple Choices",
      301: "Moved Permanently",
      302: "Found",
      303: "See Other",
      304: "Not Modified",
      305: "Use Proxy",
      307: "Temporary Redirect",
      308: "Permanent Redirect",
      400: "Bad Request",
      401: "Unauthorized",
      402: "Payment Required",
      403: "Forbidden",
      404: "Not Found",
      405: "Method Not Allowed",
      406: "Not Acceptable",
      407: "Proxy Authentication Required",
      408: "Request Timeout",
      409: "Conflict",
      410: "Gone",
      411: "Length Required",
      412: "Precondition Failed",
      413: "Payload Too Large",
      414: "URI Too Long",
      415: "Unsupported Media Type",
      416: "Range Not Satisfiable",
      417: "Expectation Failed",
      418: "I'm a Teapot",
      421: "Misdirected Request",
      422: "Unprocessable Entity",
      423: "Locked",
      424: "Failed Dependency",
      425: "Too Early",
      426: "Upgrade Required",
      428: "Precondition Required",
      429: "Too Many Requests",
      431: "Request Header Fields Too Large",
      451: "Unavailable For Legal Reasons",
      500: "Internal Server Error",
      501: "Not Implemented",
      502: "Bad Gateway",
      503: "Service Unavailable",
      504: "Gateway Timeout",
      505: "HTTP Version Not Supported",
      506: "Variant Also Negotiates",
      507: "Insufficient Storage",
      508: "Loop Detected",
      509: "Bandwidth Limit Exceeded",
      510: "Not Extended",
      511: "Network Authentication Required"
    };
    maxHeaderSize = 16384;
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/http.mjs
var createServer, request, get, Server, OutgoingMessage, ClientRequest, globalAgent, validateHeaderName, validateHeaderValue, setMaxIdleHTTPParsers, _connectionListener, WebSocket2, CloseEvent, MessageEvent, http_default;
var init_http = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/http.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    init_request();
    init_response();
    init_agent();
    init_constants();
    init_request();
    init_response();
    createServer = /* @__PURE__ */ notImplemented("http.createServer");
    request = /* @__PURE__ */ notImplemented("http.request");
    get = /* @__PURE__ */ notImplemented("http.get");
    Server = /* @__PURE__ */ notImplementedClass("http.Server");
    OutgoingMessage = /* @__PURE__ */ notImplementedClass("http.OutgoingMessage");
    ClientRequest = /* @__PURE__ */ notImplementedClass("http.ClientRequest");
    globalAgent = new Agent();
    validateHeaderName = /* @__PURE__ */ notImplemented("http.validateHeaderName");
    validateHeaderValue = /* @__PURE__ */ notImplemented("http.validateHeaderValue");
    setMaxIdleHTTPParsers = /* @__PURE__ */ notImplemented("http.setMaxIdleHTTPParsers");
    _connectionListener = /* @__PURE__ */ notImplemented("http._connectionListener");
    WebSocket2 = globalThis.WebSocket || /* @__PURE__ */ notImplementedClass("WebSocket");
    CloseEvent = globalThis.CloseEvent || /* @__PURE__ */ notImplementedClass("CloseEvent");
    MessageEvent = globalThis.MessageEvent || /* @__PURE__ */ notImplementedClass("MessageEvent");
    http_default = {
      METHODS,
      STATUS_CODES,
      maxHeaderSize,
      IncomingMessage,
      ServerResponse,
      WebSocket: WebSocket2,
      CloseEvent,
      MessageEvent,
      createServer,
      request,
      get,
      Server,
      OutgoingMessage,
      ClientRequest,
      Agent,
      globalAgent,
      validateHeaderName,
      validateHeaderValue,
      setMaxIdleHTTPParsers,
      _connectionListener
    };
  }
});

// node-built-in-modules:http
var require_http = __commonJS({
  "node-built-in-modules:http"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_http();
    module.exports = http_default;
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/https.mjs
var Server2, Agent2, globalAgent2, get2, createServer2, request2, https_default;
var init_https = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/https.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    init_agent();
    Server2 = /* @__PURE__ */ notImplementedClass("https.Server");
    Agent2 = Agent;
    globalAgent2 = /* @__PURE__ */ new Agent2();
    get2 = /* @__PURE__ */ notImplemented("https.get");
    createServer2 = /* @__PURE__ */ notImplemented("https.createServer");
    request2 = /* @__PURE__ */ notImplemented("https.request");
    https_default = {
      Server: Server2,
      Agent: Agent2,
      globalAgent: globalAgent2,
      get: get2,
      createServer: createServer2,
      request: request2
    };
  }
});

// node-built-in-modules:https
var require_https = __commonJS({
  "node-built-in-modules:https"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_https();
    module.exports = https_default;
  }
});

// node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    __name(parse, "parse");
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    __name(fmtShort, "fmtShort");
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    __name(fmtLong, "fmtLong");
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
    __name(plural, "plural");
  }
});

// node_modules/.pnpm/debug@4.3.5/node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/.pnpm/debug@4.3.5/node_modules/debug/src/common.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function setup(env2) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env2).forEach((key) => {
        createDebug[key] = env2[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      __name(selectColor, "selectColor");
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug3(...args) {
          if (!debug3.enabled) {
            return;
          }
          const self2 = debug3;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        __name(debug3, "debug");
        debug3.namespace = namespace;
        debug3.useColors = createDebug.useColors();
        debug3.color = createDebug.selectColor(namespace);
        debug3.extend = extend;
        debug3.destroy = createDebug.destroy;
        Object.defineProperty(debug3, "enabled", {
          enumerable: true,
          configurable: false,
          get: /* @__PURE__ */ __name(() => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          }, "get"),
          set: /* @__PURE__ */ __name((v) => {
            enableOverride = v;
          }, "set")
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug3);
        }
        return debug3;
      }
      __name(createDebug, "createDebug");
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      __name(extend, "extend");
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      __name(enable, "enable");
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      __name(disable, "disable");
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      __name(enabled, "enabled");
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      __name(toNamespace, "toNamespace");
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      __name(coerce, "coerce");
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      __name(destroy, "destroy");
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    __name(setup, "setup");
    module.exports = setup;
  }
});

// node_modules/.pnpm/debug@4.3.5/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/.pnpm/debug@4.3.5/node_modules/debug/src/browser.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && "Cloudflare-Workers" && "Cloudflare-Workers".toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && "Cloudflare-Workers" && "Cloudflare-Workers".toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && "Cloudflare-Workers" && "Cloudflare-Workers".toLowerCase().match(/applewebkit\/(\d+)/);
    }
    __name(useColors, "useColors");
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    __name(formatArgs, "formatArgs");
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error3) {
      }
    }
    __name(save, "save");
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error3) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    __name(load, "load");
    function localstorage() {
      try {
        return localStorage;
      } catch (error3) {
      }
    }
    __name(localstorage, "localstorage");
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error3) {
        return "[UnexpectedJSONParseError]: " + error3.message;
      }
    };
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/helpers/util.js
var require_util = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/helpers/util.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.indexed = exports.zip = exports.fmtCaption = exports.env = void 0;
    exports.env = process.env;
    function fmtCaption(extra) {
      if (!extra)
        return;
      const caption = extra.caption;
      if (!caption || typeof caption === "string")
        return extra;
      const { text, entities } = caption;
      return {
        ...extra,
        caption: text,
        ...entities && {
          caption_entities: entities,
          parse_mode: void 0
        }
      };
    }
    __name(fmtCaption, "fmtCaption");
    exports.fmtCaption = fmtCaption;
    function* zip(xs, ys) {
      const x = xs[Symbol.iterator]();
      const y = ys[Symbol.iterator]();
      let x1 = x.next();
      let y1 = y.next();
      while (!x1.done) {
        yield x1.value;
        if (!y1.done)
          yield y1.value;
        x1 = x.next();
        y1 = y.next();
      }
      while (!y1.done) {
        yield y1.value;
        y1 = y.next();
      }
    }
    __name(zip, "zip");
    exports.zip = zip;
    function indexed(target, indexer) {
      return new Proxy(target, {
        get: /* @__PURE__ */ __name(function(target2, prop, receiver) {
          if ((typeof prop === "string" || typeof prop === "number") && !isNaN(+prop))
            return indexer.call(target2, +prop);
          return Reflect.get(target2, prop, receiver);
        }, "get")
      });
    }
    __name(indexed, "indexed");
    exports.indexed = indexed;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/reactions.js
var require_reactions = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/reactions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MessageReactions = exports.ReactionList = exports.Digit = void 0;
    var util_1 = require_util();
    exports.Digit = /* @__PURE__ */ new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    var inspectReaction = /* @__PURE__ */ __name((reaction) => {
      if (reaction.type === "custom_emoji")
        return `Custom(${reaction.custom_emoji_id})`;
      else
        return reaction.emoji;
    }, "inspectReaction");
    var ReactionList = class _ReactionList {
      static {
        __name(this, "ReactionList");
      }
      constructor(list) {
        this.list = list;
      }
      static fromArray(list = []) {
        return (0, util_1.indexed)(new _ReactionList(list), function(index) {
          return this.list[index];
        });
      }
      static has(reactions, reaction) {
        if (typeof reaction === "string")
          if (exports.Digit.has(reaction[0]))
            return reactions.some((r) => r.custom_emoji_id === reaction);
          else
            return reactions.some((r) => r.emoji === reaction);
        return reactions.some((r) => {
          if (r.type === "custom_emoji")
            return r.custom_emoji_id === reaction.custom_emoji_id;
          else if (r.type === "emoji")
            return r.emoji === reaction.emoji;
        });
      }
      toArray() {
        return [...this.list];
      }
      filter(filterFn) {
        return _ReactionList.fromArray(this.list.filter(filterFn));
      }
      has(reaction) {
        return _ReactionList.has(this.list, reaction);
      }
      get count() {
        return this.list.length;
      }
      [Symbol.iterator]() {
        return this.list[Symbol.iterator]();
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        const flattened = this.list.map(inspectReaction).join(", ");
        return ["ReactionList {", flattened, "}"].join(" ");
      }
    };
    exports.ReactionList = ReactionList;
    var MessageReactions = class _MessageReactions extends ReactionList {
      static {
        __name(this, "MessageReactions");
      }
      constructor(ctx) {
        var _a, _b;
        super((_b = (_a = ctx.update.message_reaction) === null || _a === void 0 ? void 0 : _a.new_reaction) !== null && _b !== void 0 ? _b : []);
        this.ctx = ctx;
      }
      static from(ctx) {
        return (0, util_1.indexed)(new _MessageReactions(ctx), function(index) {
          return this.list[index];
        });
      }
      get old() {
        var _a;
        return ReactionList.fromArray((_a = this.ctx.update.message_reaction) === null || _a === void 0 ? void 0 : _a.old_reaction);
      }
      get new() {
        var _a;
        return ReactionList.fromArray((_a = this.ctx.update.message_reaction) === null || _a === void 0 ? void 0 : _a.new_reaction);
      }
      get added() {
        return this.new.filter((reaction) => !this.old.has(reaction));
      }
      get removed() {
        return this.old.filter((reaction) => !this.new.has(reaction));
      }
      get kept() {
        return this.new.filter((reaction) => this.old.has(reaction));
      }
    };
    exports.MessageReactions = MessageReactions;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/context.js
var require_context = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/context.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Context = void 0;
    var debug_1 = __importDefault(require_browser());
    var reactions_1 = require_reactions();
    var debug3 = (0, debug_1.default)("telegraf:context");
    var Context = class {
      static {
        __name(this, "Context");
      }
      constructor(update, telegram, botInfo) {
        this.update = update;
        this.telegram = telegram;
        this.botInfo = botInfo;
        this.state = {};
      }
      get updateType() {
        for (const key in this.update) {
          if (typeof this.update[key] === "object")
            return key;
        }
        throw new Error(`Cannot determine \`updateType\` of ${JSON.stringify(this.update)}`);
      }
      get me() {
        var _a;
        return (_a = this.botInfo) === null || _a === void 0 ? void 0 : _a.username;
      }
      /**
       * @deprecated Use ctx.telegram instead
       */
      get tg() {
        return this.telegram;
      }
      get message() {
        return this.update.message;
      }
      get editedMessage() {
        return this.update.edited_message;
      }
      get inlineQuery() {
        return this.update.inline_query;
      }
      get shippingQuery() {
        return this.update.shipping_query;
      }
      get preCheckoutQuery() {
        return this.update.pre_checkout_query;
      }
      get chosenInlineResult() {
        return this.update.chosen_inline_result;
      }
      get channelPost() {
        return this.update.channel_post;
      }
      get editedChannelPost() {
        return this.update.edited_channel_post;
      }
      get messageReaction() {
        return this.update.message_reaction;
      }
      get messageReactionCount() {
        return this.update.message_reaction_count;
      }
      get callbackQuery() {
        return this.update.callback_query;
      }
      get poll() {
        return this.update.poll;
      }
      get pollAnswer() {
        return this.update.poll_answer;
      }
      get myChatMember() {
        return this.update.my_chat_member;
      }
      get chatMember() {
        return this.update.chat_member;
      }
      get chatJoinRequest() {
        return this.update.chat_join_request;
      }
      get chatBoost() {
        return this.update.chat_boost;
      }
      get removedChatBoost() {
        return this.update.removed_chat_boost;
      }
      /** Shorthand for any `message` object present in the current update. One of
       * `message`, `edited_message`, `channel_post`, `edited_channel_post` or
       * `callback_query.message`
       */
      get msg() {
        return getMessageFromAnySource(this);
      }
      /** Shorthand for any message_id present in the current update. */
      get msgId() {
        return getMsgIdFromAnySource(this);
      }
      get chat() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (_g = (_f = (_e = (_d = (_c = (_b = (_a = this.msg) !== null && _a !== void 0 ? _a : this.messageReaction) !== null && _b !== void 0 ? _b : this.messageReactionCount) !== null && _c !== void 0 ? _c : this.chatJoinRequest) !== null && _d !== void 0 ? _d : this.chatMember) !== null && _e !== void 0 ? _e : this.myChatMember) !== null && _f !== void 0 ? _f : this.removedChatBoost) === null || _g === void 0 ? void 0 : _g.chat;
      }
      get senderChat() {
        const msg = this.msg;
        return (msg === null || msg === void 0 ? void 0 : msg.has("sender_chat")) && msg.sender_chat;
      }
      get from() {
        return getUserFromAnySource(this);
      }
      get inlineMessageId() {
        var _a, _b;
        return (_b = (_a = this.callbackQuery) !== null && _a !== void 0 ? _a : this.chosenInlineResult) === null || _b === void 0 ? void 0 : _b.inline_message_id;
      }
      get passportData() {
        var _a;
        if (this.message == null)
          return void 0;
        if (!("passport_data" in this.message))
          return void 0;
        return (_a = this.message) === null || _a === void 0 ? void 0 : _a.passport_data;
      }
      get webAppData() {
        if (!(this.message && "web_app_data" in this.message))
          return void 0;
        const { data, button_text } = this.message.web_app_data;
        return {
          data: {
            json() {
              return JSON.parse(data);
            },
            text() {
              return data;
            }
          },
          button_text
        };
      }
      /**
       * @deprecated use {@link Telegram.webhookReply}
       */
      get webhookReply() {
        return this.telegram.webhookReply;
      }
      set webhookReply(enable) {
        this.telegram.webhookReply = enable;
      }
      get reactions() {
        return reactions_1.MessageReactions.from(this);
      }
      /**
       * @internal
       */
      assert(value, method) {
        if (value === void 0) {
          throw new TypeError(`Telegraf: "${method}" isn't available for "${this.updateType}"`);
        }
      }
      has(filters) {
        if (!Array.isArray(filters))
          filters = [filters];
        for (const filter of filters)
          if (
            // TODO: this should change to === 'function' once TS bug is fixed
            // https://github.com/microsoft/TypeScript/pull/51502
            typeof filter !== "string" ? (
              // filter is a type guard
              filter(this.update)
            ) : (
              // check if filter is the update type
              filter in this.update
            )
          )
            return true;
        return false;
      }
      get text() {
        return getTextAndEntitiesFromAnySource(this)[0];
      }
      entities(...types) {
        const [text = "", entities = []] = getTextAndEntitiesFromAnySource(this);
        return (types.length ? entities.filter((entity) => types.includes(entity.type)) : entities).map((entity) => ({
          ...entity,
          fragment: text.slice(entity.offset, entity.offset + entity.length)
        }));
      }
      /**
       * @see https://core.telegram.org/bots/api#answerinlinequery
       */
      answerInlineQuery(...args) {
        this.assert(this.inlineQuery, "answerInlineQuery");
        return this.telegram.answerInlineQuery(this.inlineQuery.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#answercallbackquery
       */
      answerCbQuery(...args) {
        this.assert(this.callbackQuery, "answerCbQuery");
        return this.telegram.answerCbQuery(this.callbackQuery.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#answercallbackquery
       */
      answerGameQuery(...args) {
        this.assert(this.callbackQuery, "answerGameQuery");
        return this.telegram.answerGameQuery(this.callbackQuery.id, ...args);
      }
      /**
       * Shorthand for {@link Telegram.getUserChatBoosts}
       */
      getUserChatBoosts() {
        this.assert(this.chat, "getUserChatBoosts");
        this.assert(this.from, "getUserChatBoosts");
        return this.telegram.getUserChatBoosts(this.chat.id, this.from.id);
      }
      /**
       * @see https://core.telegram.org/bots/api#answershippingquery
       */
      answerShippingQuery(...args) {
        this.assert(this.shippingQuery, "answerShippingQuery");
        return this.telegram.answerShippingQuery(this.shippingQuery.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#answerprecheckoutquery
       */
      answerPreCheckoutQuery(...args) {
        this.assert(this.preCheckoutQuery, "answerPreCheckoutQuery");
        return this.telegram.answerPreCheckoutQuery(this.preCheckoutQuery.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#editmessagetext
       */
      editMessageText(text, extra) {
        var _a, _b;
        this.assert((_a = this.msgId) !== null && _a !== void 0 ? _a : this.inlineMessageId, "editMessageText");
        return this.telegram.editMessageText((_b = this.chat) === null || _b === void 0 ? void 0 : _b.id, this.msgId, this.inlineMessageId, text, extra);
      }
      /**
       * @see https://core.telegram.org/bots/api#editmessagecaption
       */
      editMessageCaption(caption, extra) {
        var _a, _b;
        this.assert((_a = this.msgId) !== null && _a !== void 0 ? _a : this.inlineMessageId, "editMessageCaption");
        return this.telegram.editMessageCaption((_b = this.chat) === null || _b === void 0 ? void 0 : _b.id, this.msgId, this.inlineMessageId, caption, extra);
      }
      /**
       * @see https://core.telegram.org/bots/api#editmessagemedia
       */
      editMessageMedia(media, extra) {
        var _a, _b;
        this.assert((_a = this.msgId) !== null && _a !== void 0 ? _a : this.inlineMessageId, "editMessageMedia");
        return this.telegram.editMessageMedia((_b = this.chat) === null || _b === void 0 ? void 0 : _b.id, this.msgId, this.inlineMessageId, media, extra);
      }
      /**
       * @see https://core.telegram.org/bots/api#editmessagereplymarkup
       */
      editMessageReplyMarkup(markup) {
        var _a, _b;
        this.assert((_a = this.msgId) !== null && _a !== void 0 ? _a : this.inlineMessageId, "editMessageReplyMarkup");
        return this.telegram.editMessageReplyMarkup((_b = this.chat) === null || _b === void 0 ? void 0 : _b.id, this.msgId, this.inlineMessageId, markup);
      }
      /**
       * @see https://core.telegram.org/bots/api#editmessagelivelocation
       */
      editMessageLiveLocation(latitude, longitude, extra) {
        var _a, _b;
        this.assert((_a = this.msgId) !== null && _a !== void 0 ? _a : this.inlineMessageId, "editMessageLiveLocation");
        return this.telegram.editMessageLiveLocation((_b = this.chat) === null || _b === void 0 ? void 0 : _b.id, this.msgId, this.inlineMessageId, latitude, longitude, extra);
      }
      /**
       * @see https://core.telegram.org/bots/api#stopmessagelivelocation
       */
      stopMessageLiveLocation(markup) {
        var _a, _b;
        this.assert((_a = this.msgId) !== null && _a !== void 0 ? _a : this.inlineMessageId, "stopMessageLiveLocation");
        return this.telegram.stopMessageLiveLocation((_b = this.chat) === null || _b === void 0 ? void 0 : _b.id, this.msgId, this.inlineMessageId, markup);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendmessage
       */
      sendMessage(text, extra) {
        this.assert(this.chat, "sendMessage");
        return this.telegram.sendMessage(this.chat.id, text, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendmessage
       */
      reply(...args) {
        return this.sendMessage(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#getchat
       */
      getChat(...args) {
        this.assert(this.chat, "getChat");
        return this.telegram.getChat(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#exportchatinvitelink
       */
      exportChatInviteLink(...args) {
        this.assert(this.chat, "exportChatInviteLink");
        return this.telegram.exportChatInviteLink(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#createchatinvitelink
       */
      createChatInviteLink(...args) {
        this.assert(this.chat, "createChatInviteLink");
        return this.telegram.createChatInviteLink(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#editchatinvitelink
       */
      editChatInviteLink(...args) {
        this.assert(this.chat, "editChatInviteLink");
        return this.telegram.editChatInviteLink(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#revokechatinvitelink
       */
      revokeChatInviteLink(...args) {
        this.assert(this.chat, "revokeChatInviteLink");
        return this.telegram.revokeChatInviteLink(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#banchatmember
       */
      banChatMember(...args) {
        this.assert(this.chat, "banChatMember");
        return this.telegram.banChatMember(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#banchatmember
       * @deprecated since API 5.3. Use {@link Context.banChatMember}
       */
      get kickChatMember() {
        return this.banChatMember;
      }
      /**
       * @see https://core.telegram.org/bots/api#unbanchatmember
       */
      unbanChatMember(...args) {
        this.assert(this.chat, "unbanChatMember");
        return this.telegram.unbanChatMember(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#restrictchatmember
       */
      restrictChatMember(...args) {
        this.assert(this.chat, "restrictChatMember");
        return this.telegram.restrictChatMember(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#promotechatmember
       */
      promoteChatMember(...args) {
        this.assert(this.chat, "promoteChatMember");
        return this.telegram.promoteChatMember(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#setchatadministratorcustomtitle
       */
      setChatAdministratorCustomTitle(...args) {
        this.assert(this.chat, "setChatAdministratorCustomTitle");
        return this.telegram.setChatAdministratorCustomTitle(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#setchatphoto
       */
      setChatPhoto(...args) {
        this.assert(this.chat, "setChatPhoto");
        return this.telegram.setChatPhoto(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#deletechatphoto
       */
      deleteChatPhoto(...args) {
        this.assert(this.chat, "deleteChatPhoto");
        return this.telegram.deleteChatPhoto(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#setchattitle
       */
      setChatTitle(...args) {
        this.assert(this.chat, "setChatTitle");
        return this.telegram.setChatTitle(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#setchatdescription
       */
      setChatDescription(...args) {
        this.assert(this.chat, "setChatDescription");
        return this.telegram.setChatDescription(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#pinchatmessage
       */
      pinChatMessage(...args) {
        this.assert(this.chat, "pinChatMessage");
        return this.telegram.pinChatMessage(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#unpinchatmessage
       */
      unpinChatMessage(...args) {
        this.assert(this.chat, "unpinChatMessage");
        return this.telegram.unpinChatMessage(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#unpinallchatmessages
       */
      unpinAllChatMessages(...args) {
        this.assert(this.chat, "unpinAllChatMessages");
        return this.telegram.unpinAllChatMessages(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#leavechat
       */
      leaveChat(...args) {
        this.assert(this.chat, "leaveChat");
        return this.telegram.leaveChat(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#setchatpermissions
       */
      setChatPermissions(...args) {
        this.assert(this.chat, "setChatPermissions");
        return this.telegram.setChatPermissions(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#getchatadministrators
       */
      getChatAdministrators(...args) {
        this.assert(this.chat, "getChatAdministrators");
        return this.telegram.getChatAdministrators(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#getchatmember
       */
      getChatMember(...args) {
        this.assert(this.chat, "getChatMember");
        return this.telegram.getChatMember(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#getchatmembercount
       */
      getChatMembersCount(...args) {
        this.assert(this.chat, "getChatMembersCount");
        return this.telegram.getChatMembersCount(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#setpassportdataerrors
       */
      setPassportDataErrors(errors) {
        this.assert(this.from, "setPassportDataErrors");
        return this.telegram.setPassportDataErrors(this.from.id, errors);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendphoto
       */
      sendPhoto(photo, extra) {
        this.assert(this.chat, "sendPhoto");
        return this.telegram.sendPhoto(this.chat.id, photo, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendphoto
       */
      replyWithPhoto(...args) {
        return this.sendPhoto(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendmediagroup
       */
      sendMediaGroup(media, extra) {
        this.assert(this.chat, "sendMediaGroup");
        return this.telegram.sendMediaGroup(this.chat.id, media, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendmediagroup
       */
      replyWithMediaGroup(...args) {
        return this.sendMediaGroup(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendaudio
       */
      sendAudio(audio, extra) {
        this.assert(this.chat, "sendAudio");
        return this.telegram.sendAudio(this.chat.id, audio, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendaudio
       */
      replyWithAudio(...args) {
        return this.sendAudio(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#senddice
       */
      sendDice(extra) {
        this.assert(this.chat, "sendDice");
        return this.telegram.sendDice(this.chat.id, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#senddice
       */
      replyWithDice(...args) {
        return this.sendDice(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#senddocument
       */
      sendDocument(document2, extra) {
        this.assert(this.chat, "sendDocument");
        return this.telegram.sendDocument(this.chat.id, document2, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#senddocument
       */
      replyWithDocument(...args) {
        return this.sendDocument(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendsticker
       */
      sendSticker(sticker, extra) {
        this.assert(this.chat, "sendSticker");
        return this.telegram.sendSticker(this.chat.id, sticker, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendsticker
       */
      replyWithSticker(...args) {
        return this.sendSticker(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendvideo
       */
      sendVideo(video, extra) {
        this.assert(this.chat, "sendVideo");
        return this.telegram.sendVideo(this.chat.id, video, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendvideo
       */
      replyWithVideo(...args) {
        return this.sendVideo(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendanimation
       */
      sendAnimation(animation, extra) {
        this.assert(this.chat, "sendAnimation");
        return this.telegram.sendAnimation(this.chat.id, animation, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendanimation
       */
      replyWithAnimation(...args) {
        return this.sendAnimation(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendvideonote
       */
      sendVideoNote(videoNote, extra) {
        this.assert(this.chat, "sendVideoNote");
        return this.telegram.sendVideoNote(this.chat.id, videoNote, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendvideonote
       */
      replyWithVideoNote(...args) {
        return this.sendVideoNote(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendinvoice
       */
      sendInvoice(invoice, extra) {
        this.assert(this.chat, "sendInvoice");
        return this.telegram.sendInvoice(this.chat.id, invoice, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendinvoice
       */
      replyWithInvoice(...args) {
        return this.sendInvoice(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendgame
       */
      sendGame(game, extra) {
        this.assert(this.chat, "sendGame");
        return this.telegram.sendGame(this.chat.id, game, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendgame
       */
      replyWithGame(...args) {
        return this.sendGame(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendvoice
       */
      sendVoice(voice, extra) {
        this.assert(this.chat, "sendVoice");
        return this.telegram.sendVoice(this.chat.id, voice, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendvoice
       */
      replyWithVoice(...args) {
        return this.sendVoice(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendpoll
       */
      sendPoll(poll, options, extra) {
        this.assert(this.chat, "sendPoll");
        return this.telegram.sendPoll(this.chat.id, poll, options, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendpoll
       */
      replyWithPoll(...args) {
        return this.sendPoll(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendpoll
       */
      sendQuiz(quiz, options, extra) {
        this.assert(this.chat, "sendQuiz");
        return this.telegram.sendQuiz(this.chat.id, quiz, options, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendpoll
       */
      replyWithQuiz(...args) {
        return this.sendQuiz(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#stoppoll
       */
      stopPoll(...args) {
        this.assert(this.chat, "stopPoll");
        return this.telegram.stopPoll(this.chat.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendchataction
       */
      sendChatAction(action, extra) {
        this.assert(this.chat, "sendChatAction");
        return this.telegram.sendChatAction(this.chat.id, action, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendchataction
       *
       * Sends the sendChatAction request repeatedly, with a delay between requests,
       * as long as the provided callback function is being processed.
       *
       * The sendChatAction errors should be ignored, because the goal is the actual long process completing and performing an action.
       *
       * @param action - chat action type.
       * @param callback - a function to run along with the chat action.
       * @param extra - extra parameters for sendChatAction.
       * @param {number} [extra.intervalDuration=8000] - The duration (in milliseconds) between subsequent sendChatAction requests.
       */
      async persistentChatAction(action, callback, { intervalDuration, ...extra } = {}) {
        await this.sendChatAction(action, { ...extra });
        const timer = setInterval(() => this.sendChatAction(action, { ...extra }).catch((err) => {
          debug3("Ignored error while persisting sendChatAction:", err);
        }), intervalDuration !== null && intervalDuration !== void 0 ? intervalDuration : 4e3);
        try {
          await callback();
        } finally {
          clearInterval(timer);
        }
      }
      /**
       * @deprecated use {@link Context.sendChatAction} instead
       * @see https://core.telegram.org/bots/api#sendchataction
       */
      replyWithChatAction(...args) {
        return this.sendChatAction(...args);
      }
      /**
       * Shorthand for {@link Telegram.setMessageReaction}
       * @param reaction An emoji or custom_emoji_id to set as reaction to current message. Leave empty to remove reactions.
       * @param is_big Pass True to set the reaction with a big animation
       */
      react(reaction, is_big) {
        this.assert(this.chat, "setMessageReaction");
        this.assert(this.msgId, "setMessageReaction");
        const emojis = reaction ? Array.isArray(reaction) ? reaction : [reaction] : void 0;
        const reactions = emojis === null || emojis === void 0 ? void 0 : emojis.map((emoji) => typeof emoji === "string" ? reactions_1.Digit.has(emoji[0]) ? { type: "custom_emoji", custom_emoji_id: emoji } : { type: "emoji", emoji } : emoji);
        return this.telegram.setMessageReaction(this.chat.id, this.msgId, reactions, is_big);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendlocation
       */
      sendLocation(latitude, longitude, extra) {
        this.assert(this.chat, "sendLocation");
        return this.telegram.sendLocation(this.chat.id, latitude, longitude, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendlocation
       */
      replyWithLocation(...args) {
        return this.sendLocation(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendvenue
       */
      sendVenue(latitude, longitude, title2, address, extra) {
        this.assert(this.chat, "sendVenue");
        return this.telegram.sendVenue(this.chat.id, latitude, longitude, title2, address, { message_thread_id: getThreadId(this), ...extra });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendvenue
       */
      replyWithVenue(...args) {
        return this.sendVenue(...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#sendcontact
       */
      sendContact(phoneNumber, firstName, extra) {
        this.assert(this.chat, "sendContact");
        return this.telegram.sendContact(this.chat.id, phoneNumber, firstName, {
          message_thread_id: getThreadId(this),
          ...extra
        });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendcontact
       */
      replyWithContact(...args) {
        return this.sendContact(...args);
      }
      /**
       * @deprecated use {@link Telegram.getStickerSet}
       * @see https://core.telegram.org/bots/api#getstickerset
       */
      getStickerSet(setName) {
        return this.telegram.getStickerSet(setName);
      }
      /**
       * @see https://core.telegram.org/bots/api#setchatstickerset
       */
      setChatStickerSet(setName) {
        this.assert(this.chat, "setChatStickerSet");
        return this.telegram.setChatStickerSet(this.chat.id, setName);
      }
      /**
       * @see https://core.telegram.org/bots/api#deletechatstickerset
       */
      deleteChatStickerSet() {
        this.assert(this.chat, "deleteChatStickerSet");
        return this.telegram.deleteChatStickerSet(this.chat.id);
      }
      /**
       * Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this
       * to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a
       * ForumTopic object.
       *
       * @see https://core.telegram.org/bots/api#createforumtopic
       */
      createForumTopic(...args) {
        this.assert(this.chat, "createForumTopic");
        return this.telegram.createForumTopic(this.chat.id, ...args);
      }
      /**
       * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in
       * the chat for this to work and must have can_manage_topics administrator rights, unless it is the creator of the
       * topic. Returns True on success.
       *
       * @see https://core.telegram.org/bots/api#editforumtopic
       */
      editForumTopic(extra) {
        var _a;
        this.assert(this.chat, "editForumTopic");
        this.assert((_a = this.message) === null || _a === void 0 ? void 0 : _a.message_thread_id, "editForumTopic");
        return this.telegram.editForumTopic(this.chat.id, this.message.message_thread_id, extra);
      }
      /**
       * Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat
       * for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic.
       * Returns True on success.
       *
       * @see https://core.telegram.org/bots/api#closeforumtopic
       */
      closeForumTopic() {
        var _a;
        this.assert(this.chat, "closeForumTopic");
        this.assert((_a = this.message) === null || _a === void 0 ? void 0 : _a.message_thread_id, "closeForumTopic");
        return this.telegram.closeForumTopic(this.chat.id, this.message.message_thread_id);
      }
      /**
       * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat
       * for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic.
       * Returns True on success.
       *
       * @see https://core.telegram.org/bots/api#reopenforumtopic
       */
      reopenForumTopic() {
        var _a;
        this.assert(this.chat, "reopenForumTopic");
        this.assert((_a = this.message) === null || _a === void 0 ? void 0 : _a.message_thread_id, "reopenForumTopic");
        return this.telegram.reopenForumTopic(this.chat.id, this.message.message_thread_id);
      }
      /**
       * Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an
       * administrator in the chat for this to work and must have the can_delete_messages administrator rights.
       * Returns True on success.
       *
       * @see https://core.telegram.org/bots/api#deleteforumtopic
       */
      deleteForumTopic() {
        var _a;
        this.assert(this.chat, "deleteForumTopic");
        this.assert((_a = this.message) === null || _a === void 0 ? void 0 : _a.message_thread_id, "deleteForumTopic");
        return this.telegram.deleteForumTopic(this.chat.id, this.message.message_thread_id);
      }
      /**
       * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat
       * for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
       *
       * @see https://core.telegram.org/bots/api#unpinallforumtopicmessages
       */
      unpinAllForumTopicMessages() {
        var _a;
        this.assert(this.chat, "unpinAllForumTopicMessages");
        this.assert((_a = this.message) === null || _a === void 0 ? void 0 : _a.message_thread_id, "unpinAllForumTopicMessages");
        return this.telegram.unpinAllForumTopicMessages(this.chat.id, this.message.message_thread_id);
      }
      /**
       * Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator
       * in the chat for this to work and must have can_manage_topics administrator rights. Returns True on success.
       *
       * @see https://core.telegram.org/bots/api#editgeneralforumtopic
       */
      editGeneralForumTopic(name) {
        this.assert(this.chat, "editGeneralForumTopic");
        return this.telegram.editGeneralForumTopic(this.chat.id, name);
      }
      /**
       * Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the
       * chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
       *
       * @see https://core.telegram.org/bots/api#closegeneralforumtopic
       */
      closeGeneralForumTopic() {
        this.assert(this.chat, "closeGeneralForumTopic");
        return this.telegram.closeGeneralForumTopic(this.chat.id);
      }
      /**
       * Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in
       * the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically
       * unhidden if it was hidden. Returns True on success.
       *
       * @see https://core.telegram.org/bots/api#reopengeneralforumtopic
       */
      reopenGeneralForumTopic() {
        this.assert(this.chat, "reopenGeneralForumTopic");
        return this.telegram.reopenGeneralForumTopic(this.chat.id);
      }
      /**
       * Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat
       * for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed
       * if it was open. Returns True on success.
       *
       * @see https://core.telegram.org/bots/api#hidegeneralforumtopic
       */
      hideGeneralForumTopic() {
        this.assert(this.chat, "hideGeneralForumTopic");
        return this.telegram.hideGeneralForumTopic(this.chat.id);
      }
      /**
       * Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the
       * chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
       *
       * @see https://core.telegram.org/bots/api#unhidegeneralforumtopic
       */
      unhideGeneralForumTopic() {
        this.assert(this.chat, "unhideGeneralForumTopic");
        return this.telegram.unhideGeneralForumTopic(this.chat.id);
      }
      /**
       * Use this method to clear the list of pinned messages in a General forum topic.
       * The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator
       * right in the supergroup.
       *
       * @param chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
       *
       * @see https://core.telegram.org/bots/api#unpinallgeneralforumtopicmessages
       */
      unpinAllGeneralForumTopicMessages() {
        this.assert(this.chat, "unpinAllGeneralForumTopicMessages");
        return this.telegram.unpinAllGeneralForumTopicMessages(this.chat.id);
      }
      /**
       * @deprecated use {@link Telegram.setStickerPositionInSet}
       * @see https://core.telegram.org/bots/api#setstickerpositioninset
       */
      setStickerPositionInSet(sticker, position) {
        return this.telegram.setStickerPositionInSet(sticker, position);
      }
      /**
       * @deprecated use {@link Telegram.setStickerSetThumbnail}
       * @see https://core.telegram.org/bots/api#setstickersetthumbnail
       */
      setStickerSetThumb(...args) {
        return this.telegram.setStickerSetThumbnail(...args);
      }
      setStickerSetThumbnail(...args) {
        return this.telegram.setStickerSetThumbnail(...args);
      }
      setStickerMaskPosition(...args) {
        return this.telegram.setStickerMaskPosition(...args);
      }
      setStickerKeywords(...args) {
        return this.telegram.setStickerKeywords(...args);
      }
      setStickerEmojiList(...args) {
        return this.telegram.setStickerEmojiList(...args);
      }
      deleteStickerSet(...args) {
        return this.telegram.deleteStickerSet(...args);
      }
      setStickerSetTitle(...args) {
        return this.telegram.setStickerSetTitle(...args);
      }
      setCustomEmojiStickerSetThumbnail(...args) {
        return this.telegram.setCustomEmojiStickerSetThumbnail(...args);
      }
      /**
       * @deprecated use {@link Telegram.deleteStickerFromSet}
       * @see https://core.telegram.org/bots/api#deletestickerfromset
       */
      deleteStickerFromSet(sticker) {
        return this.telegram.deleteStickerFromSet(sticker);
      }
      /**
       * @see https://core.telegram.org/bots/api#uploadstickerfile
       */
      uploadStickerFile(...args) {
        this.assert(this.from, "uploadStickerFile");
        return this.telegram.uploadStickerFile(this.from.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#createnewstickerset
       */
      createNewStickerSet(...args) {
        this.assert(this.from, "createNewStickerSet");
        return this.telegram.createNewStickerSet(this.from.id, ...args);
      }
      /**
       * @see https://core.telegram.org/bots/api#addstickertoset
       */
      addStickerToSet(...args) {
        this.assert(this.from, "addStickerToSet");
        return this.telegram.addStickerToSet(this.from.id, ...args);
      }
      /**
       * @deprecated use {@link Telegram.getMyCommands}
       * @see https://core.telegram.org/bots/api#getmycommands
       */
      getMyCommands() {
        return this.telegram.getMyCommands();
      }
      /**
       * @deprecated use {@link Telegram.setMyCommands}
       * @see https://core.telegram.org/bots/api#setmycommands
       */
      setMyCommands(commands) {
        return this.telegram.setMyCommands(commands);
      }
      /**
       * @deprecated use {@link Context.replyWithMarkdownV2}
       * @see https://core.telegram.org/bots/api#sendmessage
       */
      replyWithMarkdown(markdown, extra) {
        return this.reply(markdown, { parse_mode: "Markdown", ...extra });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendmessage
       */
      replyWithMarkdownV2(markdown, extra) {
        return this.reply(markdown, { parse_mode: "MarkdownV2", ...extra });
      }
      /**
       * @see https://core.telegram.org/bots/api#sendmessage
       */
      replyWithHTML(html, extra) {
        return this.reply(html, { parse_mode: "HTML", ...extra });
      }
      /**
       * @see https://core.telegram.org/bots/api#deletemessage
       */
      deleteMessage(messageId) {
        this.assert(this.chat, "deleteMessage");
        if (typeof messageId !== "undefined")
          return this.telegram.deleteMessage(this.chat.id, messageId);
        this.assert(this.msgId, "deleteMessage");
        return this.telegram.deleteMessage(this.chat.id, this.msgId);
      }
      /**
       * Context-aware shorthand for {@link Telegram.deleteMessages}
       * @param messageIds Identifiers of 1-100 messages to delete. See deleteMessage for limitations on which messages can be deleted
       */
      deleteMessages(messageIds) {
        this.assert(this.chat, "deleteMessages");
        return this.telegram.deleteMessages(this.chat.id, messageIds);
      }
      /**
       * @see https://core.telegram.org/bots/api#forwardmessage
       */
      forwardMessage(chatId, extra) {
        this.assert(this.chat, "forwardMessage");
        this.assert(this.msgId, "forwardMessage");
        return this.telegram.forwardMessage(chatId, this.chat.id, this.msgId, extra);
      }
      /**
       * Shorthand for {@link Telegram.forwardMessages}
       * @see https://core.telegram.org/bots/api#forwardmessages
       */
      forwardMessages(chatId, messageIds, extra) {
        this.assert(this.chat, "forwardMessages");
        return this.telegram.forwardMessages(chatId, this.chat.id, messageIds, extra);
      }
      /**
       * @see https://core.telegram.org/bots/api#copymessage
       */
      copyMessage(chatId, extra) {
        this.assert(this.chat, "copyMessage");
        this.assert(this.msgId, "copyMessage");
        return this.telegram.copyMessage(chatId, this.chat.id, this.msgId, extra);
      }
      /**
       * Context-aware shorthand for {@link Telegram.copyMessages}
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param messageIds Identifiers of 1-100 messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order.
       */
      copyMessages(chatId, messageIds, extra) {
        var _a;
        this.assert(this.chat, "copyMessages");
        return this.telegram.copyMessages(chatId, (_a = this.chat) === null || _a === void 0 ? void 0 : _a.id, messageIds, extra);
      }
      /**
       * @see https://core.telegram.org/bots/api#approvechatjoinrequest
       */
      approveChatJoinRequest(userId) {
        this.assert(this.chat, "approveChatJoinRequest");
        return this.telegram.approveChatJoinRequest(this.chat.id, userId);
      }
      /**
       * @see https://core.telegram.org/bots/api#declinechatjoinrequest
       */
      declineChatJoinRequest(userId) {
        this.assert(this.chat, "declineChatJoinRequest");
        return this.telegram.declineChatJoinRequest(this.chat.id, userId);
      }
      /**
       * @see https://core.telegram.org/bots/api#banchatsenderchat
       */
      banChatSenderChat(senderChatId) {
        this.assert(this.chat, "banChatSenderChat");
        return this.telegram.banChatSenderChat(this.chat.id, senderChatId);
      }
      /**
       * @see https://core.telegram.org/bots/api#unbanchatsenderchat
       */
      unbanChatSenderChat(senderChatId) {
        this.assert(this.chat, "unbanChatSenderChat");
        return this.telegram.unbanChatSenderChat(this.chat.id, senderChatId);
      }
      /**
       * Use this method to change the bot's menu button in the current private chat. Returns true on success.
       * @see https://core.telegram.org/bots/api#setchatmenubutton
       */
      setChatMenuButton(menuButton) {
        this.assert(this.chat, "setChatMenuButton");
        return this.telegram.setChatMenuButton({ chatId: this.chat.id, menuButton });
      }
      /**
       * Use this method to get the current value of the bot's menu button in the current private chat. Returns MenuButton on success.
       * @see https://core.telegram.org/bots/api#getchatmenubutton
       */
      getChatMenuButton() {
        this.assert(this.chat, "getChatMenuButton");
        return this.telegram.getChatMenuButton({ chatId: this.chat.id });
      }
      /**
       * @see https://core.telegram.org/bots/api#setmydefaultadministratorrights
       */
      setMyDefaultAdministratorRights(extra) {
        return this.telegram.setMyDefaultAdministratorRights(extra);
      }
      /**
       * @see https://core.telegram.org/bots/api#getmydefaultadministratorrights
       */
      getMyDefaultAdministratorRights(extra) {
        return this.telegram.getMyDefaultAdministratorRights(extra);
      }
    };
    exports.Context = Context;
    exports.default = Context;
    var Msg = {
      isAccessible() {
        return "date" in this && this.date !== 0;
      },
      has(...keys) {
        return keys.some((key) => (
          // @ts-expect-error TS doesn't understand key
          this[key] != void 0
        ));
      }
    };
    function getMessageFromAnySource(ctx) {
      var _a, _b, _c, _d, _e;
      const msg = (_e = (_d = (_b = (_a = ctx.message) !== null && _a !== void 0 ? _a : ctx.editedMessage) !== null && _b !== void 0 ? _b : (_c = ctx.callbackQuery) === null || _c === void 0 ? void 0 : _c.message) !== null && _d !== void 0 ? _d : ctx.channelPost) !== null && _e !== void 0 ? _e : ctx.editedChannelPost;
      if (msg)
        return Object.assign(Object.create(Msg), msg);
    }
    __name(getMessageFromAnySource, "getMessageFromAnySource");
    function getUserFromAnySource(ctx) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
      if (ctx.callbackQuery)
        return ctx.callbackQuery.from;
      const msg = ctx.msg;
      if (msg === null || msg === void 0 ? void 0 : msg.has("from"))
        return msg.from;
      return (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = ctx.inlineQuery) !== null && _a !== void 0 ? _a : ctx.shippingQuery) !== null && _b !== void 0 ? _b : ctx.preCheckoutQuery) !== null && _c !== void 0 ? _c : ctx.chosenInlineResult) !== null && _d !== void 0 ? _d : ctx.chatMember) !== null && _e !== void 0 ? _e : ctx.myChatMember) !== null && _f !== void 0 ? _f : ctx.chatJoinRequest) === null || _g === void 0 ? void 0 : _g.from) !== null && _h !== void 0 ? _h : (_m = (_k = (_j = ctx.messageReaction) !== null && _j !== void 0 ? _j : ctx.pollAnswer) !== null && _k !== void 0 ? _k : (_l = ctx.chatBoost) === null || _l === void 0 ? void 0 : _l.boost.source) === null || _m === void 0 ? void 0 : _m.user;
    }
    __name(getUserFromAnySource, "getUserFromAnySource");
    function getMsgIdFromAnySource(ctx) {
      var _a, _b;
      const msg = getMessageFromAnySource(ctx);
      return (_b = (_a = msg !== null && msg !== void 0 ? msg : ctx.messageReaction) !== null && _a !== void 0 ? _a : ctx.messageReactionCount) === null || _b === void 0 ? void 0 : _b.message_id;
    }
    __name(getMsgIdFromAnySource, "getMsgIdFromAnySource");
    function getTextAndEntitiesFromAnySource(ctx) {
      const msg = ctx.msg;
      let text, entities;
      if (msg) {
        if ("text" in msg)
          text = msg.text, entities = msg.entities;
        else if ("caption" in msg)
          text = msg.caption, entities = msg.caption_entities;
        else if ("game" in msg)
          text = msg.game.text, entities = msg.game.text_entities;
      } else if (ctx.poll)
        text = ctx.poll.explanation, entities = ctx.poll.explanation_entities;
      return [text, entities];
    }
    __name(getTextAndEntitiesFromAnySource, "getTextAndEntitiesFromAnySource");
    var getThreadId = /* @__PURE__ */ __name((ctx) => {
      const msg = ctx.msg;
      return (msg === null || msg === void 0 ? void 0 : msg.isAccessible()) ? msg.is_topic_message ? msg.message_thread_id : void 0 : void 0;
    }, "getThreadId");
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/filters.js
var require_filters = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/filters.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.allOf = exports.anyOf = exports.callbackQuery = exports.editedChannelPost = exports.channelPost = exports.editedMessage = exports.message = void 0;
    var message = /* @__PURE__ */ __name((...keys) => (update) => {
      if (!("message" in update))
        return false;
      for (const key of keys) {
        if (!(key in update.message))
          return false;
      }
      return true;
    }, "message");
    exports.message = message;
    var editedMessage = /* @__PURE__ */ __name((...keys) => (update) => {
      if (!("edited_message" in update))
        return false;
      for (const key of keys) {
        if (!(key in update.edited_message))
          return false;
      }
      return true;
    }, "editedMessage");
    exports.editedMessage = editedMessage;
    var channelPost = /* @__PURE__ */ __name((...keys) => (update) => {
      if (!("channel_post" in update))
        return false;
      for (const key of keys) {
        if (!(key in update.channel_post))
          return false;
      }
      return true;
    }, "channelPost");
    exports.channelPost = channelPost;
    var editedChannelPost = /* @__PURE__ */ __name((...keys) => (update) => {
      if (!("edited_channel_post" in update))
        return false;
      for (const key of keys) {
        if (!(key in update.edited_channel_post))
          return false;
      }
      return true;
    }, "editedChannelPost");
    exports.editedChannelPost = editedChannelPost;
    var callbackQuery = /* @__PURE__ */ __name((...keys) => (update) => {
      if (!("callback_query" in update))
        return false;
      for (const key of keys) {
        if (!(key in update.callback_query))
          return false;
      }
      return true;
    }, "callbackQuery");
    exports.callbackQuery = callbackQuery;
    var anyOf = /* @__PURE__ */ __name((...filters) => (update) => {
      for (const filter of filters)
        if (filter(update))
          return true;
      return false;
    }, "anyOf");
    exports.anyOf = anyOf;
    var allOf = /* @__PURE__ */ __name((...filters) => (update) => {
      for (const filter of filters)
        if (!filter(update))
          return false;
      return true;
    }, "allOf");
    exports.allOf = allOf;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/helpers/args.js
var require_args = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/helpers/args.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.argsParser = void 0;
    var SINGLE_QUOTE = "'";
    var DOUBLE_QUOTE = '"';
    function argsParser(str, entities = [], entityOffset = 0) {
      const mentions = {};
      for (const entity of entities)
        if (entity.type === "text_mention" || entity.type === "text_link")
          mentions[entity.offset - entityOffset] = entity.length;
      const args = [];
      let done = 0;
      let inside = void 0;
      let buf = "";
      function flush(to) {
        if (done !== to)
          args.push(buf + str.slice(done, to)), inside = void 0;
        buf = "";
        done = to + 1;
      }
      __name(flush, "flush");
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const mention = mentions[i];
        if (mention) {
          flush(i);
          done--;
          i += mention;
          flush(i);
        } else if (char === SINGLE_QUOTE || char === DOUBLE_QUOTE)
          if (inside)
            if (inside === char)
              flush(i);
            else
              continue;
          else
            flush(i), inside = char;
        else if (char === " ")
          if (inside)
            continue;
          else
            flush(i);
        else if (char === "\n")
          flush(i);
        else if (char === "\\")
          buf += str.slice(done, i), done = ++i;
        else
          continue;
      }
      if (done < str.length)
        flush(str.length);
      return args;
    }
    __name(argsParser, "argsParser");
    exports.argsParser = argsParser;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/composer.js
var require_composer = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/composer.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Composer = void 0;
    var context_1 = __importDefault(require_context());
    var filters_1 = require_filters();
    var args_1 = require_args();
    function always(x) {
      return () => x;
    }
    __name(always, "always");
    var anoop = always(Promise.resolve());
    var Composer4 = class _Composer {
      static {
        __name(this, "Composer");
      }
      constructor(...fns) {
        this.handler = _Composer.compose(fns);
      }
      /**
       * Registers a middleware.
       */
      use(...fns) {
        this.handler = _Composer.compose([this.handler, ...fns]);
        return this;
      }
      /**
       * Registers middleware for handling updates
       * matching given type guard function.
       * @deprecated use `Composer::on`
       */
      guard(guardFn, ...fns) {
        return this.use(_Composer.guard(guardFn, ...fns));
      }
      on(filters, ...fns) {
        return this.use(_Composer.on(filters, ...fns));
      }
      /**
       * Registers middleware for handling matching text messages.
       */
      hears(triggers, ...fns) {
        return this.use(_Composer.hears(triggers, ...fns));
      }
      /**
       * Registers middleware for handling specified commands.
       */
      command(command, ...fns) {
        return this.use(_Composer.command(command, ...fns));
      }
      /**
       * Registers middleware for handling matching callback queries.
       */
      action(triggers, ...fns) {
        return this.use(_Composer.action(triggers, ...fns));
      }
      /**
       * Registers middleware for handling matching inline queries.
       */
      inlineQuery(triggers, ...fns) {
        return this.use(_Composer.inlineQuery(triggers, ...fns));
      }
      /**
       * Registers middleware for handling game queries
       */
      gameQuery(...fns) {
        return this.use(_Composer.gameQuery(...fns));
      }
      reaction(reaction, ...fns) {
        return this.use(_Composer.reaction(reaction, ...fns));
      }
      /**
       * Registers middleware for dropping matching updates.
       */
      drop(predicate) {
        return this.use(_Composer.drop(predicate));
      }
      /** @deprecated use `Composer::drop` */
      filter(predicate) {
        return this.use(_Composer.filter(predicate));
      }
      entity(predicate, ...fns) {
        return this.use(_Composer.entity(predicate, ...fns));
      }
      email(email, ...fns) {
        return this.use(_Composer.email(email, ...fns));
      }
      url(url, ...fns) {
        return this.use(_Composer.url(url, ...fns));
      }
      textLink(link3, ...fns) {
        return this.use(_Composer.textLink(link3, ...fns));
      }
      textMention(mention, ...fns) {
        return this.use(_Composer.textMention(mention, ...fns));
      }
      mention(mention, ...fns) {
        return this.use(_Composer.mention(mention, ...fns));
      }
      phone(number, ...fns) {
        return this.use(_Composer.phone(number, ...fns));
      }
      hashtag(hashtag, ...fns) {
        return this.use(_Composer.hashtag(hashtag, ...fns));
      }
      cashtag(cashtag, ...fns) {
        return this.use(_Composer.cashtag(cashtag, ...fns));
      }
      spoiler(text, ...fns) {
        return this.use(_Composer.spoiler(text, ...fns));
      }
      /**
       * Registers a middleware for handling /start
       */
      start(...fns) {
        const handler = _Composer.compose(fns);
        return this.command("start", (ctx, next) => handler(Object.assign(ctx, { startPayload: ctx.payload }), next));
      }
      /**
       * Registers a middleware for handling /help
       */
      help(...fns) {
        return this.command("help", ...fns);
      }
      /**
       * Registers a middleware for handling /settings
       */
      settings(...fns) {
        return this.command("settings", ...fns);
      }
      middleware() {
        return this.handler;
      }
      static reply(...args) {
        return (ctx) => ctx.reply(...args);
      }
      static catch(errorHandler, ...fns) {
        const handler = _Composer.compose(fns);
        return (ctx, next) => Promise.resolve(handler(ctx, next)).catch((err) => errorHandler(err, ctx));
      }
      /**
       * Generates middleware that runs in the background.
       */
      static fork(middleware) {
        const handler = _Composer.unwrap(middleware);
        return async (ctx, next) => {
          await Promise.all([handler(ctx, anoop), next()]);
        };
      }
      static tap(middleware) {
        const handler = _Composer.unwrap(middleware);
        return (ctx, next) => Promise.resolve(handler(ctx, anoop)).then(() => next());
      }
      /**
       * Generates middleware that gives up control to the next middleware.
       */
      static passThru() {
        return (ctx, next) => next();
      }
      static lazy(factoryFn) {
        if (typeof factoryFn !== "function") {
          throw new Error("Argument must be a function");
        }
        return (ctx, next) => Promise.resolve(factoryFn(ctx)).then((middleware) => _Composer.unwrap(middleware)(ctx, next));
      }
      static log(logFn = console.log) {
        return (ctx, next) => {
          logFn(JSON.stringify(ctx.update, null, 2));
          return next();
        };
      }
      /**
       * @param trueMiddleware middleware to run if the predicate returns true
       * @param falseMiddleware middleware to run if the predicate returns false
       */
      static branch(predicate, trueMiddleware, falseMiddleware) {
        if (typeof predicate !== "function") {
          return _Composer.unwrap(predicate ? trueMiddleware : falseMiddleware);
        }
        return _Composer.lazy((ctx) => Promise.resolve(predicate(ctx)).then((value) => value ? trueMiddleware : falseMiddleware));
      }
      /**
       * Generates optional middleware.
       * @param predicate predicate to decide on a context object whether to run the middleware
       * @param fns middleware to run if the predicate returns true
       */
      static optional(predicate, ...fns) {
        return _Composer.branch(predicate, _Composer.compose(fns), _Composer.passThru());
      }
      /** @deprecated use `Composer.drop` */
      static filter(predicate) {
        return _Composer.branch(predicate, _Composer.passThru(), anoop);
      }
      /**
       * Generates middleware for dropping matching updates.
       */
      static drop(predicate) {
        return _Composer.branch(predicate, anoop, _Composer.passThru());
      }
      static dispatch(routeFn, handlers) {
        return _Composer.lazy((ctx) => Promise.resolve(routeFn(ctx)).then((value) => handlers[value]));
      }
      // EXPLANATION FOR THE ts-expect-error ANNOTATIONS
      // The annotations around function invocations with `...fns` are there
      // whenever we perform validation logic that the flow analysis of TypeScript
      // cannot comprehend. We always make sure that the middleware functions are
      // only invoked with properly constrained context objects, but this cannot be
      // determined automatically.
      /**
       * Generates optional middleware based on a predicate that only operates on `ctx.update`.
       *
       * Example:
       * ```ts
       * import { Composer, Update } from 'telegraf'
       *
       * const predicate = (u): u is Update.MessageUpdate => 'message' in u
       * const middleware = Composer.guard(predicate, (ctx) => {
       *   const message = ctx.update.message
       * })
       * ```
       *
       * Note that `Composer.on('message')` is preferred over this.
       *
       * @param guardFn predicate to decide whether to run the middleware based on the `ctx.update` object
       * @param fns middleware to run if the predicate returns true
       * @see `Composer.optional` for a more generic version of this method that allows the predicate to operate on `ctx` itself
       * @deprecated use `Composer.on`
       */
      static guard(guardFn, ...fns) {
        return _Composer.optional(
          (ctx) => guardFn(ctx.update),
          ...fns
        );
      }
      static on(updateType, ...fns) {
        const filters = Array.isArray(updateType) ? updateType : [updateType];
        const predicate = /* @__PURE__ */ __name((update) => {
          for (const filter of filters) {
            if (
              // TODO: this should change to === 'function' once TS bug is fixed
              // https://github.com/microsoft/TypeScript/pull/51502
              typeof filter !== "string" ? (
                // filter is a type guard
                filter(update)
              ) : (
                // check if filter is the update type
                filter in update || // check if filter is the msg type
                // TODO: remove in v5!
                "message" in update && filter in update.message
              )
            ) {
              return true;
            }
          }
          return false;
        }, "predicate");
        return _Composer.optional((ctx) => predicate(ctx.update), ...fns);
      }
      static entity(predicate, ...fns) {
        if (typeof predicate !== "function") {
          const entityTypes = normaliseTextArguments(predicate);
          return _Composer.entity(({ type }) => entityTypes.includes(type), ...fns);
        }
        return _Composer.optional(
          (ctx) => {
            var _a;
            const msg = (_a = ctx.message) !== null && _a !== void 0 ? _a : ctx.channelPost;
            if (msg === void 0) {
              return false;
            }
            const text = getText(msg);
            const entities = getEntities(msg);
            if (text === void 0)
              return false;
            return entities.some((entity) => predicate(entity, text.substring(entity.offset, entity.offset + entity.length), ctx));
          },
          ...fns
        );
      }
      static entityText(entityType, predicate, ...fns) {
        if (fns.length === 0) {
          return Array.isArray(predicate) ? _Composer.entity(entityType, ...predicate) : _Composer.entity(entityType, predicate);
        }
        const triggers = normaliseTriggers(predicate);
        return _Composer.entity(
          ({ type }, value, ctx) => {
            if (type !== entityType) {
              return false;
            }
            for (const trigger of triggers) {
              if (ctx.match = trigger(value, ctx)) {
                return true;
              }
            }
            return false;
          },
          ...fns
        );
      }
      static email(email, ...fns) {
        return _Composer.entityText("email", email, ...fns);
      }
      static phone(number, ...fns) {
        return _Composer.entityText("phone_number", number, ...fns);
      }
      static url(url, ...fns) {
        return _Composer.entityText("url", url, ...fns);
      }
      static textLink(link3, ...fns) {
        return _Composer.entityText("text_link", link3, ...fns);
      }
      static textMention(mention, ...fns) {
        return _Composer.entityText("text_mention", mention, ...fns);
      }
      static mention(mention, ...fns) {
        return _Composer.entityText("mention", normaliseTextArguments(mention, "@"), ...fns);
      }
      static hashtag(hashtag, ...fns) {
        return _Composer.entityText("hashtag", normaliseTextArguments(hashtag, "#"), ...fns);
      }
      static cashtag(cashtag, ...fns) {
        return _Composer.entityText("cashtag", normaliseTextArguments(cashtag, "$"), ...fns);
      }
      static spoiler(text, ...fns) {
        return _Composer.entityText("spoiler", text, ...fns);
      }
      static match(triggers, ...fns) {
        const handler = _Composer.compose(fns);
        return (ctx, next) => {
          var _a, _b, _c, _d;
          const text = (_c = (_b = (_a = getText(ctx.message)) !== null && _a !== void 0 ? _a : getText(ctx.channelPost)) !== null && _b !== void 0 ? _b : getText(ctx.callbackQuery)) !== null && _c !== void 0 ? _c : (_d = ctx.inlineQuery) === null || _d === void 0 ? void 0 : _d.query;
          if (text === void 0)
            return next();
          for (const trigger of triggers) {
            const match = trigger(text, ctx);
            if (match)
              return handler(Object.assign(ctx, { match }), next);
          }
          return next();
        };
      }
      /**
       * Generates middleware for handling matching text messages.
       */
      static hears(triggers, ...fns) {
        return _Composer.on("text", _Composer.match(normaliseTriggers(triggers), ...fns));
      }
      /**
       * Generates middleware for handling specified commands.
       */
      static command(command, ...fns) {
        if (fns.length === 0)
          return _Composer.entity("bot_command", command);
        const triggers = normaliseTriggers(command);
        const filter = (0, filters_1.message)("text");
        const handler = _Composer.compose(fns);
        return _Composer.on(filter, (ctx, next) => {
          const { entities } = ctx.message;
          const cmdEntity = entities === null || entities === void 0 ? void 0 : entities[0];
          if ((cmdEntity === null || cmdEntity === void 0 ? void 0 : cmdEntity.type) !== "bot_command")
            return next();
          if (cmdEntity.offset > 0)
            return next();
          const len = cmdEntity.length;
          const text = ctx.message.text;
          const [cmdPart, to] = text.slice(0, len).split("@");
          if (!cmdPart)
            return next();
          if (to && to.toLowerCase() !== ctx.me.toLowerCase())
            return next();
          const command2 = cmdPart.slice(1);
          for (const trigger of triggers) {
            const match = trigger(command2, ctx);
            if (match) {
              const payloadOffset = len + 1;
              const payload = text.slice(payloadOffset);
              const c = Object.assign(ctx, { match, command: command2, payload, args: [] });
              let _args = void 0;
              Object.defineProperty(c, "args", {
                enumerable: true,
                configurable: true,
                get() {
                  if (_args != null)
                    return _args;
                  return _args = (0, args_1.argsParser)(payload, entities, payloadOffset);
                },
                set(args) {
                  _args = args;
                }
              });
              return handler(c, next);
            }
          }
          return next();
        });
      }
      /**
       * Generates middleware for handling matching callback queries.
       */
      static action(triggers, ...fns) {
        return _Composer.on("callback_query", _Composer.match(normaliseTriggers(triggers), ...fns));
      }
      /**
       * Generates middleware for handling matching inline queries.
       */
      static inlineQuery(triggers, ...fns) {
        return _Composer.on("inline_query", _Composer.match(normaliseTriggers(triggers), ...fns));
      }
      static reaction(reaction, ...fns) {
        const reactions = Array.isArray(reaction) ? reaction : [reaction];
        const handler = _Composer.compose(fns);
        return _Composer.on("message_reaction", (ctx, next) => {
          const match = reactions.find((r) => typeof r === "string" && r.startsWith("-") ? ctx.reactions.removed.has(r.slice(1)) : ctx.reactions.added.has(r));
          if (match)
            return handler(Object.assign(ctx, { match }), next);
          return next();
        });
      }
      /**
       * Generates middleware responding only to specified users.
       */
      static acl(userId, ...fns) {
        if (typeof userId === "function") {
          return _Composer.optional(userId, ...fns);
        }
        const allowed = Array.isArray(userId) ? userId : [userId];
        return _Composer.optional((ctx) => !ctx.from || allowed.includes(ctx.from.id), ...fns);
      }
      static memberStatus(status, ...fns) {
        const statuses = Array.isArray(status) ? status : [status];
        return _Composer.optional(async (ctx) => {
          if (ctx.message === void 0)
            return false;
          const member = await ctx.getChatMember(ctx.message.from.id);
          return statuses.includes(member.status);
        }, ...fns);
      }
      /**
       * Generates middleware responding only to chat admins and chat creator.
       */
      static admin(...fns) {
        return _Composer.memberStatus(["administrator", "creator"], ...fns);
      }
      /**
       * Generates middleware responding only to chat creator.
       */
      static creator(...fns) {
        return _Composer.memberStatus("creator", ...fns);
      }
      /**
       * Generates middleware running only in specified chat types.
       */
      static chatType(type, ...fns) {
        const types = Array.isArray(type) ? type : [type];
        return _Composer.optional((ctx) => {
          const chat = ctx.chat;
          return chat !== void 0 && types.includes(chat.type);
        }, ...fns);
      }
      /**
       * Generates middleware running only in private chats.
       */
      static privateChat(...fns) {
        return _Composer.chatType("private", ...fns);
      }
      /**
       * Generates middleware running only in groups and supergroups.
       */
      static groupChat(...fns) {
        return _Composer.chatType(["group", "supergroup"], ...fns);
      }
      /**
       * Generates middleware for handling game queries.
       */
      static gameQuery(...fns) {
        return _Composer.guard((0, filters_1.callbackQuery)("game_short_name"), ...fns);
      }
      static unwrap(handler) {
        if (!handler) {
          throw new Error("Handler is undefined");
        }
        return "middleware" in handler ? handler.middleware() : handler;
      }
      static compose(middlewares) {
        if (!Array.isArray(middlewares)) {
          throw new Error("Middlewares must be an array");
        }
        if (middlewares.length === 0) {
          return _Composer.passThru();
        }
        if (middlewares.length === 1) {
          return _Composer.unwrap(middlewares[0]);
        }
        return (ctx, next) => {
          let index = -1;
          return execute(0, ctx);
          async function execute(i, context2) {
            var _a;
            if (!(context2 instanceof context_1.default)) {
              throw new Error("next(ctx) called with invalid context");
            }
            if (i <= index) {
              throw new Error("next() called multiple times");
            }
            index = i;
            const handler = _Composer.unwrap((_a = middlewares[i]) !== null && _a !== void 0 ? _a : next);
            await handler(context2, async (ctx2 = context2) => {
              await execute(i + 1, ctx2);
            });
          }
          __name(execute, "execute");
        };
      }
    };
    exports.Composer = Composer4;
    Composer4.mount = Composer4.on;
    function escapeRegExp(s) {
      return s.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    __name(escapeRegExp, "escapeRegExp");
    function normaliseTriggers(triggers) {
      if (!Array.isArray(triggers))
        triggers = [triggers];
      return triggers.map((trigger) => {
        if (!trigger)
          throw new Error("Invalid trigger");
        if (typeof trigger === "function")
          return trigger;
        if (trigger instanceof RegExp)
          return (value = "") => {
            trigger.lastIndex = 0;
            return trigger.exec(value);
          };
        const regex = new RegExp(`^${escapeRegExp(trigger)}$`);
        return (value) => regex.exec(value);
      });
    }
    __name(normaliseTriggers, "normaliseTriggers");
    function getEntities(msg) {
      var _a, _b;
      if (msg == null)
        return [];
      if ("caption_entities" in msg)
        return (_a = msg.caption_entities) !== null && _a !== void 0 ? _a : [];
      if ("entities" in msg)
        return (_b = msg.entities) !== null && _b !== void 0 ? _b : [];
      return [];
    }
    __name(getEntities, "getEntities");
    function getText(msg) {
      if (msg == null)
        return void 0;
      if ("caption" in msg)
        return msg.caption;
      if ("text" in msg)
        return msg.text;
      if ("data" in msg)
        return msg.data;
      if ("game_short_name" in msg)
        return msg.game_short_name;
      return void 0;
    }
    __name(getText, "getText");
    function normaliseTextArguments(argument, prefix = "") {
      const args = Array.isArray(argument) ? argument : [argument];
      return args.filter(Boolean).map((arg) => prefix && typeof arg === "string" && !arg.startsWith(prefix) ? `${prefix}${arg}` : arg);
    }
    __name(normaliseTextArguments, "normaliseTextArguments");
    exports.default = Composer4;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/helpers/compact.js
var require_compact = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/helpers/compact.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.compactOptions = void 0;
    function compactOptions(options) {
      if (!options) {
        return options;
      }
      const compacted = {};
      for (const key in options)
        if (
          // todo(mkr): replace with Object.hasOwn in v5 (Node 16+)
          Object.prototype.hasOwnProperty.call(options, key) && options[key] !== void 0
        )
          compacted[key] = options[key];
      return compacted;
    }
    __name(compactOptions, "compactOptions");
    exports.compactOptions = compactOptions;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/network/webhook.js
var require_webhook = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/network/webhook.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var debug_1 = __importDefault(require_browser());
    var debug3 = (0, debug_1.default)("telegraf:webhook");
    function generateWebhook(filter, updateHandler) {
      return async (req, res, next = () => {
        res.statusCode = 403;
        debug3("Replying with status code", res.statusCode);
        res.end();
      }) => {
        debug3("Incoming request", req.method, req.url);
        if (!filter(req)) {
          debug3("Webhook filter failed", req.method, req.url);
          return next();
        }
        let update;
        try {
          if (req.body != null) {
            let body = req.body;
            if (body instanceof Buffer)
              body = String(req.body);
            if (typeof body === "string")
              body = JSON.parse(body);
            update = body;
          } else {
            let body = "";
            for await (const chunk of req)
              body += String(chunk);
            update = JSON.parse(body);
          }
        } catch (error3) {
          res.writeHead(415).end();
          debug3("Failed to parse request body:", error3);
          return;
        }
        return await updateHandler(update, res);
      };
    }
    __name(generateWebhook, "generateWebhook");
    exports.default = generateWebhook;
  }
});

// node_modules/.pnpm/abort-controller@3.0.0/node_modules/abort-controller/browser.js
var require_browser2 = __commonJS({
  "node_modules/.pnpm/abort-controller@3.0.0/node_modules/abort-controller/browser.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { AbortController: AbortController3, AbortSignal } = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : (
      /* otherwise */
      void 0
    );
    module.exports = AbortController3;
    module.exports.AbortSignal = AbortSignal;
    module.exports.default = AbortController3;
  }
});

// node-built-in-modules:util
import libDefault2 from "util";
var require_util2 = __commonJS({
  "node-built-in-modules:util"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault2;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/network/error.js
var require_error = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/network/error.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TelegramError = void 0;
    var TelegramError = class extends Error {
      static {
        __name(this, "TelegramError");
      }
      constructor(response, on2 = {}) {
        super(`${response.error_code}: ${response.description}`);
        this.response = response;
        this.on = on2;
      }
      get code() {
        return this.response.error_code;
      }
      get description() {
        return this.response.description;
      }
      get parameters() {
        return this.response.parameters;
      }
    };
    exports.TelegramError = TelegramError;
    exports.default = TelegramError;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/network/polling.js
var require_polling = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/network/polling.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Polling = void 0;
    var abort_controller_1 = __importDefault(require_browser2());
    var debug_1 = __importDefault(require_browser());
    var util_1 = require_util2();
    var error_1 = require_error();
    var debug3 = (0, debug_1.default)("telegraf:polling");
    var wait = (0, util_1.promisify)(setTimeout);
    function always(x) {
      return () => x;
    }
    __name(always, "always");
    var noop3 = always(Promise.resolve());
    var Polling = class {
      static {
        __name(this, "Polling");
      }
      constructor(telegram, allowedUpdates) {
        this.telegram = telegram;
        this.allowedUpdates = allowedUpdates;
        this.abortController = new abort_controller_1.default();
        this.skipOffsetSync = false;
        this.offset = 0;
      }
      async *[Symbol.asyncIterator]() {
        var _a, _b;
        debug3("Starting long polling");
        do {
          try {
            const updates = await this.telegram.callApi("getUpdates", {
              timeout: 50,
              offset: this.offset,
              allowed_updates: this.allowedUpdates
            }, this.abortController);
            const last = updates[updates.length - 1];
            if (last !== void 0) {
              this.offset = last.update_id + 1;
            }
            yield updates;
          } catch (error3) {
            const err = error3;
            if (err.name === "AbortError")
              return;
            if (err.name === "FetchError" || err instanceof error_1.TelegramError && err.code === 429 || err instanceof error_1.TelegramError && err.code >= 500) {
              const retryAfter = (_b = (_a = err.parameters) === null || _a === void 0 ? void 0 : _a.retry_after) !== null && _b !== void 0 ? _b : 5;
              debug3("Failed to fetch updates, retrying after %ds.", retryAfter, err);
              await wait(retryAfter * 1e3);
              continue;
            }
            if (err instanceof error_1.TelegramError && // Unauthorized      Conflict
            (err.code === 401 || err.code === 409)) {
              this.skipOffsetSync = true;
              throw err;
            }
            throw err;
          }
        } while (!this.abortController.signal.aborted);
      }
      async syncUpdateOffset() {
        if (this.skipOffsetSync)
          return;
        debug3("Syncing update offset...");
        await this.telegram.callApi("getUpdates", { offset: this.offset, limit: 1 });
      }
      async loop(handleUpdate) {
        if (this.abortController.signal.aborted)
          throw new Error("Polling instances must not be reused!");
        try {
          for await (const updates of this)
            await Promise.all(updates.map(handleUpdate));
        } finally {
          debug3("Long polling stopped");
          this.stop();
          await this.syncUpdateOffset().catch(noop3);
        }
      }
      stop() {
        this.abortController.abort();
      }
    };
    exports.Polling = Polling;
  }
});

// node_modules/.pnpm/p-timeout@4.1.0/node_modules/p-timeout/index.js
var require_p_timeout = __commonJS({
  "node_modules/.pnpm/p-timeout@4.1.0/node_modules/p-timeout/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var TimeoutError = class extends Error {
      static {
        __name(this, "TimeoutError");
      }
      constructor(message) {
        super(message);
        this.name = "TimeoutError";
      }
    };
    var pTimeout = /* @__PURE__ */ __name((promise, milliseconds, fallback, options) => {
      let timer;
      const cancelablePromise = new Promise((resolve, reject) => {
        if (typeof milliseconds !== "number" || milliseconds < 0) {
          throw new TypeError("Expected `milliseconds` to be a positive number");
        }
        if (milliseconds === Infinity) {
          resolve(promise);
          return;
        }
        options = {
          customTimers: { setTimeout, clearTimeout },
          ...options
        };
        timer = options.customTimers.setTimeout.call(void 0, () => {
          if (typeof fallback === "function") {
            try {
              resolve(fallback());
            } catch (error3) {
              reject(error3);
            }
            return;
          }
          const message = typeof fallback === "string" ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
          const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);
          if (typeof promise.cancel === "function") {
            promise.cancel();
          }
          reject(timeoutError);
        }, milliseconds);
        (async () => {
          try {
            resolve(await promise);
          } catch (error3) {
            reject(error3);
          } finally {
            options.customTimers.clearTimeout.call(void 0, timer);
          }
        })();
      });
      cancelablePromise.clear = () => {
        clearTimeout(timer);
        timer = void 0;
      };
      return cancelablePromise;
    }, "pTimeout");
    module.exports = pTimeout;
    module.exports.default = pTimeout;
    module.exports.TimeoutError = TimeoutError;
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/fs/promises.mjs
var access, copyFile, cp, open, opendir, rename, truncate, rm, rmdir, mkdir, readdir, readlink, symlink, lstat, stat, link, unlink, chmod, lchmod, lchown, chown, utimes, lutimes, realpath, mkdtemp, writeFile, appendFile, readFile, watch, statfs, glob;
var init_promises = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/fs/promises.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    access = /* @__PURE__ */ notImplemented("fs.access");
    copyFile = /* @__PURE__ */ notImplemented("fs.copyFile");
    cp = /* @__PURE__ */ notImplemented("fs.cp");
    open = /* @__PURE__ */ notImplemented("fs.open");
    opendir = /* @__PURE__ */ notImplemented("fs.opendir");
    rename = /* @__PURE__ */ notImplemented("fs.rename");
    truncate = /* @__PURE__ */ notImplemented("fs.truncate");
    rm = /* @__PURE__ */ notImplemented("fs.rm");
    rmdir = /* @__PURE__ */ notImplemented("fs.rmdir");
    mkdir = /* @__PURE__ */ notImplemented("fs.mkdir");
    readdir = /* @__PURE__ */ notImplemented("fs.readdir");
    readlink = /* @__PURE__ */ notImplemented("fs.readlink");
    symlink = /* @__PURE__ */ notImplemented("fs.symlink");
    lstat = /* @__PURE__ */ notImplemented("fs.lstat");
    stat = /* @__PURE__ */ notImplemented("fs.stat");
    link = /* @__PURE__ */ notImplemented("fs.link");
    unlink = /* @__PURE__ */ notImplemented("fs.unlink");
    chmod = /* @__PURE__ */ notImplemented("fs.chmod");
    lchmod = /* @__PURE__ */ notImplemented("fs.lchmod");
    lchown = /* @__PURE__ */ notImplemented("fs.lchown");
    chown = /* @__PURE__ */ notImplemented("fs.chown");
    utimes = /* @__PURE__ */ notImplemented("fs.utimes");
    lutimes = /* @__PURE__ */ notImplemented("fs.lutimes");
    realpath = /* @__PURE__ */ notImplemented("fs.realpath");
    mkdtemp = /* @__PURE__ */ notImplemented("fs.mkdtemp");
    writeFile = /* @__PURE__ */ notImplemented("fs.writeFile");
    appendFile = /* @__PURE__ */ notImplemented("fs.appendFile");
    readFile = /* @__PURE__ */ notImplemented("fs.readFile");
    watch = /* @__PURE__ */ notImplemented("fs.watch");
    statfs = /* @__PURE__ */ notImplemented("fs.statfs");
    glob = /* @__PURE__ */ notImplemented("fs.glob");
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/fs/constants.mjs
var constants_exports = {};
__export(constants_exports, {
  COPYFILE_EXCL: () => COPYFILE_EXCL,
  COPYFILE_FICLONE: () => COPYFILE_FICLONE,
  COPYFILE_FICLONE_FORCE: () => COPYFILE_FICLONE_FORCE,
  EXTENSIONLESS_FORMAT_JAVASCRIPT: () => EXTENSIONLESS_FORMAT_JAVASCRIPT,
  EXTENSIONLESS_FORMAT_WASM: () => EXTENSIONLESS_FORMAT_WASM,
  F_OK: () => F_OK,
  O_APPEND: () => O_APPEND,
  O_CREAT: () => O_CREAT,
  O_DIRECT: () => O_DIRECT,
  O_DIRECTORY: () => O_DIRECTORY,
  O_DSYNC: () => O_DSYNC,
  O_EXCL: () => O_EXCL,
  O_NOATIME: () => O_NOATIME,
  O_NOCTTY: () => O_NOCTTY,
  O_NOFOLLOW: () => O_NOFOLLOW,
  O_NONBLOCK: () => O_NONBLOCK,
  O_RDONLY: () => O_RDONLY,
  O_RDWR: () => O_RDWR,
  O_SYNC: () => O_SYNC,
  O_TRUNC: () => O_TRUNC,
  O_WRONLY: () => O_WRONLY,
  R_OK: () => R_OK,
  S_IFBLK: () => S_IFBLK,
  S_IFCHR: () => S_IFCHR,
  S_IFDIR: () => S_IFDIR,
  S_IFIFO: () => S_IFIFO,
  S_IFLNK: () => S_IFLNK,
  S_IFMT: () => S_IFMT,
  S_IFREG: () => S_IFREG,
  S_IFSOCK: () => S_IFSOCK,
  S_IRGRP: () => S_IRGRP,
  S_IROTH: () => S_IROTH,
  S_IRUSR: () => S_IRUSR,
  S_IRWXG: () => S_IRWXG,
  S_IRWXO: () => S_IRWXO,
  S_IRWXU: () => S_IRWXU,
  S_IWGRP: () => S_IWGRP,
  S_IWOTH: () => S_IWOTH,
  S_IWUSR: () => S_IWUSR,
  S_IXGRP: () => S_IXGRP,
  S_IXOTH: () => S_IXOTH,
  S_IXUSR: () => S_IXUSR,
  UV_DIRENT_BLOCK: () => UV_DIRENT_BLOCK,
  UV_DIRENT_CHAR: () => UV_DIRENT_CHAR,
  UV_DIRENT_DIR: () => UV_DIRENT_DIR,
  UV_DIRENT_FIFO: () => UV_DIRENT_FIFO,
  UV_DIRENT_FILE: () => UV_DIRENT_FILE,
  UV_DIRENT_LINK: () => UV_DIRENT_LINK,
  UV_DIRENT_SOCKET: () => UV_DIRENT_SOCKET,
  UV_DIRENT_UNKNOWN: () => UV_DIRENT_UNKNOWN,
  UV_FS_COPYFILE_EXCL: () => UV_FS_COPYFILE_EXCL,
  UV_FS_COPYFILE_FICLONE: () => UV_FS_COPYFILE_FICLONE,
  UV_FS_COPYFILE_FICLONE_FORCE: () => UV_FS_COPYFILE_FICLONE_FORCE,
  UV_FS_O_FILEMAP: () => UV_FS_O_FILEMAP,
  UV_FS_SYMLINK_DIR: () => UV_FS_SYMLINK_DIR,
  UV_FS_SYMLINK_JUNCTION: () => UV_FS_SYMLINK_JUNCTION,
  W_OK: () => W_OK,
  X_OK: () => X_OK
});
var UV_FS_SYMLINK_DIR, UV_FS_SYMLINK_JUNCTION, O_RDONLY, O_WRONLY, O_RDWR, UV_DIRENT_UNKNOWN, UV_DIRENT_FILE, UV_DIRENT_DIR, UV_DIRENT_LINK, UV_DIRENT_FIFO, UV_DIRENT_SOCKET, UV_DIRENT_CHAR, UV_DIRENT_BLOCK, EXTENSIONLESS_FORMAT_JAVASCRIPT, EXTENSIONLESS_FORMAT_WASM, S_IFMT, S_IFREG, S_IFDIR, S_IFCHR, S_IFBLK, S_IFIFO, S_IFLNK, S_IFSOCK, O_CREAT, O_EXCL, UV_FS_O_FILEMAP, O_NOCTTY, O_TRUNC, O_APPEND, O_DIRECTORY, O_NOATIME, O_NOFOLLOW, O_SYNC, O_DSYNC, O_DIRECT, O_NONBLOCK, S_IRWXU, S_IRUSR, S_IWUSR, S_IXUSR, S_IRWXG, S_IRGRP, S_IWGRP, S_IXGRP, S_IRWXO, S_IROTH, S_IWOTH, S_IXOTH, F_OK, R_OK, W_OK, X_OK, UV_FS_COPYFILE_EXCL, COPYFILE_EXCL, UV_FS_COPYFILE_FICLONE, COPYFILE_FICLONE, UV_FS_COPYFILE_FICLONE_FORCE, COPYFILE_FICLONE_FORCE;
var init_constants2 = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/fs/constants.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    UV_FS_SYMLINK_DIR = 1;
    UV_FS_SYMLINK_JUNCTION = 2;
    O_RDONLY = 0;
    O_WRONLY = 1;
    O_RDWR = 2;
    UV_DIRENT_UNKNOWN = 0;
    UV_DIRENT_FILE = 1;
    UV_DIRENT_DIR = 2;
    UV_DIRENT_LINK = 3;
    UV_DIRENT_FIFO = 4;
    UV_DIRENT_SOCKET = 5;
    UV_DIRENT_CHAR = 6;
    UV_DIRENT_BLOCK = 7;
    EXTENSIONLESS_FORMAT_JAVASCRIPT = 0;
    EXTENSIONLESS_FORMAT_WASM = 1;
    S_IFMT = 61440;
    S_IFREG = 32768;
    S_IFDIR = 16384;
    S_IFCHR = 8192;
    S_IFBLK = 24576;
    S_IFIFO = 4096;
    S_IFLNK = 40960;
    S_IFSOCK = 49152;
    O_CREAT = 64;
    O_EXCL = 128;
    UV_FS_O_FILEMAP = 0;
    O_NOCTTY = 256;
    O_TRUNC = 512;
    O_APPEND = 1024;
    O_DIRECTORY = 65536;
    O_NOATIME = 262144;
    O_NOFOLLOW = 131072;
    O_SYNC = 1052672;
    O_DSYNC = 4096;
    O_DIRECT = 16384;
    O_NONBLOCK = 2048;
    S_IRWXU = 448;
    S_IRUSR = 256;
    S_IWUSR = 128;
    S_IXUSR = 64;
    S_IRWXG = 56;
    S_IRGRP = 32;
    S_IWGRP = 16;
    S_IXGRP = 8;
    S_IRWXO = 7;
    S_IROTH = 4;
    S_IWOTH = 2;
    S_IXOTH = 1;
    F_OK = 0;
    R_OK = 4;
    W_OK = 2;
    X_OK = 1;
    UV_FS_COPYFILE_EXCL = 1;
    COPYFILE_EXCL = 1;
    UV_FS_COPYFILE_FICLONE = 2;
    COPYFILE_FICLONE = 2;
    UV_FS_COPYFILE_FICLONE_FORCE = 4;
    COPYFILE_FICLONE_FORCE = 4;
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/fs/promises.mjs
var promises_default;
var init_promises2 = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/fs/promises.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_promises();
    init_constants2();
    init_promises();
    promises_default = {
      constants: constants_exports,
      access,
      appendFile,
      chmod,
      chown,
      copyFile,
      cp,
      glob,
      lchmod,
      lchown,
      link,
      lstat,
      lutimes,
      mkdir,
      mkdtemp,
      open,
      opendir,
      readFile,
      readdir,
      readlink,
      realpath,
      rename,
      rm,
      rmdir,
      stat,
      statfs,
      symlink,
      truncate,
      unlink,
      utimes,
      watch,
      writeFile
    };
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/fs/classes.mjs
var Dir, Dirent, Stats, ReadStream2, WriteStream2, FileReadStream, FileWriteStream;
var init_classes = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/fs/classes.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    Dir = /* @__PURE__ */ notImplementedClass("fs.Dir");
    Dirent = /* @__PURE__ */ notImplementedClass("fs.Dirent");
    Stats = /* @__PURE__ */ notImplementedClass("fs.Stats");
    ReadStream2 = /* @__PURE__ */ notImplementedClass("fs.ReadStream");
    WriteStream2 = /* @__PURE__ */ notImplementedClass("fs.WriteStream");
    FileReadStream = ReadStream2;
    FileWriteStream = WriteStream2;
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/fs/fs.mjs
function callbackify(fn) {
  const fnc = /* @__PURE__ */ __name(function(...args) {
    const cb = args.pop();
    fn().catch((error3) => cb(error3)).then((val) => cb(void 0, val));
  }, "fnc");
  fnc.__promisify__ = fn;
  fnc.native = fnc;
  return fnc;
}
var access2, appendFile2, chown2, chmod2, copyFile2, cp2, lchown2, lchmod2, link2, lstat2, lutimes2, mkdir2, mkdtemp2, realpath2, open2, opendir2, readdir2, readFile2, readlink2, rename2, rm2, rmdir2, stat2, symlink2, truncate2, unlink2, utimes2, writeFile2, statfs2, close, createReadStream, createWriteStream, exists, fchown, fchmod, fdatasync, fstat, fsync, ftruncate, futimes, lstatSync, read, readv, realpathSync, statSync, unwatchFile, watch2, watchFile, write, writev, _toUnixTimestamp, openAsBlob, glob2, appendFileSync, accessSync, chownSync, chmodSync, closeSync, copyFileSync, cpSync, existsSync, fchownSync, fchmodSync, fdatasyncSync, fstatSync, fsyncSync, ftruncateSync, futimesSync, lchownSync, lchmodSync, linkSync, lutimesSync, mkdirSync, mkdtempSync, openSync, opendirSync, readdirSync, readSync, readvSync, readFileSync, readlinkSync, renameSync, rmSync, rmdirSync, symlinkSync, truncateSync, unlinkSync, utimesSync, writeFileSync, writeSync, writevSync, statfsSync, globSync;
var init_fs = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/fs/fs.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    init_promises();
    __name(callbackify, "callbackify");
    access2 = callbackify(access);
    appendFile2 = callbackify(appendFile);
    chown2 = callbackify(chown);
    chmod2 = callbackify(chmod);
    copyFile2 = callbackify(copyFile);
    cp2 = callbackify(cp);
    lchown2 = callbackify(lchown);
    lchmod2 = callbackify(lchmod);
    link2 = callbackify(link);
    lstat2 = callbackify(lstat);
    lutimes2 = callbackify(lutimes);
    mkdir2 = callbackify(mkdir);
    mkdtemp2 = callbackify(mkdtemp);
    realpath2 = callbackify(realpath);
    open2 = callbackify(open);
    opendir2 = callbackify(opendir);
    readdir2 = callbackify(readdir);
    readFile2 = callbackify(readFile);
    readlink2 = callbackify(readlink);
    rename2 = callbackify(rename);
    rm2 = callbackify(rm);
    rmdir2 = callbackify(rmdir);
    stat2 = callbackify(stat);
    symlink2 = callbackify(symlink);
    truncate2 = callbackify(truncate);
    unlink2 = callbackify(unlink);
    utimes2 = callbackify(utimes);
    writeFile2 = callbackify(writeFile);
    statfs2 = callbackify(statfs);
    close = /* @__PURE__ */ notImplementedAsync("fs.close");
    createReadStream = /* @__PURE__ */ notImplementedAsync("fs.createReadStream");
    createWriteStream = /* @__PURE__ */ notImplementedAsync("fs.createWriteStream");
    exists = /* @__PURE__ */ notImplementedAsync("fs.exists");
    fchown = /* @__PURE__ */ notImplementedAsync("fs.fchown");
    fchmod = /* @__PURE__ */ notImplementedAsync("fs.fchmod");
    fdatasync = /* @__PURE__ */ notImplementedAsync("fs.fdatasync");
    fstat = /* @__PURE__ */ notImplementedAsync("fs.fstat");
    fsync = /* @__PURE__ */ notImplementedAsync("fs.fsync");
    ftruncate = /* @__PURE__ */ notImplementedAsync("fs.ftruncate");
    futimes = /* @__PURE__ */ notImplementedAsync("fs.futimes");
    lstatSync = /* @__PURE__ */ notImplementedAsync("fs.lstatSync");
    read = /* @__PURE__ */ notImplementedAsync("fs.read");
    readv = /* @__PURE__ */ notImplementedAsync("fs.readv");
    realpathSync = /* @__PURE__ */ notImplementedAsync("fs.realpathSync");
    statSync = /* @__PURE__ */ notImplementedAsync("fs.statSync");
    unwatchFile = /* @__PURE__ */ notImplementedAsync("fs.unwatchFile");
    watch2 = /* @__PURE__ */ notImplementedAsync("fs.watch");
    watchFile = /* @__PURE__ */ notImplementedAsync("fs.watchFile");
    write = /* @__PURE__ */ notImplementedAsync("fs.write");
    writev = /* @__PURE__ */ notImplementedAsync("fs.writev");
    _toUnixTimestamp = /* @__PURE__ */ notImplementedAsync("fs._toUnixTimestamp");
    openAsBlob = /* @__PURE__ */ notImplementedAsync("fs.openAsBlob");
    glob2 = /* @__PURE__ */ notImplementedAsync("fs.glob");
    appendFileSync = /* @__PURE__ */ notImplemented("fs.appendFileSync");
    accessSync = /* @__PURE__ */ notImplemented("fs.accessSync");
    chownSync = /* @__PURE__ */ notImplemented("fs.chownSync");
    chmodSync = /* @__PURE__ */ notImplemented("fs.chmodSync");
    closeSync = /* @__PURE__ */ notImplemented("fs.closeSync");
    copyFileSync = /* @__PURE__ */ notImplemented("fs.copyFileSync");
    cpSync = /* @__PURE__ */ notImplemented("fs.cpSync");
    existsSync = /* @__PURE__ */ __name(() => false, "existsSync");
    fchownSync = /* @__PURE__ */ notImplemented("fs.fchownSync");
    fchmodSync = /* @__PURE__ */ notImplemented("fs.fchmodSync");
    fdatasyncSync = /* @__PURE__ */ notImplemented("fs.fdatasyncSync");
    fstatSync = /* @__PURE__ */ notImplemented("fs.fstatSync");
    fsyncSync = /* @__PURE__ */ notImplemented("fs.fsyncSync");
    ftruncateSync = /* @__PURE__ */ notImplemented("fs.ftruncateSync");
    futimesSync = /* @__PURE__ */ notImplemented("fs.futimesSync");
    lchownSync = /* @__PURE__ */ notImplemented("fs.lchownSync");
    lchmodSync = /* @__PURE__ */ notImplemented("fs.lchmodSync");
    linkSync = /* @__PURE__ */ notImplemented("fs.linkSync");
    lutimesSync = /* @__PURE__ */ notImplemented("fs.lutimesSync");
    mkdirSync = /* @__PURE__ */ notImplemented("fs.mkdirSync");
    mkdtempSync = /* @__PURE__ */ notImplemented("fs.mkdtempSync");
    openSync = /* @__PURE__ */ notImplemented("fs.openSync");
    opendirSync = /* @__PURE__ */ notImplemented("fs.opendirSync");
    readdirSync = /* @__PURE__ */ notImplemented("fs.readdirSync");
    readSync = /* @__PURE__ */ notImplemented("fs.readSync");
    readvSync = /* @__PURE__ */ notImplemented("fs.readvSync");
    readFileSync = /* @__PURE__ */ notImplemented("fs.readFileSync");
    readlinkSync = /* @__PURE__ */ notImplemented("fs.readlinkSync");
    renameSync = /* @__PURE__ */ notImplemented("fs.renameSync");
    rmSync = /* @__PURE__ */ notImplemented("fs.rmSync");
    rmdirSync = /* @__PURE__ */ notImplemented("fs.rmdirSync");
    symlinkSync = /* @__PURE__ */ notImplemented("fs.symlinkSync");
    truncateSync = /* @__PURE__ */ notImplemented("fs.truncateSync");
    unlinkSync = /* @__PURE__ */ notImplemented("fs.unlinkSync");
    utimesSync = /* @__PURE__ */ notImplemented("fs.utimesSync");
    writeFileSync = /* @__PURE__ */ notImplemented("fs.writeFileSync");
    writeSync = /* @__PURE__ */ notImplemented("fs.writeSync");
    writevSync = /* @__PURE__ */ notImplemented("fs.writevSync");
    statfsSync = /* @__PURE__ */ notImplemented("fs.statfsSync");
    globSync = /* @__PURE__ */ notImplemented("fs.globSync");
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/fs.mjs
var fs_default;
var init_fs2 = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/fs.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_promises2();
    init_classes();
    init_fs();
    init_constants2();
    init_constants2();
    init_fs();
    init_classes();
    fs_default = {
      F_OK,
      R_OK,
      W_OK,
      X_OK,
      constants: constants_exports,
      promises: promises_default,
      Dir,
      Dirent,
      FileReadStream,
      FileWriteStream,
      ReadStream: ReadStream2,
      Stats,
      WriteStream: WriteStream2,
      _toUnixTimestamp,
      access: access2,
      accessSync,
      appendFile: appendFile2,
      appendFileSync,
      chmod: chmod2,
      chmodSync,
      chown: chown2,
      chownSync,
      close,
      closeSync,
      copyFile: copyFile2,
      copyFileSync,
      cp: cp2,
      cpSync,
      createReadStream,
      createWriteStream,
      exists,
      existsSync,
      fchmod,
      fchmodSync,
      fchown,
      fchownSync,
      fdatasync,
      fdatasyncSync,
      fstat,
      fstatSync,
      fsync,
      fsyncSync,
      ftruncate,
      ftruncateSync,
      futimes,
      futimesSync,
      glob: glob2,
      lchmod: lchmod2,
      globSync,
      lchmodSync,
      lchown: lchown2,
      lchownSync,
      link: link2,
      linkSync,
      lstat: lstat2,
      lstatSync,
      lutimes: lutimes2,
      lutimesSync,
      mkdir: mkdir2,
      mkdirSync,
      mkdtemp: mkdtemp2,
      mkdtempSync,
      open: open2,
      openAsBlob,
      openSync,
      opendir: opendir2,
      opendirSync,
      read,
      readFile: readFile2,
      readFileSync,
      readSync,
      readdir: readdir2,
      readdirSync,
      readlink: readlink2,
      readlinkSync,
      readv,
      readvSync,
      realpath: realpath2,
      realpathSync,
      rename: rename2,
      renameSync,
      rm: rm2,
      rmSync,
      rmdir: rmdir2,
      rmdirSync,
      stat: stat2,
      statSync,
      statfs: statfs2,
      statfsSync,
      symlink: symlink2,
      symlinkSync,
      truncate: truncate2,
      truncateSync,
      unlink: unlink2,
      unlinkSync,
      unwatchFile,
      utimes: utimes2,
      utimesSync,
      watch: watch2,
      watchFile,
      write,
      writeFile: writeFile2,
      writeFileSync,
      writeSync,
      writev,
      writevSync
    };
  }
});

// node-built-in-modules:fs
var require_fs = __commonJS({
  "node-built-in-modules:fs"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_fs2();
    module.exports = fs_default;
  }
});

// node-built-in-modules:fs/promises
var require_promises = __commonJS({
  "node-built-in-modules:fs/promises"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_promises2();
    module.exports = promises_default;
  }
});

// node-built-in-modules:path
import libDefault3 from "path";
var require_path = __commonJS({
  "node-built-in-modules:path"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault3;
  }
});

// ../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/npm/node-fetch.mjs
var node_fetch_exports = {};
__export(node_fetch_exports, {
  AbortController: () => AbortController2,
  AbortError: () => AbortError,
  FetchError: () => FetchError,
  Headers: () => Headers2,
  Request: () => Request,
  Response: () => Response2,
  default: () => node_fetch_default,
  fetch: () => fetch2,
  isRedirect: () => isRedirect
});
var fetch2, Headers2, Request, Response2, AbortController2, FetchError, AbortError, redirectStatus, isRedirect, node_fetch_default;
var init_node_fetch = __esm({
  "../../Library/pnpm/global/5/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/npm/node-fetch.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    fetch2 = /* @__PURE__ */ __name((...args) => globalThis.fetch(...args), "fetch");
    Headers2 = globalThis.Headers;
    Request = globalThis.Request;
    Response2 = globalThis.Response;
    AbortController2 = globalThis.AbortController;
    FetchError = Error;
    AbortError = Error;
    redirectStatus = /* @__PURE__ */ new Set([
      301,
      302,
      303,
      307,
      308
    ]);
    isRedirect = /* @__PURE__ */ __name((code) => redirectStatus.has(code), "isRedirect");
    fetch2.Promise = globalThis.Promise;
    fetch2.isRedirect = isRedirect;
    node_fetch_default = fetch2;
  }
});

// required-unenv-alias:node-fetch
var require_node_fetch = __commonJS({
  "required-unenv-alias:node-fetch"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_node_fetch();
    module.exports = Object.entries(node_fetch_exports).filter(([k]) => k !== "default").reduce(
      (cjs, [k, value]) => Object.defineProperty(cjs, k, { value, enumerable: true }),
      "default" in node_fetch_exports ? node_fetch_default : {}
    );
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/helpers/check.js
var require_check = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/helpers/check.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.is2D = exports.hasPropType = exports.hasProp = void 0;
    function hasProp(obj, prop) {
      return obj !== void 0 && prop in obj;
    }
    __name(hasProp, "hasProp");
    exports.hasProp = hasProp;
    function hasPropType(obj, prop, type) {
      return hasProp(obj, prop) && type === typeof obj[prop];
    }
    __name(hasPropType, "hasPropType");
    exports.hasPropType = hasPropType;
    function is2D(arr) {
      return Array.isArray(arr[0]);
    }
    __name(is2D, "is2D");
    exports.is2D = is2D;
  }
});

// node-built-in-modules:stream
import libDefault4 from "stream";
var require_stream = __commonJS({
  "node-built-in-modules:stream"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault4;
  }
});

// node_modules/.pnpm/sandwich-stream@2.0.2/node_modules/sandwich-stream/dist/sandwich-stream.js
var require_sandwich_stream = __commonJS({
  "node_modules/.pnpm/sandwich-stream@2.0.2/node_modules/sandwich-stream/dist/sandwich-stream.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream = require_stream();
    function __rest3(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
          t[p[i]] = s[p[i]];
      }
      return t;
    }
    __name(__rest3, "__rest");
    var SandwichStream = class extends stream.Readable {
      static {
        __name(this, "SandwichStream");
      }
      /**
       * Initiates the SandwichStream, you can consider it also passing
       * ReadableOptions to it
       *
       * @param head Pushes this content before all other content
       * @param tail Pushes this content after all other data has been pushed
       * @param separator Pushes this content between each stream
       * @param remaining The other kind of options to be passed to Readable
       * @example
       * const ss = new SandwichStream({
       *     head: 'This at the top\n',
       *     tail: '\nThis at the bottom',
       *     separator: '\n --- \n'
       * });
       */
      constructor(_a) {
        var { head, tail, separator } = _a, remaining = __rest3(_a, ["head", "tail", "separator"]);
        super(remaining);
        this.streamsActive = false;
        this.streams = [];
        this.newStreams = [];
        this.currentStream = null;
        this.head = null !== head && void 0 !== head ? head : null;
        this.tail = null !== tail && void 0 !== tail ? tail : null;
        this.separator = null !== separator && void 0 !== separator ? separator : null;
      }
      /**
       * Add a new Readable stream in the queue
       *
       * @param newStream The Readable stream
       * @example
       * sandwichStream.add(streamOne);
       * sandwichStream.add(streamTwo);
       * sandwichStream.add(streamThree);
       * @throws An Error in case that this request was not accepted
       * @returns This instance of Sandwich Stream
       */
      add(newStream) {
        if (false === this.streamsActive) {
          this.streams.push(newStream);
          newStream.on("error", this.subStreamOnError.bind(this));
        } else {
          this.newStreams.push(newStream);
        }
        return this;
      }
      /**
       * Works in a similar way from the Readable read, only that this one checks
       * for whether or not a stream is already being handled
       * @returns This instance of Sandwich Stream
       */
      _read() {
        if (false === this.streamsActive) {
          this.streamsActive = true;
          this.pushHead();
          this.streamNextStream();
        }
      }
      /**
       * Binds an error thrown from one of the streams being handled
       *
       * @param err Error to be bind
       * @returns This instance of Sandwich Stream
       */
      subStreamOnError(err) {
        this.emit("error", err);
      }
      /**
       * Fetches the next stream to be handled
       * @returns This instance of Sandwich Stream
       */
      streamNextStream() {
        if (true === this.nextStream()) {
          this.bindCurrentStreamEvents();
        } else {
          this.pushTail();
          this.push(null);
        }
      }
      /**
       * Verifies whether or not the stream queue has ended
       * @returns This instance of Sandwich Stream
       */
      nextStream() {
        const tmp = this.streams.shift();
        this.currentStream = void 0 !== tmp ? tmp : null;
        return null !== this.currentStream;
      }
      /**
       * Once the current stream starts to pass their data, this handles it in a
       * less complicated way
       * @returns This instance of Sandwich Stream
       */
      bindCurrentStreamEvents() {
        this.currentStream.on("readable", this.currentStreamOnReadable.bind(this));
        this.currentStream.on("end", this.currentStreamOnEnd.bind(this));
      }
      /**
       * Handles the data from a current stream once they are being streamed
       * @returns This instance of Sandwich Stream
       */
      currentStreamOnReadable() {
        const tmp = this.currentStream.read();
        const data = void 0 !== tmp && null !== tmp ? tmp : "";
        this.push(data);
      }
      /**
       * Handles the tagging once a stream is finished
       * @returns This instance of Sandwich Stream
       */
      currentStreamOnEnd() {
        this.pushSeparator();
        this.streams.concat(this.newStreams);
        this.newStreams = [];
        this.streamNextStream();
      }
      /**
       * Adds the head tag to the Sandwich Stream
       * @returns This instance of Sandwich Stream
       */
      pushHead() {
        if (null !== this.head) {
          this.push(this.head);
        }
      }
      /**
       * Adds the separator tag to the Sandwich Stream
       * @returns This instance of Sandwich Stream
       */
      pushSeparator() {
        if (0 < this.streams.length && null !== this.separator) {
          this.push(this.separator);
        }
      }
      /**
       * Adds the tail tag to the Sandwich Stream
       * @returns This instance of Sandwich Stream
       */
      pushTail() {
        if (null !== this.tail) {
          this.push(this.tail);
        }
      }
    };
    exports.SandwichStream = SandwichStream;
    exports.default = SandwichStream;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/network/multipart-stream.js
var require_multipart_stream = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/network/multipart-stream.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream = __importStar(require_stream());
    var check_1 = require_check();
    var sandwich_stream_1 = __importDefault(require_sandwich_stream());
    var CRNL = "\r\n";
    var MultipartStream = class _MultipartStream extends sandwich_stream_1.default {
      static {
        __name(this, "MultipartStream");
      }
      constructor(boundary) {
        super({
          head: `--${boundary}${CRNL}`,
          tail: `${CRNL}--${boundary}--`,
          separator: `${CRNL}--${boundary}${CRNL}`
        });
      }
      addPart(part) {
        const partStream = new stream.PassThrough();
        for (const [key, header] of Object.entries(part.headers)) {
          partStream.write(`${key}:${header}${CRNL}`);
        }
        partStream.write(CRNL);
        if (_MultipartStream.isStream(part.body)) {
          part.body.pipe(partStream);
        } else {
          partStream.end(part.body);
        }
        this.add(partStream);
      }
      static isStream(stream2) {
        return typeof stream2 === "object" && stream2 !== null && (0, check_1.hasPropType)(stream2, "pipe", "function");
      }
    };
    exports.default = MultipartStream;
  }
});

// node-built-in-modules:url
import libDefault5 from "url";
var require_url = __commonJS({
  "node-built-in-modules:url"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault5;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/network/client.js
var require_client = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/network/client.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var crypto2 = __importStar(require_crypto());
    var fs = __importStar(require_fs());
    var promises_1 = require_promises();
    var https = __importStar(require_https());
    var path = __importStar(require_path());
    var node_fetch_1 = __importDefault(require_node_fetch());
    var check_1 = require_check();
    var compact_1 = require_compact();
    var multipart_stream_1 = __importDefault(require_multipart_stream());
    var error_1 = __importDefault(require_error());
    var url_1 = require_url();
    var debug3 = require_browser()("telegraf:client");
    var { isStream } = multipart_stream_1.default;
    var WEBHOOK_REPLY_METHOD_ALLOWLIST = /* @__PURE__ */ new Set([
      "answerCallbackQuery",
      "answerInlineQuery",
      "deleteMessage",
      "leaveChat",
      "sendChatAction"
    ]);
    var DEFAULT_EXTENSIONS = {
      audio: "mp3",
      photo: "jpg",
      sticker: "webp",
      video: "mp4",
      animation: "mp4",
      video_note: "mp4",
      voice: "ogg"
    };
    var DEFAULT_OPTIONS2 = {
      apiRoot: "https://api.telegram.org",
      apiMode: "bot",
      webhookReply: true,
      agent: new https.Agent({
        keepAlive: true,
        keepAliveMsecs: 1e4
      }),
      attachmentAgent: void 0,
      testEnv: false
    };
    function includesMedia(payload) {
      return Object.entries(payload).some(([key, value]) => {
        if (key === "link_preview_options")
          return false;
        if (Array.isArray(value)) {
          return value.some(({ media }) => media && typeof media === "object" && (media.source || media.url));
        }
        return value && typeof value === "object" && ((0, check_1.hasProp)(value, "source") && value.source || (0, check_1.hasProp)(value, "url") && value.url || (0, check_1.hasPropType)(value, "media", "object") && ((0, check_1.hasProp)(value.media, "source") && value.media.source || (0, check_1.hasProp)(value.media, "url") && value.media.url));
      });
    }
    __name(includesMedia, "includesMedia");
    function replacer(_, value) {
      if (value == null)
        return void 0;
      return value;
    }
    __name(replacer, "replacer");
    function buildJSONConfig(payload) {
      return Promise.resolve({
        method: "POST",
        compress: true,
        headers: { "content-type": "application/json", connection: "keep-alive" },
        body: JSON.stringify(payload, replacer)
      });
    }
    __name(buildJSONConfig, "buildJSONConfig");
    var FORM_DATA_JSON_FIELDS = [
      "results",
      "reply_markup",
      "mask_position",
      "shipping_options",
      "errors"
    ];
    async function buildFormDataConfig(payload, agent) {
      for (const field of FORM_DATA_JSON_FIELDS) {
        if ((0, check_1.hasProp)(payload, field) && typeof payload[field] !== "string") {
          payload[field] = JSON.stringify(payload[field]);
        }
      }
      const boundary = crypto2.randomBytes(32).toString("hex");
      const formData = new multipart_stream_1.default(boundary);
      await Promise.all(Object.keys(payload).map((key) => (
        // @ts-expect-error payload[key] can obviously index payload, but TS doesn't trust us
        attachFormValue(formData, key, payload[key], agent)
      )));
      return {
        method: "POST",
        compress: true,
        headers: {
          "content-type": `multipart/form-data; boundary=${boundary}`,
          connection: "keep-alive"
        },
        body: formData
      };
    }
    __name(buildFormDataConfig, "buildFormDataConfig");
    async function attachFormValue(form, id, value, agent) {
      if (value == null) {
        return;
      }
      if (typeof value === "string" || typeof value === "boolean" || typeof value === "number") {
        form.addPart({
          headers: { "content-disposition": `form-data; name="${id}"` },
          body: `${value}`
        });
        return;
      }
      if (id === "thumb" || id === "thumbnail") {
        const attachmentId = crypto2.randomBytes(16).toString("hex");
        await attachFormMedia(form, value, attachmentId, agent);
        return form.addPart({
          headers: { "content-disposition": `form-data; name="${id}"` },
          body: `attach://${attachmentId}`
        });
      }
      if (Array.isArray(value)) {
        const items = await Promise.all(value.map(async (item) => {
          var _a;
          if (typeof item.media !== "object") {
            return await Promise.resolve(item);
          }
          const attachmentId = crypto2.randomBytes(16).toString("hex");
          await attachFormMedia(form, item.media, attachmentId, agent);
          const thumb = (_a = item.thumb) !== null && _a !== void 0 ? _a : item.thumbnail;
          if (typeof thumb === "object") {
            const thumbAttachmentId = crypto2.randomBytes(16).toString("hex");
            await attachFormMedia(form, thumb, thumbAttachmentId, agent);
            return {
              ...item,
              media: `attach://${attachmentId}`,
              thumbnail: `attach://${thumbAttachmentId}`
            };
          }
          return { ...item, media: `attach://${attachmentId}` };
        }));
        return form.addPart({
          headers: { "content-disposition": `form-data; name="${id}"` },
          body: JSON.stringify(items)
        });
      }
      if (value && typeof value === "object" && (0, check_1.hasProp)(value, "media") && (0, check_1.hasProp)(value, "type") && typeof value.media !== "undefined" && typeof value.type !== "undefined") {
        const attachmentId = crypto2.randomBytes(16).toString("hex");
        await attachFormMedia(form, value.media, attachmentId, agent);
        return form.addPart({
          headers: { "content-disposition": `form-data; name="${id}"` },
          body: JSON.stringify({
            ...value,
            media: `attach://${attachmentId}`
          })
        });
      }
      return await attachFormMedia(form, value, id, agent);
    }
    __name(attachFormValue, "attachFormValue");
    async function attachFormMedia(form, media, id, agent) {
      var _a, _b, _c;
      let fileName = (_a = media.filename) !== null && _a !== void 0 ? _a : `${id}.${(_b = DEFAULT_EXTENSIONS[id]) !== null && _b !== void 0 ? _b : "dat"}`;
      if ("url" in media && media.url !== void 0) {
        const timeout = 5e5;
        const res = await (0, node_fetch_1.default)(media.url, { agent, timeout });
        return form.addPart({
          headers: {
            "content-disposition": `form-data; name="${id}"; filename="${fileName}"`
          },
          body: res.body
        });
      }
      if ("source" in media && media.source) {
        let mediaSource = media.source;
        if (typeof media.source === "string") {
          const source = await (0, promises_1.realpath)(media.source);
          if ((await (0, promises_1.stat)(source)).isFile()) {
            fileName = (_c = media.filename) !== null && _c !== void 0 ? _c : path.basename(media.source);
            mediaSource = await fs.createReadStream(media.source);
          } else {
            throw new TypeError(`Unable to upload '${media.source}', not a file`);
          }
        }
        if (isStream(mediaSource) || Buffer.isBuffer(mediaSource)) {
          form.addPart({
            headers: {
              "content-disposition": `form-data; name="${id}"; filename="${fileName}"`
            },
            body: mediaSource
          });
        }
      }
    }
    __name(attachFormMedia, "attachFormMedia");
    async function answerToWebhook(response, payload, options) {
      if (!includesMedia(payload)) {
        if (!response.headersSent) {
          response.setHeader("content-type", "application/json");
        }
        response.end(JSON.stringify(payload), "utf-8");
        return true;
      }
      const { headers, body } = await buildFormDataConfig(payload, options.attachmentAgent);
      if (!response.headersSent) {
        for (const [key, value] of Object.entries(headers)) {
          response.setHeader(key, value);
        }
      }
      await new Promise((resolve) => {
        response.on("finish", resolve);
        body.pipe(response);
      });
      return true;
    }
    __name(answerToWebhook, "answerToWebhook");
    function redactToken(error3) {
      error3.message = error3.message.replace(/\/(bot|user)(\d+):[^/]+\//, "/$1$2:[REDACTED]/");
      throw error3;
    }
    __name(redactToken, "redactToken");
    var ApiClient = class {
      static {
        __name(this, "ApiClient");
      }
      constructor(token, options, response) {
        this.token = token;
        this.response = response;
        this.options = {
          ...DEFAULT_OPTIONS2,
          ...(0, compact_1.compactOptions)(options)
        };
        if (this.options.apiRoot.startsWith("http://")) {
          this.options.agent = void 0;
        }
      }
      /**
       * If set to `true`, first _eligible_ call will avoid performing a POST request.
       * Note that such a call:
       * 1. cannot report errors or return meaningful values,
       * 2. resolves before bot API has a chance to process it,
       * 3. prematurely confirms the update as processed.
       *
       * https://core.telegram.org/bots/faq#how-can-i-make-requests-in-response-to-updates
       * https://github.com/telegraf/telegraf/pull/1250
       */
      set webhookReply(enable) {
        this.options.webhookReply = enable;
      }
      get webhookReply() {
        return this.options.webhookReply;
      }
      async callApi(method, payload, { signal } = {}) {
        const { token, options, response } = this;
        if (options.webhookReply && (response === null || response === void 0 ? void 0 : response.writableEnded) === false && WEBHOOK_REPLY_METHOD_ALLOWLIST.has(method)) {
          debug3("Call via webhook", method, payload);
          return await answerToWebhook(response, { method, ...payload }, options);
        }
        if (!token) {
          throw new error_1.default({
            error_code: 401,
            description: "Bot Token is required"
          });
        }
        debug3("HTTP call", method, payload);
        const config2 = includesMedia(payload) ? await buildFormDataConfig({ method, ...payload }, options.attachmentAgent) : await buildJSONConfig(payload);
        const apiUrl = new url_1.URL(`./${options.apiMode}${token}${options.testEnv ? "/test" : ""}/${method}`, options.apiRoot);
        config2.agent = options.agent;
        config2.signal = signal;
        config2.timeout = 5e5;
        const res = await (0, node_fetch_1.default)(apiUrl, config2).catch(redactToken);
        if (res.status >= 500) {
          const errorPayload = {
            error_code: res.status,
            description: res.statusText
          };
          throw new error_1.default(errorPayload, { method, payload });
        }
        const data = await res.json();
        if (!data.ok) {
          debug3("API call failed", data);
          throw new error_1.default(data, { method, payload });
        }
        return data.result;
      }
    };
    exports.default = ApiClient;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/helpers/formatting.js
var require_formatting = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/helpers/formatting.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.linkOrMention = exports.createFmt = exports.join = exports.FmtString = void 0;
    var util_1 = require_util();
    var FmtString2 = class _FmtString {
      static {
        __name(this, "FmtString");
      }
      constructor(text, entities) {
        this.text = text;
        if (entities) {
          this.entities = entities;
          this.parse_mode = void 0;
        }
      }
      static normalise(content) {
        if (content instanceof _FmtString)
          return content;
        return new _FmtString(String(content));
      }
    };
    exports.FmtString = FmtString2;
    var isArray = Array.isArray;
    var _add = /* @__PURE__ */ __name((base, next) => {
      var _a;
      const len = base.text.length;
      if (next instanceof FmtString2) {
        base.text = `${base.text}${next.text}`;
        for (let i = 0; i < (((_a = next.entities) === null || _a === void 0 ? void 0 : _a.length) || 0); i++) {
          const entity = next.entities[i];
          base.entities.push({ ...entity, offset: entity.offset + len });
        }
      } else
        base.text = `${base.text}${next}`;
    }, "_add");
    var join = /* @__PURE__ */ __name((fragments, separator) => {
      const result = new FmtString2("");
      result.entities = [];
      const iter = fragments[Symbol.iterator]();
      let curr = iter.next();
      while (!curr.done) {
        _add(result, curr.value);
        curr = iter.next();
        if (separator && !curr.done)
          _add(result, separator);
      }
      if (result.entities.length)
        result.parse_mode = void 0;
      else
        delete result.entities;
      return result;
    }, "join");
    exports.join = join;
    function createFmt(kind, opts) {
      return /* @__PURE__ */ __name(function fmt(parts, ...items) {
        var _a;
        parts = isArray(parts) ? parts : [parts];
        const result = (0, exports.join)((0, util_1.zip)(parts, items));
        if (kind) {
          (_a = result.entities) !== null && _a !== void 0 ? _a : result.entities = [];
          result.entities.unshift({
            type: kind,
            offset: 0,
            length: result.text.length,
            ...opts
          });
          result.parse_mode = void 0;
        }
        return result;
      }, "fmt");
    }
    __name(createFmt, "createFmt");
    exports.createFmt = createFmt;
    var linkOrMention = /* @__PURE__ */ __name((content, data) => {
      const { text, entities = [] } = FmtString2.normalise(content);
      entities.unshift(Object.assign(data, { offset: 0, length: text.length }));
      return new FmtString2(text, entities);
    }, "linkOrMention");
    exports.linkOrMention = linkOrMention;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/format.js
var require_format = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/format.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mention = exports.link = exports.pre = exports.code = exports.quote = exports.underline = exports.strikethrough = exports.spoiler = exports.italic = exports.bold = exports.fmt = exports.join = exports.FmtString = void 0;
    var formatting_1 = require_formatting();
    Object.defineProperty(exports, "FmtString", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return formatting_1.FmtString;
    }, "get") });
    exports.join = formatting_1.join;
    exports.fmt = (0, formatting_1.createFmt)();
    exports.bold = (0, formatting_1.createFmt)("bold");
    exports.italic = (0, formatting_1.createFmt)("italic");
    exports.spoiler = (0, formatting_1.createFmt)("spoiler");
    exports.strikethrough = //
    (0, formatting_1.createFmt)("strikethrough");
    exports.underline = //
    (0, formatting_1.createFmt)("underline");
    exports.quote = //
    (0, formatting_1.createFmt)("blockquote");
    exports.code = (0, formatting_1.createFmt)("code");
    var pre = /* @__PURE__ */ __name((language) => (0, formatting_1.createFmt)("pre", { language }), "pre");
    exports.pre = pre;
    var link3 = /* @__PURE__ */ __name((content, url) => (
      //
      (0, formatting_1.linkOrMention)(content, { type: "text_link", url })
    ), "link");
    exports.link = link3;
    var mention = /* @__PURE__ */ __name((name, user) => typeof user === "number" ? (0, exports.link)(name, "tg://user?id=" + user) : (0, formatting_1.linkOrMention)(name, {
      type: "text_mention",
      user
    }), "mention");
    exports.mention = mention;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/telegram.js
var require_telegram = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/telegram.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Telegram = void 0;
    var client_1 = __importDefault(require_client());
    var path_1 = require_path();
    var url_1 = require_url();
    var format_1 = require_format();
    var util_1 = require_util();
    var Telegram = class extends client_1.default {
      static {
        __name(this, "Telegram");
      }
      /**
       * Get basic information about the bot
       */
      getMe() {
        return this.callApi("getMe", {});
      }
      /**
       * Get basic info about a file and prepare it for downloading.
       * @param fileId Id of file to get link to
       */
      getFile(fileId) {
        return this.callApi("getFile", { file_id: fileId });
      }
      /**
       * Get download link to a file.
       */
      async getFileLink(fileId) {
        if (typeof fileId === "string") {
          fileId = await this.getFile(fileId);
        } else if (fileId.file_path === void 0) {
          fileId = await this.getFile(fileId.file_id);
        }
        if (fileId.file_path !== void 0 && (0, path_1.isAbsolute)(fileId.file_path)) {
          const url = new url_1.URL(this.options.apiRoot);
          url.port = "";
          url.pathname = fileId.file_path;
          url.protocol = "file:";
          return url;
        }
        return new url_1.URL(`./file/${this.options.apiMode}${this.token}${this.options.testEnv ? "/test" : ""}/${fileId.file_path}`, this.options.apiRoot);
      }
      /**
       * Directly request incoming updates.
       * You should probably use `Telegraf::launch` instead.
       */
      getUpdates(timeout, limit, offset, allowedUpdates) {
        return this.callApi("getUpdates", {
          allowed_updates: allowedUpdates,
          limit,
          offset,
          timeout
        });
      }
      getWebhookInfo() {
        return this.callApi("getWebhookInfo", {});
      }
      getGameHighScores(userId, inlineMessageId, chatId, messageId) {
        return this.callApi("getGameHighScores", {
          user_id: userId,
          inline_message_id: inlineMessageId,
          chat_id: chatId,
          message_id: messageId
        });
      }
      setGameScore(userId, score, inlineMessageId, chatId, messageId, editMessage = true, force = false) {
        return this.callApi("setGameScore", {
          force,
          score,
          user_id: userId,
          inline_message_id: inlineMessageId,
          chat_id: chatId,
          message_id: messageId,
          disable_edit_message: !editMessage
        });
      }
      /**
       * Specify a url to receive incoming updates via an outgoing webhook.
       * @param url HTTPS url to send updates to. Use an empty string to remove webhook integration
       */
      setWebhook(url, extra) {
        return this.callApi("setWebhook", {
          url,
          ...extra
        });
      }
      /**
       * Remove webhook integration.
       */
      deleteWebhook(extra) {
        return this.callApi("deleteWebhook", {
          ...extra
        });
      }
      /**
       * Send a text message.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param text Text of the message to be sent
       */
      sendMessage(chatId, text, extra) {
        const t = format_1.FmtString.normalise(text);
        return this.callApi("sendMessage", { chat_id: chatId, ...extra, ...t });
      }
      /**
       * Forward existing message.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param fromChatId Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
       * @param messageId Message identifier in the chat specified in from_chat_id
       */
      forwardMessage(chatId, fromChatId, messageId, extra) {
        return this.callApi("forwardMessage", {
          chat_id: chatId,
          from_chat_id: fromChatId,
          message_id: messageId,
          ...extra
        });
      }
      /**
       * Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param fromChatId Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
       * @param messageIds Identifiers of 1-100 messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order.
       */
      forwardMessages(chatId, fromChatId, messageIds, extra) {
        return this.callApi("forwardMessages", {
          chat_id: chatId,
          from_chat_id: fromChatId,
          message_ids: messageIds,
          ...extra
        });
      }
      /**
       * Use this method when you need to tell the user that something is happening on the bot's side.
       * The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status).
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       */
      sendChatAction(chat_id, action, extra) {
        return this.callApi("sendChatAction", { chat_id, action, ...extra });
      }
      /**
       * Use this method to change the chosen reactions on a message. Service messages can't be reacted to.
       * Automatically forwarded messages from a channel to its discussion group have the same available
       * reactions as messages in the channel. In albums, bots must react to the first message.
       * @param chat_id Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
       * @param message_id Identifier of the target message
       * @param reaction New list of reaction types to set on the message. Currently, as non-premium users, bots can set up
       * to one reaction per message. A custom emoji reaction can be used if it is either already present on the message
       * or explicitly allowed by chat administrators.
       * @param is_big Pass True to set the reaction with a big animation
       * @returns
       */
      setMessageReaction(chat_id, message_id, reaction, is_big) {
        return this.callApi("setMessageReaction", {
          chat_id,
          message_id,
          reaction,
          is_big
        });
      }
      getUserProfilePhotos(userId, offset, limit) {
        return this.callApi("getUserProfilePhotos", {
          user_id: userId,
          offset,
          limit
        });
      }
      /**
       * Send point on the map.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       */
      sendLocation(chatId, latitude, longitude, extra) {
        return this.callApi("sendLocation", {
          chat_id: chatId,
          latitude,
          longitude,
          ...extra
        });
      }
      sendVenue(chatId, latitude, longitude, title2, address, extra) {
        return this.callApi("sendVenue", {
          latitude,
          longitude,
          title: title2,
          address,
          chat_id: chatId,
          ...extra
        });
      }
      /**
       * @param chatId Unique identifier for the target private chat
       */
      sendInvoice(chatId, invoice, extra) {
        return this.callApi("sendInvoice", {
          chat_id: chatId,
          ...invoice,
          ...extra
        });
      }
      sendContact(chatId, phoneNumber, firstName, extra) {
        return this.callApi("sendContact", {
          chat_id: chatId,
          phone_number: phoneNumber,
          first_name: firstName,
          ...extra
        });
      }
      /**
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       */
      sendPhoto(chatId, photo, extra) {
        return this.callApi("sendPhoto", {
          chat_id: chatId,
          photo,
          ...(0, util_1.fmtCaption)(extra)
        });
      }
      /**
       * Send a dice, which will have a random value from 1 to 6.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       */
      sendDice(chatId, extra) {
        return this.callApi("sendDice", { chat_id: chatId, ...extra });
      }
      /**
       * Send general files. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       */
      sendDocument(chatId, document2, extra) {
        return this.callApi("sendDocument", {
          chat_id: chatId,
          document: document2,
          ...(0, util_1.fmtCaption)(extra)
        });
      }
      /**
       * Send audio files, if you want Telegram clients to display them in the music player.
       * Your audio must be in the .mp3 format.
       * Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       */
      sendAudio(chatId, audio, extra) {
        return this.callApi("sendAudio", {
          chat_id: chatId,
          audio,
          ...(0, util_1.fmtCaption)(extra)
        });
      }
      /**
       * Send .webp, animated .tgs, or video .webm stickers
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       */
      sendSticker(chatId, sticker, extra) {
        return this.callApi("sendSticker", { chat_id: chatId, sticker, ...extra });
      }
      /**
       * Send video files, Telegram clients support mp4 videos (other formats may be sent as Document).
       * Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       */
      sendVideo(chatId, video, extra) {
        return this.callApi("sendVideo", {
          chat_id: chatId,
          video,
          ...(0, util_1.fmtCaption)(extra)
        });
      }
      /**
       * Send .gif animations.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       */
      sendAnimation(chatId, animation, extra) {
        return this.callApi("sendAnimation", {
          chat_id: chatId,
          animation,
          ...(0, util_1.fmtCaption)(extra)
        });
      }
      /**
       * Send video messages.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       */
      sendVideoNote(chatId, videoNote, extra) {
        return this.callApi("sendVideoNote", {
          chat_id: chatId,
          video_note: videoNote,
          ...extra
        });
      }
      /**
       * Send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .ogg file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       */
      sendVoice(chatId, voice, extra) {
        return this.callApi("sendVoice", {
          chat_id: chatId,
          voice,
          ...(0, util_1.fmtCaption)(extra)
        });
      }
      /**
       * @param chatId Unique identifier for the target chat
       * @param gameShortName Short name of the game, serves as the unique identifier for the game. Set up your games via Botfather.
       */
      sendGame(chatId, gameName, extra) {
        return this.callApi("sendGame", {
          chat_id: chatId,
          game_short_name: gameName,
          ...extra
        });
      }
      /**
       * Send a group of photos or videos as an album.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param media A JSON-serialized array describing photos and videos to be sent, must include 2–10 items
       */
      sendMediaGroup(chatId, media, extra) {
        return this.callApi("sendMediaGroup", { chat_id: chatId, media, ...extra });
      }
      /**
       * Send a native poll.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param question Poll question, 1-255 characters
       * @param options A JSON-serialized list of answer options, 2-10 strings 1-100 characters each
       */
      sendPoll(chatId, question, options, extra) {
        return this.callApi("sendPoll", {
          chat_id: chatId,
          type: "regular",
          question,
          options,
          ...extra
        });
      }
      /**
       * Send a native quiz.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param question Poll question, 1-255 characters
       * @param options A JSON-serialized list of answer options, 2-10 strings 1-100 characters each
       */
      sendQuiz(chatId, question, options, extra) {
        return this.callApi("sendPoll", {
          chat_id: chatId,
          type: "quiz",
          question,
          options,
          ...extra
        });
      }
      /**
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param messageId Identifier of the original message with the poll
       */
      stopPoll(chatId, messageId, extra) {
        return this.callApi("stopPoll", {
          chat_id: chatId,
          message_id: messageId,
          ...extra
        });
      }
      /**
       * Get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.).
       * @param chatId Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
       */
      getChat(chatId) {
        return this.callApi("getChat", { chat_id: chatId });
      }
      /**
       * @param chatId Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
       */
      getChatAdministrators(chatId) {
        return this.callApi("getChatAdministrators", { chat_id: chatId });
      }
      /**
       * Get information about a member of a chat.
       * @param chatId Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
       * @param userId Unique identifier of the target user
       */
      getChatMember(chatId, userId) {
        return this.callApi("getChatMember", { chat_id: chatId, user_id: userId });
      }
      /**
       * Get the number of members in a chat.
       * @param chatId Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
       */
      getChatMembersCount(chatId) {
        return this.callApi("getChatMembersCount", { chat_id: chatId });
      }
      /**
       * Send answers to an inline query.
       * No more than 50 results per query are allowed.
       */
      answerInlineQuery(inlineQueryId, results, extra) {
        return this.callApi("answerInlineQuery", {
          inline_query_id: inlineQueryId,
          results,
          ...extra
        });
      }
      setChatPermissions(chatId, permissions, extra) {
        return this.callApi("setChatPermissions", {
          chat_id: chatId,
          permissions,
          ...extra
        });
      }
      /**
       * Kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
       * @param chatId Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)
       * @param untilDate Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever
       */
      banChatMember(chatId, userId, untilDate, extra) {
        return this.callApi("banChatMember", {
          chat_id: chatId,
          user_id: userId,
          until_date: untilDate,
          ...extra
        });
      }
      /**
       * Kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
       * @param chatId Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)
       * @param untilDate Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever
       * @deprecated since API 5.3. Use {@link Telegram.banChatMember}
       */
      get kickChatMember() {
        return this.banChatMember;
      }
      /**
       * Promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass False for all boolean parameters to demote a user.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
       */
      promoteChatMember(chatId, userId, extra) {
        return this.callApi("promoteChatMember", {
          chat_id: chatId,
          user_id: userId,
          ...extra
        });
      }
      /**
       * Restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass True for all boolean parameters to lift restrictions from a user.
       * @param chatId Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
       */
      restrictChatMember(chatId, userId, extra) {
        return this.callApi("restrictChatMember", {
          chat_id: chatId,
          user_id: userId,
          ...extra
        });
      }
      setChatAdministratorCustomTitle(chatId, userId, title2) {
        return this.callApi("setChatAdministratorCustomTitle", {
          chat_id: chatId,
          user_id: userId,
          custom_title: title2
        });
      }
      /**
       * Export an invite link to a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       */
      exportChatInviteLink(chatId) {
        return this.callApi("exportChatInviteLink", { chat_id: chatId });
      }
      createChatInviteLink(chatId, extra) {
        return this.callApi("createChatInviteLink", {
          chat_id: chatId,
          ...extra
        });
      }
      createInvoiceLink(invoice) {
        return this.callApi("createInvoiceLink", {
          ...invoice
        });
      }
      editChatInviteLink(chatId, inviteLink, extra) {
        return this.callApi("editChatInviteLink", {
          chat_id: chatId,
          invite_link: inviteLink,
          ...extra
        });
      }
      revokeChatInviteLink(chatId, inviteLink) {
        return this.callApi("revokeChatInviteLink", {
          chat_id: chatId,
          invite_link: inviteLink
        });
      }
      setChatPhoto(chatId, photo) {
        return this.callApi("setChatPhoto", { chat_id: chatId, photo });
      }
      deleteChatPhoto(chatId) {
        return this.callApi("deleteChatPhoto", { chat_id: chatId });
      }
      /**
       * Change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
       * @param chatId Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)
       * @param title New chat title, 1-255 characters
       */
      setChatTitle(chatId, title2) {
        return this.callApi("setChatTitle", { chat_id: chatId, title: title2 });
      }
      setChatDescription(chatId, description) {
        return this.callApi("setChatDescription", { chat_id: chatId, description });
      }
      /**
       * Pin a message in a group, a supergroup, or a channel. The bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in the supergroup or 'can_edit_messages' admin right in the channel.
       * @param chatId Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
       */
      pinChatMessage(chatId, messageId, extra) {
        return this.callApi("pinChatMessage", {
          chat_id: chatId,
          message_id: messageId,
          ...extra
        });
      }
      /**
       * Unpin a message in a group, a supergroup, or a channel. The bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in the supergroup or 'can_edit_messages' admin right in the channel.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       */
      unpinChatMessage(chatId, messageId) {
        return this.callApi("unpinChatMessage", {
          chat_id: chatId,
          message_id: messageId
        });
      }
      /**
       * Clear the list of pinned messages in a chat.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       */
      unpinAllChatMessages(chatId) {
        return this.callApi("unpinAllChatMessages", { chat_id: chatId });
      }
      /**
       * Use this method for your bot to leave a group, supergroup or channel.
       * @param chatId Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
       */
      leaveChat(chatId) {
        return this.callApi("leaveChat", { chat_id: chatId });
      }
      /**
       * Unban a user from a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
       * @param chatId Unique identifier for the target group or username of the target supergroup or channel (in the format @username)
       * @param userId Unique identifier of the target user
       */
      unbanChatMember(chatId, userId, extra) {
        return this.callApi("unbanChatMember", {
          chat_id: chatId,
          user_id: userId,
          ...extra
        });
      }
      answerCbQuery(callbackQueryId, text, extra) {
        return this.callApi("answerCallbackQuery", {
          text,
          callback_query_id: callbackQueryId,
          ...extra
        });
      }
      answerGameQuery(callbackQueryId, url) {
        return this.callApi("answerCallbackQuery", {
          url,
          callback_query_id: callbackQueryId
        });
      }
      /**
       * Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.
       * @param chat_id Unique identifier for the chat or username of the channel (in the format `@channelusername`)
       * @param user_id Unique identifier of the target user
       */
      getUserChatBoosts(chat_id, user_id) {
        return this.callApi("getUserChatBoosts", {
          chat_id,
          user_id
        });
      }
      /**
       * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified,
       * the Bot API will send an Update with a shipping_query field to the bot.
       * Reply to shipping queries.
       * @param ok  Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
       * @param shippingOptions Required if ok is True. A JSON-serialized array of available shipping options.
       * @param errorMessage Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user.
       */
      answerShippingQuery(shippingQueryId, ok, shippingOptions, errorMessage) {
        return this.callApi("answerShippingQuery", {
          ok,
          shipping_query_id: shippingQueryId,
          shipping_options: shippingOptions,
          error_message: errorMessage
        });
      }
      /**
       * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query.
       * Respond to such pre-checkout queries. On success, True is returned.
       * Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
       * @param ok  Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems.
       * @param errorMessage Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.
       */
      answerPreCheckoutQuery(preCheckoutQueryId, ok, errorMessage) {
        return this.callApi("answerPreCheckoutQuery", {
          ok,
          pre_checkout_query_id: preCheckoutQueryId,
          error_message: errorMessage
        });
      }
      answerWebAppQuery(webAppQueryId, result) {
        return this.callApi("answerWebAppQuery", {
          web_app_query_id: webAppQueryId,
          result
        });
      }
      /**
       * Edit text and game messages sent by the bot or via the bot (for inline bots).
       * On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.
       * @param chatId Required if inlineMessageId is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param messageId Required if inlineMessageId is not specified. Identifier of the sent message
       * @param inlineMessageId Required if chatId and messageId are not specified. Identifier of the inline message
       * @param text New text of the message
       */
      editMessageText(chatId, messageId, inlineMessageId, text, extra) {
        const t = format_1.FmtString.normalise(text);
        return this.callApi("editMessageText", {
          chat_id: chatId,
          message_id: messageId,
          inline_message_id: inlineMessageId,
          ...extra,
          ...t
        });
      }
      /**
       * Edit captions of messages sent by the bot or via the bot (for inline bots).
       * On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.
       * @param chatId Required if inlineMessageId is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param messageId Required if inlineMessageId is not specified. Identifier of the sent message
       * @param inlineMessageId Required if chatId and messageId are not specified. Identifier of the inline message
       * @param caption New caption of the message
       * @param markup A JSON-serialized object for an inline keyboard.
       */
      editMessageCaption(chatId, messageId, inlineMessageId, caption, extra) {
        return this.callApi("editMessageCaption", {
          chat_id: chatId,
          message_id: messageId,
          inline_message_id: inlineMessageId,
          ...extra,
          ...(0, util_1.fmtCaption)({ caption })
        });
      }
      /**
       * Edit animation, audio, document, photo, or video messages.
       * If a message is a part of a message album, then it can be edited only to a photo or a video.
       * Otherwise, message type can be changed arbitrarily.
       * When inline message is edited, new file can't be uploaded.
       * Use previously uploaded file via its file_id or specify a URL.
       * @param chatId Required if inlineMessageId is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param messageId Required if inlineMessageId is not specified. Identifier of the sent message
       * @param inlineMessageId Required if chatId and messageId are not specified. Identifier of the inline message
       * @param media New media of message
       * @param extra Additional parameters, such as reply_markup
       */
      editMessageMedia(chatId, messageId, inlineMessageId, media, extra) {
        return this.callApi("editMessageMedia", {
          chat_id: chatId,
          message_id: messageId,
          inline_message_id: inlineMessageId,
          media: (0, util_1.fmtCaption)(media),
          ...extra
        });
      }
      /**
       * Edit only the reply markup of messages sent by the bot or via the bot (for inline bots).
       * @param chatId Required if inlineMessageId is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param messageId Required if inlineMessageId is not specified. Identifier of the sent message
       * @param inlineMessageId Required if chatId and messageId are not specified. Identifier of the inline message
       * @param markup A JSON-serialized object for an inline keyboard.
       * @returns If edited message is sent by the bot, the edited Message is returned, otherwise True is returned.
       */
      editMessageReplyMarkup(chatId, messageId, inlineMessageId, markup) {
        return this.callApi("editMessageReplyMarkup", {
          chat_id: chatId,
          message_id: messageId,
          inline_message_id: inlineMessageId,
          reply_markup: markup
        });
      }
      editMessageLiveLocation(chatId, messageId, inlineMessageId, latitude, longitude, extra) {
        return this.callApi("editMessageLiveLocation", {
          latitude,
          longitude,
          chat_id: chatId,
          message_id: messageId,
          inline_message_id: inlineMessageId,
          ...extra
        });
      }
      stopMessageLiveLocation(chatId, messageId, inlineMessageId, markup) {
        return this.callApi("stopMessageLiveLocation", {
          chat_id: chatId,
          message_id: messageId,
          inline_message_id: inlineMessageId,
          reply_markup: markup
        });
      }
      /**
       * Delete a message, including service messages, with the following limitations:
       * - A message can only be deleted if it was sent less than 48 hours ago.
       * - Bots can delete outgoing messages in groups and supergroups.
       * - Bots granted can_post_messages permissions can delete outgoing messages in channels.
       * - If the bot is an administrator of a group, it can delete any message there.
       * - If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param messageId Identifier of the message to delete
       */
      deleteMessage(chatId, messageId) {
        return this.callApi("deleteMessage", {
          chat_id: chatId,
          message_id: messageId
        });
      }
      /**
       * Use this method to delete multiple messages simultaneously. If some of the specified messages can't be found, they are skipped.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param messageIds Identifiers of 1-100 messages to delete. See deleteMessage for limitations on which messages can be deleted
       */
      deleteMessages(chatId, messageIds) {
        return this.callApi("deleteMessages", {
          chat_id: chatId,
          message_ids: messageIds
        });
      }
      setChatStickerSet(chatId, setName) {
        return this.callApi("setChatStickerSet", {
          chat_id: chatId,
          sticker_set_name: setName
        });
      }
      deleteChatStickerSet(chatId) {
        return this.callApi("deleteChatStickerSet", { chat_id: chatId });
      }
      /**
       * Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user.
       * Requires no parameters. Returns an Array of Sticker objects.
       *
       * @see https://core.telegram.org/bots/api#getforumtopiciconstickers
       */
      getForumTopicIconStickers() {
        return this.callApi("getForumTopicIconStickers", {});
      }
      /**
       * Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this
       * to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a
       * ForumTopic object.
       *
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param name Topic name, 1-128 characters
       *
       * @see https://core.telegram.org/bots/api#createforumtopic
       */
      createForumTopic(chat_id, name, extra) {
        return this.callApi("createForumTopic", {
          chat_id,
          name,
          ...extra
        });
      }
      /**
       * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in
       * the chat for this to work and must have can_manage_topics administrator rights, unless it is the creator of the
       * topic. Returns True on success.
       *
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param message_thread_id Unique identifier for the target message thread of the forum topic
       *
       * @see https://core.telegram.org/bots/api#editforumtopic
       */
      editForumTopic(chat_id, message_thread_id, extra) {
        return this.callApi("editForumTopic", {
          chat_id,
          message_thread_id,
          ...extra
        });
      }
      /**
       * Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat
       * for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic.
       * Returns True on success.
       *
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param message_thread_id Unique identifier for the target message thread of the forum topic
       *
       * @see https://core.telegram.org/bots/api#closeforumtopic
       */
      closeForumTopic(chat_id, message_thread_id) {
        return this.callApi("closeForumTopic", {
          chat_id,
          message_thread_id
        });
      }
      /**
       * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat
       * for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic.
       * Returns True on success.
       *
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param message_thread_id Unique identifier for the target message thread of the forum topic
       *
       * @see https://core.telegram.org/bots/api#reopenforumtopic
       */
      reopenForumTopic(chat_id, message_thread_id) {
        return this.callApi("reopenForumTopic", {
          chat_id,
          message_thread_id
        });
      }
      /**
       * Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an
       * administrator in the chat for this to work and must have the can_delete_messages administrator rights.
       * Returns True on success.
       *
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param message_thread_id Unique identifier for the target message thread of the forum topic
       *
       * @see https://core.telegram.org/bots/api#deleteforumtopic
       */
      deleteForumTopic(chat_id, message_thread_id) {
        return this.callApi("deleteForumTopic", {
          chat_id,
          message_thread_id
        });
      }
      /**
       * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat
       * for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
       *
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param message_thread_id Unique identifier for the target message thread of the forum topic
       *
       * @see https://core.telegram.org/bots/api#unpinallforumtopicmessages
       */
      unpinAllForumTopicMessages(chat_id, message_thread_id) {
        return this.callApi("unpinAllForumTopicMessages", {
          chat_id,
          message_thread_id
        });
      }
      /**
       * Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator
       * in the chat for this to work and must have can_manage_topics administrator rights. Returns True on success.
       *
       * @param chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
       * @param name New topic name, 1-128 characters
       *
       * @see https://core.telegram.org/bots/api#editgeneralforumtopic
       */
      editGeneralForumTopic(chat_id, name) {
        return this.callApi("editGeneralForumTopic", { chat_id, name });
      }
      /**
       * Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the
       * chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
       *
       * @param chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
       *
       * @see https://core.telegram.org/bots/api#closegeneralforumtopic
       */
      closeGeneralForumTopic(chat_id) {
        return this.callApi("closeGeneralForumTopic", { chat_id });
      }
      /**
       * Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in
       * the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically
       * unhidden if it was hidden. Returns True on success.
       *
       * @param chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
       *
       * @see https://core.telegram.org/bots/api#reopengeneralforumtopic
       */
      reopenGeneralForumTopic(chat_id) {
        return this.callApi("reopenGeneralForumTopic", { chat_id });
      }
      /**
       * Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat
       * for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed
       * if it was open. Returns True on success.
       *
       * @param chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
       *
       * @see https://core.telegram.org/bots/api#hidegeneralforumtopic
       */
      hideGeneralForumTopic(chat_id) {
        return this.callApi("hideGeneralForumTopic", { chat_id });
      }
      /**
       * Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the
       * chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
       *
       * @param chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
       *
       * @see https://core.telegram.org/bots/api#unhidegeneralforumtopic
       */
      unhideGeneralForumTopic(chat_id) {
        return this.callApi("unhideGeneralForumTopic", { chat_id });
      }
      /**
       * Use this method to clear the list of pinned messages in a General forum topic.
       * The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator
       * right in the supergroup.
       *
       * @param chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
       */
      unpinAllGeneralForumTopicMessages(chat_id) {
        return this.callApi("unpinAllGeneralForumTopicMessages", { chat_id });
      }
      getStickerSet(name) {
        return this.callApi("getStickerSet", { name });
      }
      /**
       * Upload a .png file with a sticker for later use in createNewStickerSet and addStickerToSet methods (can be used multiple times).
       * https://core.telegram.org/bots/api#sending-files
       * @param ownerId User identifier of sticker file owner
       * @param stickerFile Png image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px.
       */
      uploadStickerFile(ownerId, sticker, sticker_format) {
        return this.callApi("uploadStickerFile", {
          user_id: ownerId,
          sticker_format,
          sticker
        });
      }
      /**
       * Create new sticker set owned by a user. The bot will be able to edit the created sticker set.
       * @param ownerId User identifier of created sticker set owner
       * @param name Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in “_by_<bot username>”. <bot_username> is case insensitive. 1-64 characters.
       * @param title Sticker set title, 1-64 characters
       */
      createNewStickerSet(ownerId, name, title2, stickerData) {
        return this.callApi("createNewStickerSet", {
          name,
          title: title2,
          user_id: ownerId,
          ...stickerData
        });
      }
      /**
       * Add a new sticker to a set created by the bot.
       * @param ownerId User identifier of sticker set owner
       * @param name Sticker set name
       */
      addStickerToSet(ownerId, name, stickerData) {
        return this.callApi("addStickerToSet", {
          name,
          user_id: ownerId,
          ...stickerData
        });
      }
      /**
       * Move a sticker in a set created by the bot to a specific position.
       * @param sticker File identifier of the sticker
       * @param position New sticker position in the set, zero-based
       */
      setStickerPositionInSet(sticker, position) {
        return this.callApi("setStickerPositionInSet", {
          sticker,
          position
        });
      }
      /**
       * @deprecated since API 6.8. Use {@link Telegram.setStickerSetThumbnail}
       */
      get setStickerSetThumb() {
        return this.setStickerSetThumbnail;
      }
      /**
       * Use this method to set the thumbnail of a regular or mask sticker set.
       * The format of the thumbnail file must match the format of the stickers in the set.
       * @param name Sticker set name
       * @param userId User identifier of the sticker set owner
       * @param thumbnail A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size
       * and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to
       * 32 kilobytes in size (see
       * [animated sticker technical requirements](https://core.telegram.org/stickers#animated-sticker-requirements)),
       * or a WEBM video with the thumbnail up to 32 kilobytes in size; see
       * [video sticker technical requirements](https://core.telegram.org/stickers#video-sticker-requirements).
       * Pass a file_id as a String to send a file that already exists on the Telegram servers, pass a
       * HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using
       * Input helpers. Animated and video sticker set thumbnails can't be uploaded via HTTP URL.
       * If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.
       */
      setStickerSetThumbnail(name, userId, thumbnail) {
        return this.callApi("setStickerSetThumbnail", {
          name,
          user_id: userId,
          thumbnail
        });
      }
      setStickerMaskPosition(sticker, mask_position) {
        return this.callApi("setStickerMaskPosition", { sticker, mask_position });
      }
      setStickerKeywords(sticker, keywords) {
        return this.callApi("setStickerKeywords", { sticker, keywords });
      }
      setStickerEmojiList(sticker, emoji_list) {
        return this.callApi("setStickerEmojiList", { sticker, emoji_list });
      }
      deleteStickerSet(name) {
        return this.callApi("deleteStickerSet", { name });
      }
      setStickerSetTitle(name, title2) {
        return this.callApi("setStickerSetTitle", { name, title: title2 });
      }
      setCustomEmojiStickerSetThumbnail(name, custom_emoji_id) {
        return this.callApi("setCustomEmojiStickerSetThumbnail", {
          name,
          custom_emoji_id
        });
      }
      /**
       * Delete a sticker from a set created by the bot.
       * @param sticker File identifier of the sticker
       */
      deleteStickerFromSet(sticker) {
        return this.callApi("deleteStickerFromSet", { sticker });
      }
      getCustomEmojiStickers(custom_emoji_ids) {
        return this.callApi("getCustomEmojiStickers", { custom_emoji_ids });
      }
      /**
       * Change the list of the bot's commands.
       * @param commands A list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.
       */
      setMyCommands(commands, extra) {
        return this.callApi("setMyCommands", { commands, ...extra });
      }
      deleteMyCommands(extra = {}) {
        return this.callApi("deleteMyCommands", extra);
      }
      /**
       * Get the current list of the bot's commands.
       */
      getMyCommands(extra = {}) {
        return this.callApi("getMyCommands", extra);
      }
      /**
       * Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty.
       * @param description New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language.
       * @param language_code A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description.
       */
      setMyDescription(description, language_code) {
        return this.callApi("setMyDescription", { description, language_code });
      }
      /**
       * Use this method to change the bot's name.
       * @param name New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language.
       * @param language_code A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name.
       */
      setMyName(name, language_code) {
        return this.callApi("setMyName", { name, language_code });
      }
      /**
       * Use this method to get the current bot name for the given user language.
       * @param language_code A two-letter ISO 639-1 language code or an empty string
       */
      getMyName(language_code) {
        return this.callApi("getMyName", { language_code });
      }
      /**
       * Use this method to get the current bot description for the given user language.
       * @param language_code A two-letter ISO 639-1 language code.
       */
      getMyDescription(language_code) {
        return this.callApi("getMyDescription", { language_code });
      }
      /**
       * Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot.
       * @param description New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language.
       * @param language_code A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description.
       */
      setMyShortDescription(short_description, language_code) {
        return this.callApi("setMyShortDescription", {
          short_description,
          language_code
        });
      }
      /**
       * Use this method to get the current bot short description for the given user language.
       * @param language_code A two-letter ISO 639-1 language code or an empty string
       */
      getMyShortDescription(language_code) {
        return this.callApi("getMyShortDescription", { language_code });
      }
      setPassportDataErrors(userId, errors) {
        return this.callApi("setPassportDataErrors", {
          user_id: userId,
          errors
        });
      }
      /**
       * Send copy of existing message.
       * @deprecated use `copyMessage` instead
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param message Received message object
       */
      sendCopy(chatId, message, extra) {
        return this.copyMessage(chatId, message.chat.id, message.message_id, extra);
      }
      /**
       * Send copy of existing message.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param fromChatId Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
       * @param messageId Message identifier in the chat specified in from_chat_id
       */
      copyMessage(chatId, fromChatId, messageId, extra) {
        return this.callApi("copyMessage", {
          chat_id: chatId,
          from_chat_id: fromChatId,
          message_id: messageId,
          ...(0, util_1.fmtCaption)(extra)
        });
      }
      /**
       * Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param fromChatId Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
       * @param messageIds Identifiers of 1-100 messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order.
       */
      copyMessages(chatId, fromChatId, messageIds, extra) {
        return this.callApi("copyMessages", {
          chat_id: chatId,
          from_chat_id: fromChatId,
          message_ids: messageIds,
          ...extra
        });
      }
      /**
       * Approve a chat join request.
       * The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param userId Unique identifier of the target user
       */
      approveChatJoinRequest(chatId, userId) {
        return this.callApi("approveChatJoinRequest", {
          chat_id: chatId,
          user_id: userId
        });
      }
      /**
       * Decline a chat join request.
       * The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param userId Unique identifier of the target user
       */
      declineChatJoinRequest(chatId, userId) {
        return this.callApi("declineChatJoinRequest", {
          chat_id: chatId,
          user_id: userId
        });
      }
      /**
       * Ban a channel chat in a supergroup or a channel. The owner of the chat will not be able to send messages and join live streams on behalf of the chat, unless it is unbanned first.
       * The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param senderChatId Unique identifier of the target sender chat
       */
      banChatSenderChat(chatId, senderChatId, extra) {
        return this.callApi("banChatSenderChat", {
          chat_id: chatId,
          sender_chat_id: senderChatId,
          ...extra
        });
      }
      /**
       * Unban a previously banned channel chat in a supergroup or channel.
       * The bot must be an administrator for this to work and must have the appropriate administrator rights.
       * @param chatId Unique identifier for the target chat or username of the target channel (in the format @channelusername)
       * @param senderChatId Unique identifier of the target sender chat
       */
      unbanChatSenderChat(chatId, senderChatId) {
        return this.callApi("unbanChatSenderChat", {
          chat_id: chatId,
          sender_chat_id: senderChatId
        });
      }
      /**
       * Use this method to change the bot's menu button in a private chat, or the default menu button. Returns true on success.
       * @param chatId Unique identifier for the target private chat. If not specified, default bot's menu button will be changed.
       * @param menuButton An object for the bot's new menu button.
       */
      setChatMenuButton({ chatId, menuButton } = {}) {
        return this.callApi("setChatMenuButton", {
          chat_id: chatId,
          menu_button: menuButton
        });
      }
      /**
       * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.
       * @param chatId Unique identifier for the target private chat. If not specified, default bot's menu button will be returned.
       */
      getChatMenuButton({ chatId } = {}) {
        return this.callApi("getChatMenuButton", {
          chat_id: chatId
        });
      }
      /**
       * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels.
       * These rights will be suggested to users, but they are are free to modify the list before adding the bot.
       */
      setMyDefaultAdministratorRights({ rights, forChannels } = {}) {
        return this.callApi("setMyDefaultAdministratorRights", {
          rights,
          for_channels: forChannels
        });
      }
      /**
       * Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.
       * @param forChannels Pass true to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned.
       */
      getMyDefaultAdministratorRights({ forChannels } = {}) {
        return this.callApi("getMyDefaultAdministratorRights", {
          for_channels: forChannels
        });
      }
      /**
       * Log out from the cloud Bot API server before launching the bot locally.
       */
      logOut() {
        return this.callApi("logOut", {});
      }
      /**
       * Close the bot instance before moving it from one local server to another.
       */
      close() {
        return this.callApi("close", {});
      }
    };
    exports.Telegram = Telegram;
    exports.default = Telegram;
  }
});

// node_modules/.pnpm/buffer-fill@1.0.0/node_modules/buffer-fill/index.js
var require_buffer_fill = __commonJS({
  "node_modules/.pnpm/buffer-fill@1.0.0/node_modules/buffer-fill/index.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var hasFullSupport = (function() {
      try {
        if (!Buffer.isEncoding("latin1")) {
          return false;
        }
        var buf = Buffer.alloc ? Buffer.alloc(4) : new Buffer(4);
        buf.fill("ab", "ucs2");
        return buf.toString("hex") === "61006200";
      } catch (_) {
        return false;
      }
    })();
    function isSingleByte(val) {
      return val.length === 1 && val.charCodeAt(0) < 256;
    }
    __name(isSingleByte, "isSingleByte");
    function fillWithNumber(buffer, val, start, end) {
      if (start < 0 || end > buffer.length) {
        throw new RangeError("Out of range index");
      }
      start = start >>> 0;
      end = end === void 0 ? buffer.length : end >>> 0;
      if (end > start) {
        buffer.fill(val, start, end);
      }
      return buffer;
    }
    __name(fillWithNumber, "fillWithNumber");
    function fillWithBuffer(buffer, val, start, end) {
      if (start < 0 || end > buffer.length) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return buffer;
      }
      start = start >>> 0;
      end = end === void 0 ? buffer.length : end >>> 0;
      var pos = start;
      var len = val.length;
      while (pos <= end - len) {
        val.copy(buffer, pos);
        pos += len;
      }
      if (pos !== end) {
        val.copy(buffer, pos, 0, end - pos);
      }
      return buffer;
    }
    __name(fillWithBuffer, "fillWithBuffer");
    function fill(buffer, val, start, end, encoding) {
      if (hasFullSupport) {
        return buffer.fill(val, start, end, encoding);
      }
      if (typeof val === "number") {
        return fillWithNumber(buffer, val, start, end);
      }
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = buffer.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = buffer.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (encoding === "latin1") {
          encoding = "binary";
        }
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val === "") {
          return fillWithNumber(buffer, 0, start, end);
        }
        if (isSingleByte(val)) {
          return fillWithNumber(buffer, val.charCodeAt(0), start, end);
        }
        val = new Buffer(val, encoding);
      }
      if (Buffer.isBuffer(val)) {
        return fillWithBuffer(buffer, val, start, end);
      }
      return fillWithNumber(buffer, 0, start, end);
    }
    __name(fill, "fill");
    module.exports = fill;
  }
});

// node_modules/.pnpm/buffer-alloc-unsafe@1.1.0/node_modules/buffer-alloc-unsafe/index.js
var require_buffer_alloc_unsafe = __commonJS({
  "node_modules/.pnpm/buffer-alloc-unsafe@1.1.0/node_modules/buffer-alloc-unsafe/index.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function allocUnsafe(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be a number');
      }
      if (size < 0) {
        throw new RangeError('"size" argument must not be negative');
      }
      if (Buffer.allocUnsafe) {
        return Buffer.allocUnsafe(size);
      } else {
        return new Buffer(size);
      }
    }
    __name(allocUnsafe, "allocUnsafe");
    module.exports = allocUnsafe;
  }
});

// node_modules/.pnpm/buffer-alloc@1.2.0/node_modules/buffer-alloc/index.js
var require_buffer_alloc = __commonJS({
  "node_modules/.pnpm/buffer-alloc@1.2.0/node_modules/buffer-alloc/index.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var bufferFill = require_buffer_fill();
    var allocUnsafe = require_buffer_alloc_unsafe();
    module.exports = /* @__PURE__ */ __name(function alloc(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be a number');
      }
      if (size < 0) {
        throw new RangeError('"size" argument must not be negative');
      }
      if (Buffer.alloc) {
        return Buffer.alloc(size, fill, encoding);
      }
      var buffer = allocUnsafe(size);
      if (size === 0) {
        return buffer;
      }
      if (fill === void 0) {
        return bufferFill(buffer, 0);
      }
      if (typeof encoding !== "string") {
        encoding = void 0;
      }
      return bufferFill(buffer, fill, encoding);
    }, "alloc");
  }
});

// node_modules/.pnpm/safe-compare@1.1.4/node_modules/safe-compare/index.js
var require_safe_compare = __commonJS({
  "node_modules/.pnpm/safe-compare@1.1.4/node_modules/safe-compare/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var crypto2 = require_crypto();
    var bufferAlloc = require_buffer_alloc();
    var safeCompare = /* @__PURE__ */ __name(function safeCompare2(a, b) {
      var strA = String(a);
      var strB = String(b);
      var lenA = strA.length;
      var result = 0;
      if (lenA !== strB.length) {
        strB = strA;
        result = 1;
      }
      for (var i = 0; i < lenA; i++) {
        result |= strA.charCodeAt(i) ^ strB.charCodeAt(i);
      }
      return result === 0;
    }, "safeCompare");
    var nativeTimingSafeEqual = /* @__PURE__ */ __name(function nativeTimingSafeEqual2(a, b) {
      var strA = String(a);
      var strB = String(b);
      var aLen = Buffer.byteLength(strA);
      var bLen = Buffer.byteLength(strB);
      var bufA = bufferAlloc(aLen, 0, "utf8");
      bufA.write(strA);
      var bufB = bufferAlloc(aLen, 0, "utf8");
      bufB.write(strB);
      return crypto2.timingSafeEqual(bufA, bufB) && aLen === bLen;
    }, "nativeTimingSafeEqual");
    module.exports = typeof crypto2.timingSafeEqual !== "undefined" ? nativeTimingSafeEqual : safeCompare;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/telegraf.js
var require_telegraf = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/telegraf.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Telegraf = void 0;
    var crypto2 = __importStar(require_crypto());
    var http = __importStar(require_http());
    var https = __importStar(require_https());
    var composer_1 = require_composer();
    var compact_1 = require_compact();
    var context_1 = __importDefault(require_context());
    var debug_1 = __importDefault(require_browser());
    var webhook_1 = __importDefault(require_webhook());
    var polling_1 = require_polling();
    var p_timeout_1 = __importDefault(require_p_timeout());
    var telegram_1 = __importDefault(require_telegram());
    var url_1 = require_url();
    var safeCompare = require_safe_compare();
    var debug3 = (0, debug_1.default)("telegraf:main");
    var DEFAULT_OPTIONS2 = {
      telegram: {},
      handlerTimeout: 9e4,
      contextType: context_1.default
    };
    function always(x) {
      return () => x;
    }
    __name(always, "always");
    var anoop = always(Promise.resolve());
    var TOKEN_HEADER = "x-telegram-bot-api-secret-token";
    var Telegraf2 = class extends composer_1.Composer {
      static {
        __name(this, "Telegraf");
      }
      constructor(token, options) {
        super();
        this.context = {};
        this.webhookFilter = function(req) {
          const debug4 = (0, debug_1.default)("telegraf:webhook");
          if (req.method === "POST") {
            if (safeCompare(this.path, req.url)) {
              if (!this.secretToken)
                return true;
              else {
                const token2 = req.headers[TOKEN_HEADER];
                if (safeCompare(this.secretToken, token2))
                  return true;
                else
                  debug4("Secret token does not match:", token2, this.secretToken);
              }
            } else
              debug4("Path does not match:", req.url, this.path);
          } else
            debug4("Unexpected request method, not POST. Received:", req.method);
          return false;
        };
        this.handleError = (err, ctx) => {
          process.exitCode = 1;
          console.error("Unhandled error while processing", ctx.update);
          throw err;
        };
        this.options = {
          ...DEFAULT_OPTIONS2,
          ...(0, compact_1.compactOptions)(options)
        };
        this.telegram = new telegram_1.default(token, this.options.telegram);
        debug3("Created a `Telegraf` instance");
      }
      get token() {
        return this.telegram.token;
      }
      /** @deprecated use `ctx.telegram.webhookReply` */
      set webhookReply(webhookReply) {
        this.telegram.webhookReply = webhookReply;
      }
      /** @deprecated use `ctx.telegram.webhookReply` */
      get webhookReply() {
        return this.telegram.webhookReply;
      }
      /**
       * _Override_ error handling
       */
      catch(handler) {
        this.handleError = handler;
        return this;
      }
      /**
       * You must call `bot.telegram.setWebhook` for this to work.
       * You should probably use {@link Telegraf.createWebhook} instead.
       */
      webhookCallback(path = "/", opts = {}) {
        const { secretToken } = opts;
        return (0, webhook_1.default)(this.webhookFilter.bind({ hookPath: path, path, secretToken }), (update, res) => this.handleUpdate(update, res));
      }
      getDomainOpts(opts) {
        var _a;
        const protocol = opts.domain.startsWith("https://") || opts.domain.startsWith("http://");
        if (protocol)
          debug3("Unexpected protocol in domain, telegraf will use https:", opts.domain);
        const domain2 = protocol ? new url_1.URL(opts.domain).host : opts.domain;
        const path = (_a = opts.path) !== null && _a !== void 0 ? _a : `/telegraf/${this.secretPathComponent()}`;
        const url = `https://${domain2}${path}`;
        return { domain: domain2, path, url };
      }
      /**
       * Specify a url to receive incoming updates via webhook.
       * Returns an Express-style middleware you can pass to app.use()
       */
      async createWebhook(opts) {
        const { domain: domain2, path, ...extra } = opts;
        const domainOpts = this.getDomainOpts({ domain: domain2, path });
        await this.telegram.setWebhook(domainOpts.url, extra);
        debug3(`Webhook set to ${domainOpts.url}`);
        return this.webhookCallback(domainOpts.path, {
          secretToken: extra.secret_token
        });
      }
      startPolling(allowedUpdates = []) {
        this.polling = new polling_1.Polling(this.telegram, allowedUpdates);
        return this.polling.loop(async (update) => {
          await this.handleUpdate(update);
        });
      }
      startWebhook(path, tlsOptions, port, host, cb, secretToken) {
        const webhookCb = this.webhookCallback(path, { secretToken });
        const callback = typeof cb === "function" ? (req, res) => webhookCb(req, res, () => cb(req, res)) : webhookCb;
        this.webhookServer = tlsOptions != null ? https.createServer(tlsOptions, callback) : http.createServer(callback);
        this.webhookServer.listen(port, host, () => {
          debug3("Webhook listening on port: %s", port);
        });
        return this;
      }
      secretPathComponent() {
        return crypto2.createHash("sha3-256").update(this.token).update(process.version).digest("hex");
      }
      /**
       * @see https://github.com/telegraf/telegraf/discussions/1344#discussioncomment-335700
       */
      async launch(config2 = {}, onLaunch) {
        var _a, _b;
        const [cfg, onMe] = typeof config2 === "function" ? [{}, config2] : [config2, onLaunch];
        const drop_pending_updates = cfg.dropPendingUpdates;
        const allowed_updates = cfg.allowedUpdates;
        const webhook = cfg.webhook;
        debug3("Connecting to Telegram");
        (_a = this.botInfo) !== null && _a !== void 0 ? _a : this.botInfo = await this.telegram.getMe();
        onMe === null || onMe === void 0 ? void 0 : onMe();
        debug3(`Launching @${this.botInfo.username}`);
        if (webhook === void 0) {
          await this.telegram.deleteWebhook({ drop_pending_updates });
          debug3("Bot started with long polling");
          await this.startPolling(allowed_updates);
          return;
        }
        const domainOpts = this.getDomainOpts({
          domain: webhook.domain,
          path: (_b = webhook.path) !== null && _b !== void 0 ? _b : webhook.hookPath
        });
        const { tlsOptions, port, host, cb, secretToken } = webhook;
        this.startWebhook(domainOpts.path, tlsOptions, port, host, cb, secretToken);
        await this.telegram.setWebhook(domainOpts.url, {
          drop_pending_updates,
          allowed_updates,
          ip_address: webhook.ipAddress,
          max_connections: webhook.maxConnections,
          secret_token: webhook.secretToken,
          certificate: webhook.certificate
        });
        debug3(`Bot started with webhook @ ${domainOpts.url}`);
      }
      stop(reason = "unspecified") {
        var _a, _b;
        debug3("Stopping bot... Reason:", reason);
        if (this.polling === void 0 && this.webhookServer === void 0) {
          throw new Error("Bot is not running!");
        }
        (_a = this.webhookServer) === null || _a === void 0 ? void 0 : _a.close();
        (_b = this.polling) === null || _b === void 0 ? void 0 : _b.stop();
      }
      async handleUpdate(update, webhookResponse) {
        var _a, _b;
        (_a = this.botInfo) !== null && _a !== void 0 ? _a : this.botInfo = (debug3("Update %d is waiting for `botInfo` to be initialized", update.update_id), await ((_b = this.botInfoCall) !== null && _b !== void 0 ? _b : this.botInfoCall = this.telegram.getMe()));
        debug3("Processing update", update.update_id);
        const tg = new telegram_1.default(this.token, this.telegram.options, webhookResponse);
        const TelegrafContext = this.options.contextType;
        const ctx = new TelegrafContext(update, tg, this.botInfo);
        Object.assign(ctx, this.context);
        try {
          await (0, p_timeout_1.default)(Promise.resolve(this.middleware()(ctx, anoop)), this.options.handlerTimeout);
        } catch (err) {
          return await this.handleError(err, ctx);
        } finally {
          if ((webhookResponse === null || webhookResponse === void 0 ? void 0 : webhookResponse.writableEnded) === false) {
            webhookResponse.end();
          }
          debug3("Finished processing update", update.update_id);
        }
      }
    };
    exports.Telegraf = Telegraf2;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/router.js
var require_router = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/router.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Router = void 0;
    var composer_1 = __importDefault(require_composer());
    var Router = class {
      static {
        __name(this, "Router");
      }
      constructor(routeFn, handlers = /* @__PURE__ */ new Map()) {
        this.routeFn = routeFn;
        this.handlers = handlers;
        this.otherwiseHandler = composer_1.default.passThru();
        if (typeof routeFn !== "function") {
          throw new Error("Missing routing function");
        }
      }
      on(route, ...fns) {
        if (fns.length === 0) {
          throw new TypeError("At least one handler must be provided");
        }
        this.handlers.set(route, composer_1.default.compose(fns));
        return this;
      }
      otherwise(...fns) {
        if (fns.length === 0) {
          throw new TypeError("At least one otherwise handler must be provided");
        }
        this.otherwiseHandler = composer_1.default.compose(fns);
        return this;
      }
      middleware() {
        return composer_1.default.lazy((ctx) => {
          var _a;
          const result = this.routeFn(ctx);
          if (result == null) {
            return this.otherwiseHandler;
          }
          Object.assign(ctx, result.context);
          Object.assign(ctx.state, result.state);
          return (_a = this.handlers.get(result.route)) !== null && _a !== void 0 ? _a : this.otherwiseHandler;
        });
      }
    };
    exports.Router = Router;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/button.js
var require_button = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/button.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.webApp = exports.login = exports.pay = exports.game = exports.switchToCurrentChat = exports.switchToChat = exports.callback = exports.url = exports.channelRequest = exports.groupRequest = exports.botRequest = exports.userRequest = exports.pollRequest = exports.locationRequest = exports.contactRequest = exports.text = void 0;
    function text(text2, hide = false) {
      return { text: text2, hide };
    }
    __name(text, "text");
    exports.text = text;
    function contactRequest(text2, hide = false) {
      return { text: text2, request_contact: true, hide };
    }
    __name(contactRequest, "contactRequest");
    exports.contactRequest = contactRequest;
    function locationRequest(text2, hide = false) {
      return { text: text2, request_location: true, hide };
    }
    __name(locationRequest, "locationRequest");
    exports.locationRequest = locationRequest;
    function pollRequest(text2, type, hide = false) {
      return { text: text2, request_poll: { type }, hide };
    }
    __name(pollRequest, "pollRequest");
    exports.pollRequest = pollRequest;
    function userRequest(text2, request_id, extra, hide = false) {
      return {
        text: text2,
        request_users: { request_id, ...extra },
        hide
      };
    }
    __name(userRequest, "userRequest");
    exports.userRequest = userRequest;
    function botRequest(text2, request_id, extra, hide = false) {
      return {
        text: text2,
        request_users: { request_id, user_is_bot: true, ...extra },
        hide
      };
    }
    __name(botRequest, "botRequest");
    exports.botRequest = botRequest;
    function groupRequest(text2, request_id, extra, hide = false) {
      return {
        text: text2,
        request_chat: { request_id, chat_is_channel: false, ...extra },
        hide
      };
    }
    __name(groupRequest, "groupRequest");
    exports.groupRequest = groupRequest;
    function channelRequest(text2, request_id, extra, hide = false) {
      return {
        text: text2,
        request_chat: { request_id, chat_is_channel: true, ...extra },
        hide
      };
    }
    __name(channelRequest, "channelRequest");
    exports.channelRequest = channelRequest;
    function url(text2, url2, hide = false) {
      return { text: text2, url: url2, hide };
    }
    __name(url, "url");
    exports.url = url;
    function callback(text2, data, hide = false) {
      return { text: text2, callback_data: data, hide };
    }
    __name(callback, "callback");
    exports.callback = callback;
    function switchToChat(text2, value, hide = false) {
      return { text: text2, switch_inline_query: value, hide };
    }
    __name(switchToChat, "switchToChat");
    exports.switchToChat = switchToChat;
    function switchToCurrentChat(text2, value, hide = false) {
      return { text: text2, switch_inline_query_current_chat: value, hide };
    }
    __name(switchToCurrentChat, "switchToCurrentChat");
    exports.switchToCurrentChat = switchToCurrentChat;
    function game(text2, hide = false) {
      return { text: text2, callback_game: {}, hide };
    }
    __name(game, "game");
    exports.game = game;
    function pay(text2, hide = false) {
      return { text: text2, pay: true, hide };
    }
    __name(pay, "pay");
    exports.pay = pay;
    function login(text2, url2, opts = {}, hide = false) {
      return {
        text: text2,
        login_url: { ...opts, url: url2 },
        hide
      };
    }
    __name(login, "login");
    exports.login = login;
    function webApp(text2, url2, hide = false) {
      return {
        text: text2,
        web_app: { url: url2 },
        hide
      };
    }
    __name(webApp, "webApp");
    exports.webApp = webApp;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/markup.js
var require_markup = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/markup.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.inlineKeyboard = exports.keyboard = exports.forceReply = exports.removeKeyboard = exports.button = exports.Markup = void 0;
    var check_1 = require_check();
    var Markup2 = class _Markup {
      static {
        __name(this, "Markup");
      }
      constructor(reply_markup) {
        this.reply_markup = reply_markup;
      }
      selective(value = true) {
        return new _Markup({ ...this.reply_markup, selective: value });
      }
      placeholder(placeholder) {
        return new _Markup({
          ...this.reply_markup,
          input_field_placeholder: placeholder
        });
      }
      resize(value = true) {
        return new _Markup({
          ...this.reply_markup,
          resize_keyboard: value
        });
      }
      oneTime(value = true) {
        return new _Markup({
          ...this.reply_markup,
          one_time_keyboard: value
        });
      }
      persistent(value = true) {
        return new _Markup({
          ...this.reply_markup,
          is_persistent: value
        });
      }
    };
    exports.Markup = Markup2;
    exports.button = __importStar(require_button());
    function removeKeyboard() {
      return new Markup2({ remove_keyboard: true });
    }
    __name(removeKeyboard, "removeKeyboard");
    exports.removeKeyboard = removeKeyboard;
    function forceReply() {
      return new Markup2({ force_reply: true });
    }
    __name(forceReply, "forceReply");
    exports.forceReply = forceReply;
    function keyboard(buttons, options) {
      const keyboard2 = buildKeyboard(buttons, {
        columns: 1,
        ...options
      });
      return new Markup2({ keyboard: keyboard2 });
    }
    __name(keyboard, "keyboard");
    exports.keyboard = keyboard;
    function inlineKeyboard(buttons, options) {
      const inlineKeyboard2 = buildKeyboard(buttons, {
        columns: buttons.length,
        ...options
      });
      return new Markup2({ inline_keyboard: inlineKeyboard2 });
    }
    __name(inlineKeyboard, "inlineKeyboard");
    exports.inlineKeyboard = inlineKeyboard;
    function buildKeyboard(buttons, options) {
      const result = [];
      if (!Array.isArray(buttons)) {
        return result;
      }
      if ((0, check_1.is2D)(buttons)) {
        return buttons.map((row) => row.filter((button) => !button.hide));
      }
      const wrapFn = options.wrap !== void 0 ? options.wrap : (_btn, _index, currentRow2) => currentRow2.length >= options.columns;
      let currentRow = [];
      let index = 0;
      for (const btn of buttons.filter((button) => !button.hide)) {
        if (wrapFn(btn, index, currentRow) && currentRow.length > 0) {
          result.push(currentRow);
          currentRow = [];
        }
        currentRow.push(btn);
        index++;
      }
      if (currentRow.length > 0) {
        result.push(currentRow);
      }
      return result;
    }
    __name(buildKeyboard, "buildKeyboard");
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/telegram-types.js
var require_telegram_types = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/telegram-types.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Markup = void 0;
    var markup_1 = require_markup();
    Object.defineProperty(exports, "Markup", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return markup_1.Markup;
    }, "get") });
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/input.js
var require_input = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/input.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromFileId = exports.fromURL = exports.fromURLStream = exports.fromReadableStream = exports.fromBuffer = exports.fromLocalFile = void 0;
    var fromLocalFile = /* @__PURE__ */ __name((path, filename) => ({ source: path, filename }), "fromLocalFile");
    exports.fromLocalFile = fromLocalFile;
    var fromBuffer = /* @__PURE__ */ __name((buffer, filename) => ({ source: buffer, filename }), "fromBuffer");
    exports.fromBuffer = fromBuffer;
    var fromReadableStream = /* @__PURE__ */ __name((stream, filename) => ({ source: stream, filename }), "fromReadableStream");
    exports.fromReadableStream = fromReadableStream;
    var fromURLStream = /* @__PURE__ */ __name((url, filename) => ({ url: url.toString(), filename }), "fromURLStream");
    exports.fromURLStream = fromURLStream;
    var fromURL = /* @__PURE__ */ __name((url) => url.toString(), "fromURL");
    exports.fromURL = fromURL;
    var fromFileId = /* @__PURE__ */ __name((fileId) => fileId, "fromFileId");
    exports.fromFileId = fromFileId;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/helpers/deunionize.js
var require_deunionize = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/core/helpers/deunionize.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.deunionize = void 0;
    function deunionize(t) {
      return t;
    }
    __name(deunionize, "deunionize");
    exports.deunionize = deunionize;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/session.js
var require_session = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/session.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSessionContext = exports.MemorySessionStore = exports.session = void 0;
    var debug_1 = __importDefault(require_browser());
    var debug3 = (0, debug_1.default)("telegraf:session");
    function session2(options) {
      var _a, _b, _c;
      const prop = (_a = options === null || options === void 0 ? void 0 : options.property) !== null && _a !== void 0 ? _a : "session";
      const getSessionKey = (_b = options === null || options === void 0 ? void 0 : options.getSessionKey) !== null && _b !== void 0 ? _b : defaultGetSessionKey;
      const store = (_c = options === null || options === void 0 ? void 0 : options.store) !== null && _c !== void 0 ? _c : new MemorySessionStore();
      const cache = /* @__PURE__ */ new Map();
      const concurrents = /* @__PURE__ */ new Map();
      return async (ctx, next) => {
        var _a2;
        const updId = ctx.update.update_id;
        let released = false;
        function releaseChecks() {
          if (released && process.env.EXPERIMENTAL_SESSION_CHECKS)
            throw new Error("Session was accessed or assigned to after the middleware chain exhausted. This is a bug in your code. You're probably accessing session asynchronously and missing awaits.");
        }
        __name(releaseChecks, "releaseChecks");
        const key = await getSessionKey(ctx);
        if (!key) {
          ctx[prop] = void 0;
          return await next();
        }
        let cached = cache.get(key);
        if (cached) {
          debug3(`(${updId}) found cached session, reusing from cache`);
          ++cached.counter;
        } else {
          debug3(`(${updId}) did not find cached session`);
          let promise = concurrents.get(key);
          if (promise)
            debug3(`(${updId}) found a concurrent request, reusing promise`);
          else {
            debug3(`(${updId}) fetching from upstream store`);
            promise = store.get(key);
          }
          concurrents.set(key, promise);
          const upstream = await promise;
          concurrents.delete(key);
          debug3(`(${updId}) updating cache`);
          const c2 = cache.get(key);
          if (c2) {
            c2.counter++;
            cached = c2;
          } else {
            cached = { ref: upstream !== null && upstream !== void 0 ? upstream : (_a2 = options === null || options === void 0 ? void 0 : options.defaultSession) === null || _a2 === void 0 ? void 0 : _a2.call(options, ctx), counter: 1 };
            cache.set(key, cached);
          }
        }
        const c = cached;
        let touched = false;
        Object.defineProperty(ctx, prop, {
          get() {
            releaseChecks();
            touched = true;
            return c.ref;
          },
          set(value) {
            releaseChecks();
            touched = true;
            c.ref = value;
          }
        });
        try {
          await next();
          released = true;
        } finally {
          if (--c.counter === 0) {
            debug3(`(${updId}) refcounter reached 0, removing cached`);
            cache.delete(key);
          }
          debug3(`(${updId}) middlewares completed, checking session`);
          if (touched)
            if (c.ref == null) {
              debug3(`(${updId}) ctx.${prop} missing, removing from store`);
              await store.delete(key);
            } else {
              debug3(`(${updId}) ctx.${prop} found, updating store`);
              await store.set(key, c.ref);
            }
        }
      };
    }
    __name(session2, "session");
    exports.session = session2;
    function defaultGetSessionKey(ctx) {
      var _a, _b;
      const fromId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
      const chatId = (_b = ctx.chat) === null || _b === void 0 ? void 0 : _b.id;
      if (fromId == null || chatId == null)
        return void 0;
      return `${fromId}:${chatId}`;
    }
    __name(defaultGetSessionKey, "defaultGetSessionKey");
    var MemorySessionStore = class {
      static {
        __name(this, "MemorySessionStore");
      }
      constructor(ttl = Infinity) {
        this.ttl = ttl;
        this.store = /* @__PURE__ */ new Map();
      }
      get(name) {
        const entry = this.store.get(name);
        if (entry == null) {
          return void 0;
        } else if (entry.expires < Date.now()) {
          this.delete(name);
          return void 0;
        }
        return entry.session;
      }
      set(name, value) {
        const now = Date.now();
        this.store.set(name, { session: value, expires: now + this.ttl });
      }
      delete(name) {
        this.store.delete(name);
      }
    };
    exports.MemorySessionStore = MemorySessionStore;
    function isSessionContext(ctx) {
      return "session" in ctx;
    }
    __name(isSessionContext, "isSessionContext");
    exports.isSessionContext = isSessionContext;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/scenes/context.js
var require_context2 = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/scenes/context.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var composer_1 = __importDefault(require_composer());
    var debug_1 = __importDefault(require_browser());
    var debug3 = (0, debug_1.default)("telegraf:scenes:context");
    var noop3 = /* @__PURE__ */ __name(() => Promise.resolve(), "noop");
    var now = /* @__PURE__ */ __name(() => Math.floor(Date.now() / 1e3), "now");
    var SceneContextScene = class {
      static {
        __name(this, "SceneContextScene");
      }
      constructor(ctx, scenes, options) {
        this.ctx = ctx;
        this.scenes = scenes;
        this.leaving = false;
        const fallbackSessionDefault = {};
        this.options = { defaultSession: fallbackSessionDefault, ...options };
      }
      get session() {
        var _a, _b;
        const defaultSession = Object.assign({}, this.options.defaultSession);
        let session2 = (_b = (_a = this.ctx.session) === null || _a === void 0 ? void 0 : _a.__scenes) !== null && _b !== void 0 ? _b : defaultSession;
        if (session2.expires !== void 0 && session2.expires < now()) {
          session2 = defaultSession;
        }
        if (this.ctx.session === void 0) {
          this.ctx.session = { __scenes: session2 };
        } else {
          this.ctx.session.__scenes = session2;
        }
        return session2;
      }
      get state() {
        var _a;
        var _b;
        return (_a = (_b = this.session).state) !== null && _a !== void 0 ? _a : _b.state = {};
      }
      set state(value) {
        this.session.state = { ...value };
      }
      get current() {
        var _a;
        const sceneId = (_a = this.session.current) !== null && _a !== void 0 ? _a : this.options.default;
        return sceneId === void 0 || !this.scenes.has(sceneId) ? void 0 : this.scenes.get(sceneId);
      }
      reset() {
        if (this.ctx.session !== void 0)
          this.ctx.session.__scenes = Object.assign({}, this.options.defaultSession);
      }
      async enter(sceneId, initialState = {}, silent = false) {
        var _a, _b;
        if (!this.scenes.has(sceneId)) {
          throw new Error(`Can't find scene: ${sceneId}`);
        }
        if (!silent) {
          await this.leave();
        }
        debug3("Entering scene", sceneId, initialState, silent);
        this.session.current = sceneId;
        this.state = initialState;
        const ttl = (_b = (_a = this.current) === null || _a === void 0 ? void 0 : _a.ttl) !== null && _b !== void 0 ? _b : this.options.ttl;
        if (ttl !== void 0) {
          this.session.expires = now() + ttl;
        }
        if (this.current === void 0 || silent) {
          return;
        }
        const handler = "enterMiddleware" in this.current && typeof this.current.enterMiddleware === "function" ? this.current.enterMiddleware() : this.current.middleware();
        return await handler(this.ctx, noop3);
      }
      reenter() {
        return this.session.current === void 0 ? void 0 : this.enter(this.session.current, this.state);
      }
      async leave() {
        if (this.leaving)
          return;
        debug3("Leaving scene");
        try {
          this.leaving = true;
          if (this.current === void 0) {
            return;
          }
          const handler = "leaveMiddleware" in this.current && typeof this.current.leaveMiddleware === "function" ? this.current.leaveMiddleware() : composer_1.default.passThru();
          await handler(this.ctx, noop3);
          return this.reset();
        } finally {
          this.leaving = false;
        }
      }
    };
    exports.default = SceneContextScene;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/scenes/stage.js
var require_stage = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/scenes/stage.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Stage = void 0;
    var session_1 = require_session();
    var context_1 = __importDefault(require_context2());
    var composer_1 = require_composer();
    var Stage = class extends composer_1.Composer {
      static {
        __name(this, "Stage");
      }
      constructor(scenes = [], options) {
        super();
        this.options = { ...options };
        this.scenes = /* @__PURE__ */ new Map();
        scenes.forEach((scene) => this.register(scene));
      }
      register(...scenes) {
        scenes.forEach((scene) => {
          if ((scene === null || scene === void 0 ? void 0 : scene.id) == null || typeof scene.middleware !== "function") {
            throw new Error("telegraf: Unsupported scene");
          }
          this.scenes.set(scene.id, scene);
        });
        return this;
      }
      middleware() {
        const handler = composer_1.Composer.compose([
          (ctx, next) => {
            const scenes = this.scenes;
            const scene = new context_1.default(ctx, scenes, this.options);
            ctx.scene = scene;
            return next();
          },
          super.middleware(),
          composer_1.Composer.lazy((ctx) => {
            var _a;
            return (_a = ctx.scene.current) !== null && _a !== void 0 ? _a : composer_1.Composer.passThru();
          })
        ]);
        return composer_1.Composer.optional(session_1.isSessionContext, handler);
      }
      static enter(...args) {
        return (ctx) => ctx.scene.enter(...args);
      }
      static reenter(...args) {
        return (ctx) => ctx.scene.reenter(...args);
      }
      static leave(...args) {
        return (ctx) => ctx.scene.leave(...args);
      }
    };
    exports.Stage = Stage;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/scenes/base.js
var require_base = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/scenes/base.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseScene = void 0;
    var composer_1 = __importDefault(require_composer());
    var { compose } = composer_1.default;
    var BaseScene = class extends composer_1.default {
      static {
        __name(this, "BaseScene");
      }
      constructor(id, options) {
        const opts = {
          handlers: [],
          enterHandlers: [],
          leaveHandlers: [],
          ...options
        };
        super(...opts.handlers);
        this.id = id;
        this.ttl = opts.ttl;
        this.enterHandler = compose(opts.enterHandlers);
        this.leaveHandler = compose(opts.leaveHandlers);
      }
      enter(...fns) {
        this.enterHandler = compose([this.enterHandler, ...fns]);
        return this;
      }
      leave(...fns) {
        this.leaveHandler = compose([this.leaveHandler, ...fns]);
        return this;
      }
      enterMiddleware() {
        return this.enterHandler;
      }
      leaveMiddleware() {
        return this.leaveHandler;
      }
    };
    exports.BaseScene = BaseScene;
    exports.default = BaseScene;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/scenes/wizard/context.js
var require_context3 = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/scenes/wizard/context.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    var WizardContextWizard = class {
      static {
        __name(this, "WizardContextWizard");
      }
      constructor(ctx, steps) {
        var _a;
        this.ctx = ctx;
        this.steps = steps;
        this.state = ctx.scene.state;
        this.cursor = (_a = ctx.scene.session.cursor) !== null && _a !== void 0 ? _a : 0;
      }
      get step() {
        return this.steps[this.cursor];
      }
      get cursor() {
        return this.ctx.scene.session.cursor;
      }
      set cursor(cursor) {
        this.ctx.scene.session.cursor = cursor;
      }
      selectStep(index) {
        this.cursor = index;
        return this;
      }
      next() {
        return this.selectStep(this.cursor + 1);
      }
      back() {
        return this.selectStep(this.cursor - 1);
      }
    };
    exports.default = WizardContextWizard;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/scenes/wizard/index.js
var require_wizard = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/scenes/wizard/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WizardScene = void 0;
    var base_1 = __importDefault(require_base());
    var context_1 = __importDefault(require_context3());
    var composer_1 = __importDefault(require_composer());
    var WizardScene = class extends base_1.default {
      static {
        __name(this, "WizardScene");
      }
      constructor(id, options, ...steps) {
        let opts;
        let s;
        if (typeof options === "function" || "middleware" in options) {
          opts = void 0;
          s = [options, ...steps];
        } else {
          opts = options;
          s = steps;
        }
        super(id, opts);
        this.steps = s;
      }
      middleware() {
        return composer_1.default.compose([
          (ctx, next) => {
            ctx.wizard = new context_1.default(ctx, this.steps);
            return next();
          },
          super.middleware(),
          (ctx, next) => {
            if (ctx.wizard.step === void 0) {
              ctx.wizard.selectStep(0);
              return ctx.scene.leave();
            }
            return composer_1.default.unwrap(ctx.wizard.step)(ctx, next);
          }
        ]);
      }
      enterMiddleware() {
        return composer_1.default.compose([this.enterHandler, this.middleware()]);
      }
    };
    exports.WizardScene = WizardScene;
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/scenes/index.js
var require_scenes = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/scenes/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WizardContextWizard = exports.WizardScene = exports.BaseScene = exports.SceneContextScene = exports.Stage = void 0;
    var stage_1 = require_stage();
    Object.defineProperty(exports, "Stage", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return stage_1.Stage;
    }, "get") });
    var context_1 = require_context2();
    Object.defineProperty(exports, "SceneContextScene", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(context_1).default;
    }, "get") });
    var base_1 = require_base();
    Object.defineProperty(exports, "BaseScene", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return base_1.BaseScene;
    }, "get") });
    var wizard_1 = require_wizard();
    Object.defineProperty(exports, "WizardScene", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return wizard_1.WizardScene;
    }, "get") });
    var context_2 = require_context3();
    Object.defineProperty(exports, "WizardContextWizard", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(context_2).default;
    }, "get") });
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/scenes.js
var require_scenes2 = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/scenes.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_scenes(), exports);
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/lib/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scenes = exports.MemorySessionStore = exports.session = exports.deunionize = exports.Format = exports.Input = exports.Markup = exports.Types = exports.Telegram = exports.TelegramError = exports.Router = exports.Composer = exports.Context = exports.Telegraf = void 0;
    var telegraf_1 = require_telegraf();
    Object.defineProperty(exports, "Telegraf", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return telegraf_1.Telegraf;
    }, "get") });
    var context_1 = require_context();
    Object.defineProperty(exports, "Context", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return context_1.Context;
    }, "get") });
    var composer_1 = require_composer();
    Object.defineProperty(exports, "Composer", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return composer_1.Composer;
    }, "get") });
    var router_1 = require_router();
    Object.defineProperty(exports, "Router", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return router_1.Router;
    }, "get") });
    var error_1 = require_error();
    Object.defineProperty(exports, "TelegramError", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return error_1.TelegramError;
    }, "get") });
    var telegram_1 = require_telegram();
    Object.defineProperty(exports, "Telegram", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return telegram_1.Telegram;
    }, "get") });
    exports.Types = __importStar(require_telegram_types());
    exports.Markup = __importStar(require_markup());
    exports.Input = __importStar(require_input());
    exports.Format = __importStar(require_format());
    var deunionize_1 = require_deunionize();
    Object.defineProperty(exports, "deunionize", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return deunionize_1.deunionize;
    }, "get") });
    var session_1 = require_session();
    Object.defineProperty(exports, "session", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return session_1.session;
    }, "get") });
    Object.defineProperty(exports, "MemorySessionStore", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return session_1.MemorySessionStore;
    }, "get") });
    exports.Scenes = __importStar(require_scenes2());
  }
});

// node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/browser.js
var browser_exports = {};
__export(browser_exports, {
  Headers: () => Headers3,
  Request: () => Request2,
  Response: () => Response3,
  default: () => browser_default,
  fetch: () => fetch3
});
var getGlobal, globalObject, fetch3, browser_default, Headers3, Request2, Response3;
var init_browser = __esm({
  "node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/browser.js"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    getGlobal = /* @__PURE__ */ __name(function() {
      if (typeof self !== "undefined") {
        return self;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      throw new Error("unable to locate global object");
    }, "getGlobal");
    globalObject = getGlobal();
    fetch3 = globalObject.fetch;
    browser_default = globalObject.fetch.bind(globalObject);
    Headers3 = globalObject.Headers;
    Request2 = globalObject.Request;
    Response3 = globalObject.Response;
  }
});

// node_modules/.pnpm/ws@8.17.1/node_modules/ws/browser.js
var require_browser3 = __commonJS({
  "node_modules/.pnpm/ws@8.17.1/node_modules/ws/browser.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/format.js
var require_format2 = __commonJS({
  "node_modules/.pnpm/telegraf@4.16.3/node_modules/telegraf/format.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = require_format();
  }
});

// node_modules/.pnpm/showdown@2.1.0/node_modules/showdown/dist/showdown.js
var require_showdown = __commonJS({
  "node_modules/.pnpm/showdown@2.1.0/node_modules/showdown/dist/showdown.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    (function() {
      function getDefaultOpts(simple) {
        "use strict";
        var defaultOptions = {
          omitExtraWLInCodeBlocks: {
            defaultValue: false,
            describe: "Omit the default extra whiteline added to code blocks",
            type: "boolean"
          },
          noHeaderId: {
            defaultValue: false,
            describe: "Turn on/off generated header id",
            type: "boolean"
          },
          prefixHeaderId: {
            defaultValue: false,
            describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
            type: "string"
          },
          rawPrefixHeaderId: {
            defaultValue: false,
            describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
            type: "boolean"
          },
          ghCompatibleHeaderId: {
            defaultValue: false,
            describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
            type: "boolean"
          },
          rawHeaderId: {
            defaultValue: false,
            describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
            type: "boolean"
          },
          headerLevelStart: {
            defaultValue: false,
            describe: "The header blocks level start",
            type: "integer"
          },
          parseImgDimensions: {
            defaultValue: false,
            describe: "Turn on/off image dimension parsing",
            type: "boolean"
          },
          simplifiedAutoLink: {
            defaultValue: false,
            describe: "Turn on/off GFM autolink style",
            type: "boolean"
          },
          excludeTrailingPunctuationFromURLs: {
            defaultValue: false,
            describe: "Excludes trailing punctuation from links generated with autoLinking",
            type: "boolean"
          },
          literalMidWordUnderscores: {
            defaultValue: false,
            describe: "Parse midword underscores as literal underscores",
            type: "boolean"
          },
          literalMidWordAsterisks: {
            defaultValue: false,
            describe: "Parse midword asterisks as literal asterisks",
            type: "boolean"
          },
          strikethrough: {
            defaultValue: false,
            describe: "Turn on/off strikethrough support",
            type: "boolean"
          },
          tables: {
            defaultValue: false,
            describe: "Turn on/off tables support",
            type: "boolean"
          },
          tablesHeaderId: {
            defaultValue: false,
            describe: "Add an id to table headers",
            type: "boolean"
          },
          ghCodeBlocks: {
            defaultValue: true,
            describe: "Turn on/off GFM fenced code blocks support",
            type: "boolean"
          },
          tasklists: {
            defaultValue: false,
            describe: "Turn on/off GFM tasklist support",
            type: "boolean"
          },
          smoothLivePreview: {
            defaultValue: false,
            describe: "Prevents weird effects in live previews due to incomplete input",
            type: "boolean"
          },
          smartIndentationFix: {
            defaultValue: false,
            describe: "Tries to smartly fix indentation in es6 strings",
            type: "boolean"
          },
          disableForced4SpacesIndentedSublists: {
            defaultValue: false,
            describe: "Disables the requirement of indenting nested sublists by 4 spaces",
            type: "boolean"
          },
          simpleLineBreaks: {
            defaultValue: false,
            describe: "Parses simple line breaks as <br> (GFM Style)",
            type: "boolean"
          },
          requireSpaceBeforeHeadingText: {
            defaultValue: false,
            describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
            type: "boolean"
          },
          ghMentions: {
            defaultValue: false,
            describe: "Enables github @mentions",
            type: "boolean"
          },
          ghMentionsLink: {
            defaultValue: "https://github.com/{u}",
            describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
            type: "string"
          },
          encodeEmails: {
            defaultValue: true,
            describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
            type: "boolean"
          },
          openLinksInNewWindow: {
            defaultValue: false,
            describe: "Open all links in new windows",
            type: "boolean"
          },
          backslashEscapesHTMLTags: {
            defaultValue: false,
            describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
            type: "boolean"
          },
          emoji: {
            defaultValue: false,
            describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
            type: "boolean"
          },
          underline: {
            defaultValue: false,
            describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
            type: "boolean"
          },
          ellipsis: {
            defaultValue: true,
            describe: "Replaces three dots with the ellipsis unicode character",
            type: "boolean"
          },
          completeHTMLDocument: {
            defaultValue: false,
            describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
            type: "boolean"
          },
          metadata: {
            defaultValue: false,
            describe: "Enable support for document metadata (defined at the top of the document between `\xAB\xAB\xAB` and `\xBB\xBB\xBB` or between `---` and `---`).",
            type: "boolean"
          },
          splitAdjacentBlockquotes: {
            defaultValue: false,
            describe: "Split adjacent blockquote blocks",
            type: "boolean"
          }
        };
        if (simple === false) {
          return JSON.parse(JSON.stringify(defaultOptions));
        }
        var ret = {};
        for (var opt in defaultOptions) {
          if (defaultOptions.hasOwnProperty(opt)) {
            ret[opt] = defaultOptions[opt].defaultValue;
          }
        }
        return ret;
      }
      __name(getDefaultOpts, "getDefaultOpts");
      function allOptionsOn() {
        "use strict";
        var options = getDefaultOpts(true), ret = {};
        for (var opt in options) {
          if (options.hasOwnProperty(opt)) {
            ret[opt] = true;
          }
        }
        return ret;
      }
      __name(allOptionsOn, "allOptionsOn");
      var showdown2 = {}, parsers = {}, extensions = {}, globalOptions = getDefaultOpts(true), setFlavor = "vanilla", flavor = {
        github: {
          omitExtraWLInCodeBlocks: true,
          simplifiedAutoLink: true,
          excludeTrailingPunctuationFromURLs: true,
          literalMidWordUnderscores: true,
          strikethrough: true,
          tables: true,
          tablesHeaderId: true,
          ghCodeBlocks: true,
          tasklists: true,
          disableForced4SpacesIndentedSublists: true,
          simpleLineBreaks: true,
          requireSpaceBeforeHeadingText: true,
          ghCompatibleHeaderId: true,
          ghMentions: true,
          backslashEscapesHTMLTags: true,
          emoji: true,
          splitAdjacentBlockquotes: true
        },
        original: {
          noHeaderId: true,
          ghCodeBlocks: false
        },
        ghost: {
          omitExtraWLInCodeBlocks: true,
          parseImgDimensions: true,
          simplifiedAutoLink: true,
          excludeTrailingPunctuationFromURLs: true,
          literalMidWordUnderscores: true,
          strikethrough: true,
          tables: true,
          tablesHeaderId: true,
          ghCodeBlocks: true,
          tasklists: true,
          smoothLivePreview: true,
          simpleLineBreaks: true,
          requireSpaceBeforeHeadingText: true,
          ghMentions: false,
          encodeEmails: true
        },
        vanilla: getDefaultOpts(true),
        allOn: allOptionsOn()
      };
      showdown2.helper = {};
      showdown2.extensions = {};
      showdown2.setOption = function(key, value) {
        "use strict";
        globalOptions[key] = value;
        return this;
      };
      showdown2.getOption = function(key) {
        "use strict";
        return globalOptions[key];
      };
      showdown2.getOptions = function() {
        "use strict";
        return globalOptions;
      };
      showdown2.resetOptions = function() {
        "use strict";
        globalOptions = getDefaultOpts(true);
      };
      showdown2.setFlavor = function(name) {
        "use strict";
        if (!flavor.hasOwnProperty(name)) {
          throw Error(name + " flavor was not found");
        }
        showdown2.resetOptions();
        var preset = flavor[name];
        setFlavor = name;
        for (var option in preset) {
          if (preset.hasOwnProperty(option)) {
            globalOptions[option] = preset[option];
          }
        }
      };
      showdown2.getFlavor = function() {
        "use strict";
        return setFlavor;
      };
      showdown2.getFlavorOptions = function(name) {
        "use strict";
        if (flavor.hasOwnProperty(name)) {
          return flavor[name];
        }
      };
      showdown2.getDefaultOptions = function(simple) {
        "use strict";
        return getDefaultOpts(simple);
      };
      showdown2.subParser = function(name, func) {
        "use strict";
        if (showdown2.helper.isString(name)) {
          if (typeof func !== "undefined") {
            parsers[name] = func;
          } else {
            if (parsers.hasOwnProperty(name)) {
              return parsers[name];
            } else {
              throw Error("SubParser named " + name + " not registered!");
            }
          }
        }
      };
      showdown2.extension = function(name, ext) {
        "use strict";
        if (!showdown2.helper.isString(name)) {
          throw Error("Extension 'name' must be a string");
        }
        name = showdown2.helper.stdExtName(name);
        if (showdown2.helper.isUndefined(ext)) {
          if (!extensions.hasOwnProperty(name)) {
            throw Error("Extension named " + name + " is not registered!");
          }
          return extensions[name];
        } else {
          if (typeof ext === "function") {
            ext = ext();
          }
          if (!showdown2.helper.isArray(ext)) {
            ext = [ext];
          }
          var validExtension = validate(ext, name);
          if (validExtension.valid) {
            extensions[name] = ext;
          } else {
            throw Error(validExtension.error);
          }
        }
      };
      showdown2.getAllExtensions = function() {
        "use strict";
        return extensions;
      };
      showdown2.removeExtension = function(name) {
        "use strict";
        delete extensions[name];
      };
      showdown2.resetExtensions = function() {
        "use strict";
        extensions = {};
      };
      function validate(extension, name) {
        "use strict";
        var errMsg = name ? "Error in " + name + " extension->" : "Error in unnamed extension", ret = {
          valid: true,
          error: ""
        };
        if (!showdown2.helper.isArray(extension)) {
          extension = [extension];
        }
        for (var i = 0; i < extension.length; ++i) {
          var baseMsg = errMsg + " sub-extension " + i + ": ", ext = extension[i];
          if (typeof ext !== "object") {
            ret.valid = false;
            ret.error = baseMsg + "must be an object, but " + typeof ext + " given";
            return ret;
          }
          if (!showdown2.helper.isString(ext.type)) {
            ret.valid = false;
            ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + " given";
            return ret;
          }
          var type = ext.type = ext.type.toLowerCase();
          if (type === "language") {
            type = ext.type = "lang";
          }
          if (type === "html") {
            type = ext.type = "output";
          }
          if (type !== "lang" && type !== "output" && type !== "listener") {
            ret.valid = false;
            ret.error = baseMsg + "type " + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
            return ret;
          }
          if (type === "listener") {
            if (showdown2.helper.isUndefined(ext.listeners)) {
              ret.valid = false;
              ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
              return ret;
            }
          } else {
            if (showdown2.helper.isUndefined(ext.filter) && showdown2.helper.isUndefined(ext.regex)) {
              ret.valid = false;
              ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
              return ret;
            }
          }
          if (ext.listeners) {
            if (typeof ext.listeners !== "object") {
              ret.valid = false;
              ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + " given";
              return ret;
            }
            for (var ln in ext.listeners) {
              if (ext.listeners.hasOwnProperty(ln)) {
                if (typeof ext.listeners[ln] !== "function") {
                  ret.valid = false;
                  ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln + " must be a function but " + typeof ext.listeners[ln] + " given";
                  return ret;
                }
              }
            }
          }
          if (ext.filter) {
            if (typeof ext.filter !== "function") {
              ret.valid = false;
              ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + " given";
              return ret;
            }
          } else if (ext.regex) {
            if (showdown2.helper.isString(ext.regex)) {
              ext.regex = new RegExp(ext.regex, "g");
            }
            if (!(ext.regex instanceof RegExp)) {
              ret.valid = false;
              ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + " given";
              return ret;
            }
            if (showdown2.helper.isUndefined(ext.replace)) {
              ret.valid = false;
              ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
              return ret;
            }
          }
        }
        return ret;
      }
      __name(validate, "validate");
      showdown2.validateExtension = function(ext) {
        "use strict";
        var validateExtension = validate(ext, null);
        if (!validateExtension.valid) {
          console.warn(validateExtension.error);
          return false;
        }
        return true;
      };
      if (!showdown2.hasOwnProperty("helper")) {
        showdown2.helper = {};
      }
      showdown2.helper.isString = function(a) {
        "use strict";
        return typeof a === "string" || a instanceof String;
      };
      showdown2.helper.isFunction = function(a) {
        "use strict";
        var getType = {};
        return a && getType.toString.call(a) === "[object Function]";
      };
      showdown2.helper.isArray = function(a) {
        "use strict";
        return Array.isArray(a);
      };
      showdown2.helper.isUndefined = function(value) {
        "use strict";
        return typeof value === "undefined";
      };
      showdown2.helper.forEach = function(obj, callback) {
        "use strict";
        if (showdown2.helper.isUndefined(obj)) {
          throw new Error("obj param is required");
        }
        if (showdown2.helper.isUndefined(callback)) {
          throw new Error("callback param is required");
        }
        if (!showdown2.helper.isFunction(callback)) {
          throw new Error("callback param must be a function/closure");
        }
        if (typeof obj.forEach === "function") {
          obj.forEach(callback);
        } else if (showdown2.helper.isArray(obj)) {
          for (var i = 0; i < obj.length; i++) {
            callback(obj[i], i, obj);
          }
        } else if (typeof obj === "object") {
          for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
              callback(obj[prop], prop, obj);
            }
          }
        } else {
          throw new Error("obj does not seem to be an array or an iterable object");
        }
      };
      showdown2.helper.stdExtName = function(s) {
        "use strict";
        return s.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
      };
      function escapeCharactersCallback(wholeMatch, m1) {
        "use strict";
        var charCodeToEscape = m1.charCodeAt(0);
        return "\xA8E" + charCodeToEscape + "E";
      }
      __name(escapeCharactersCallback, "escapeCharactersCallback");
      showdown2.helper.escapeCharactersCallback = escapeCharactersCallback;
      showdown2.helper.escapeCharacters = function(text, charsToEscape, afterBackslash) {
        "use strict";
        var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";
        if (afterBackslash) {
          regexString = "\\\\" + regexString;
        }
        var regex = new RegExp(regexString, "g");
        text = text.replace(regex, escapeCharactersCallback);
        return text;
      };
      showdown2.helper.unescapeHTMLEntities = function(txt) {
        "use strict";
        return txt.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      };
      var rgxFindMatchPos = /* @__PURE__ */ __name(function(str, left, right, flags) {
        "use strict";
        var f = flags || "", g = f.indexOf("g") > -1, x = new RegExp(left + "|" + right, "g" + f.replace(/g/g, "")), l = new RegExp(left, f.replace(/g/g, "")), pos = [], t, s, m, start, end;
        do {
          t = 0;
          while (m = x.exec(str)) {
            if (l.test(m[0])) {
              if (!t++) {
                s = x.lastIndex;
                start = s - m[0].length;
              }
            } else if (t) {
              if (!--t) {
                end = m.index + m[0].length;
                var obj = {
                  left: { start, end: s },
                  match: { start: s, end: m.index },
                  right: { start: m.index, end },
                  wholeMatch: { start, end }
                };
                pos.push(obj);
                if (!g) {
                  return pos;
                }
              }
            }
          }
        } while (t && (x.lastIndex = s));
        return pos;
      }, "rgxFindMatchPos");
      showdown2.helper.matchRecursiveRegExp = function(str, left, right, flags) {
        "use strict";
        var matchPos = rgxFindMatchPos(str, left, right, flags), results = [];
        for (var i = 0; i < matchPos.length; ++i) {
          results.push([
            str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
            str.slice(matchPos[i].match.start, matchPos[i].match.end),
            str.slice(matchPos[i].left.start, matchPos[i].left.end),
            str.slice(matchPos[i].right.start, matchPos[i].right.end)
          ]);
        }
        return results;
      };
      showdown2.helper.replaceRecursiveRegExp = function(str, replacement, left, right, flags) {
        "use strict";
        if (!showdown2.helper.isFunction(replacement)) {
          var repStr = replacement;
          replacement = /* @__PURE__ */ __name(function() {
            return repStr;
          }, "replacement");
        }
        var matchPos = rgxFindMatchPos(str, left, right, flags), finalStr = str, lng = matchPos.length;
        if (lng > 0) {
          var bits = [];
          if (matchPos[0].wholeMatch.start !== 0) {
            bits.push(str.slice(0, matchPos[0].wholeMatch.start));
          }
          for (var i = 0; i < lng; ++i) {
            bits.push(
              replacement(
                str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
                str.slice(matchPos[i].match.start, matchPos[i].match.end),
                str.slice(matchPos[i].left.start, matchPos[i].left.end),
                str.slice(matchPos[i].right.start, matchPos[i].right.end)
              )
            );
            if (i < lng - 1) {
              bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
            }
          }
          if (matchPos[lng - 1].wholeMatch.end < str.length) {
            bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
          }
          finalStr = bits.join("");
        }
        return finalStr;
      };
      showdown2.helper.regexIndexOf = function(str, regex, fromIndex) {
        "use strict";
        if (!showdown2.helper.isString(str)) {
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        }
        if (regex instanceof RegExp === false) {
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        }
        var indexOf = str.substring(fromIndex || 0).search(regex);
        return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
      };
      showdown2.helper.splitAtIndex = function(str, index) {
        "use strict";
        if (!showdown2.helper.isString(str)) {
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        }
        return [str.substring(0, index), str.substring(index)];
      };
      showdown2.helper.encodeEmailAddress = function(mail) {
        "use strict";
        var encode = [
          function(ch) {
            return "&#" + ch.charCodeAt(0) + ";";
          },
          function(ch) {
            return "&#x" + ch.charCodeAt(0).toString(16) + ";";
          },
          function(ch) {
            return ch;
          }
        ];
        mail = mail.replace(/./g, function(ch) {
          if (ch === "@") {
            ch = encode[Math.floor(Math.random() * 2)](ch);
          } else {
            var r = Math.random();
            ch = r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch);
          }
          return ch;
        });
        return mail;
      };
      showdown2.helper.padEnd = /* @__PURE__ */ __name(function padEnd(str, targetLength, padString) {
        "use strict";
        targetLength = targetLength >> 0;
        padString = String(padString || " ");
        if (str.length > targetLength) {
          return String(str);
        } else {
          targetLength = targetLength - str.length;
          if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length);
          }
          return String(str) + padString.slice(0, targetLength);
        }
      }, "padEnd");
      if (typeof console === "undefined") {
        console = {
          warn: /* @__PURE__ */ __name(function(msg) {
            "use strict";
            alert(msg);
          }, "warn"),
          log: /* @__PURE__ */ __name(function(msg) {
            "use strict";
            alert(msg);
          }, "log"),
          error: /* @__PURE__ */ __name(function(msg) {
            "use strict";
            throw msg;
          }, "error")
        };
      }
      showdown2.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
      };
      showdown2.helper.emojis = {
        "+1": "\u{1F44D}",
        "-1": "\u{1F44E}",
        "100": "\u{1F4AF}",
        "1234": "\u{1F522}",
        "1st_place_medal": "\u{1F947}",
        "2nd_place_medal": "\u{1F948}",
        "3rd_place_medal": "\u{1F949}",
        "8ball": "\u{1F3B1}",
        "a": "\u{1F170}\uFE0F",
        "ab": "\u{1F18E}",
        "abc": "\u{1F524}",
        "abcd": "\u{1F521}",
        "accept": "\u{1F251}",
        "aerial_tramway": "\u{1F6A1}",
        "airplane": "\u2708\uFE0F",
        "alarm_clock": "\u23F0",
        "alembic": "\u2697\uFE0F",
        "alien": "\u{1F47D}",
        "ambulance": "\u{1F691}",
        "amphora": "\u{1F3FA}",
        "anchor": "\u2693\uFE0F",
        "angel": "\u{1F47C}",
        "anger": "\u{1F4A2}",
        "angry": "\u{1F620}",
        "anguished": "\u{1F627}",
        "ant": "\u{1F41C}",
        "apple": "\u{1F34E}",
        "aquarius": "\u2652\uFE0F",
        "aries": "\u2648\uFE0F",
        "arrow_backward": "\u25C0\uFE0F",
        "arrow_double_down": "\u23EC",
        "arrow_double_up": "\u23EB",
        "arrow_down": "\u2B07\uFE0F",
        "arrow_down_small": "\u{1F53D}",
        "arrow_forward": "\u25B6\uFE0F",
        "arrow_heading_down": "\u2935\uFE0F",
        "arrow_heading_up": "\u2934\uFE0F",
        "arrow_left": "\u2B05\uFE0F",
        "arrow_lower_left": "\u2199\uFE0F",
        "arrow_lower_right": "\u2198\uFE0F",
        "arrow_right": "\u27A1\uFE0F",
        "arrow_right_hook": "\u21AA\uFE0F",
        "arrow_up": "\u2B06\uFE0F",
        "arrow_up_down": "\u2195\uFE0F",
        "arrow_up_small": "\u{1F53C}",
        "arrow_upper_left": "\u2196\uFE0F",
        "arrow_upper_right": "\u2197\uFE0F",
        "arrows_clockwise": "\u{1F503}",
        "arrows_counterclockwise": "\u{1F504}",
        "art": "\u{1F3A8}",
        "articulated_lorry": "\u{1F69B}",
        "artificial_satellite": "\u{1F6F0}",
        "astonished": "\u{1F632}",
        "athletic_shoe": "\u{1F45F}",
        "atm": "\u{1F3E7}",
        "atom_symbol": "\u269B\uFE0F",
        "avocado": "\u{1F951}",
        "b": "\u{1F171}\uFE0F",
        "baby": "\u{1F476}",
        "baby_bottle": "\u{1F37C}",
        "baby_chick": "\u{1F424}",
        "baby_symbol": "\u{1F6BC}",
        "back": "\u{1F519}",
        "bacon": "\u{1F953}",
        "badminton": "\u{1F3F8}",
        "baggage_claim": "\u{1F6C4}",
        "baguette_bread": "\u{1F956}",
        "balance_scale": "\u2696\uFE0F",
        "balloon": "\u{1F388}",
        "ballot_box": "\u{1F5F3}",
        "ballot_box_with_check": "\u2611\uFE0F",
        "bamboo": "\u{1F38D}",
        "banana": "\u{1F34C}",
        "bangbang": "\u203C\uFE0F",
        "bank": "\u{1F3E6}",
        "bar_chart": "\u{1F4CA}",
        "barber": "\u{1F488}",
        "baseball": "\u26BE\uFE0F",
        "basketball": "\u{1F3C0}",
        "basketball_man": "\u26F9\uFE0F",
        "basketball_woman": "\u26F9\uFE0F&zwj;\u2640\uFE0F",
        "bat": "\u{1F987}",
        "bath": "\u{1F6C0}",
        "bathtub": "\u{1F6C1}",
        "battery": "\u{1F50B}",
        "beach_umbrella": "\u{1F3D6}",
        "bear": "\u{1F43B}",
        "bed": "\u{1F6CF}",
        "bee": "\u{1F41D}",
        "beer": "\u{1F37A}",
        "beers": "\u{1F37B}",
        "beetle": "\u{1F41E}",
        "beginner": "\u{1F530}",
        "bell": "\u{1F514}",
        "bellhop_bell": "\u{1F6CE}",
        "bento": "\u{1F371}",
        "biking_man": "\u{1F6B4}",
        "bike": "\u{1F6B2}",
        "biking_woman": "\u{1F6B4}&zwj;\u2640\uFE0F",
        "bikini": "\u{1F459}",
        "biohazard": "\u2623\uFE0F",
        "bird": "\u{1F426}",
        "birthday": "\u{1F382}",
        "black_circle": "\u26AB\uFE0F",
        "black_flag": "\u{1F3F4}",
        "black_heart": "\u{1F5A4}",
        "black_joker": "\u{1F0CF}",
        "black_large_square": "\u2B1B\uFE0F",
        "black_medium_small_square": "\u25FE\uFE0F",
        "black_medium_square": "\u25FC\uFE0F",
        "black_nib": "\u2712\uFE0F",
        "black_small_square": "\u25AA\uFE0F",
        "black_square_button": "\u{1F532}",
        "blonde_man": "\u{1F471}",
        "blonde_woman": "\u{1F471}&zwj;\u2640\uFE0F",
        "blossom": "\u{1F33C}",
        "blowfish": "\u{1F421}",
        "blue_book": "\u{1F4D8}",
        "blue_car": "\u{1F699}",
        "blue_heart": "\u{1F499}",
        "blush": "\u{1F60A}",
        "boar": "\u{1F417}",
        "boat": "\u26F5\uFE0F",
        "bomb": "\u{1F4A3}",
        "book": "\u{1F4D6}",
        "bookmark": "\u{1F516}",
        "bookmark_tabs": "\u{1F4D1}",
        "books": "\u{1F4DA}",
        "boom": "\u{1F4A5}",
        "boot": "\u{1F462}",
        "bouquet": "\u{1F490}",
        "bowing_man": "\u{1F647}",
        "bow_and_arrow": "\u{1F3F9}",
        "bowing_woman": "\u{1F647}&zwj;\u2640\uFE0F",
        "bowling": "\u{1F3B3}",
        "boxing_glove": "\u{1F94A}",
        "boy": "\u{1F466}",
        "bread": "\u{1F35E}",
        "bride_with_veil": "\u{1F470}",
        "bridge_at_night": "\u{1F309}",
        "briefcase": "\u{1F4BC}",
        "broken_heart": "\u{1F494}",
        "bug": "\u{1F41B}",
        "building_construction": "\u{1F3D7}",
        "bulb": "\u{1F4A1}",
        "bullettrain_front": "\u{1F685}",
        "bullettrain_side": "\u{1F684}",
        "burrito": "\u{1F32F}",
        "bus": "\u{1F68C}",
        "business_suit_levitating": "\u{1F574}",
        "busstop": "\u{1F68F}",
        "bust_in_silhouette": "\u{1F464}",
        "busts_in_silhouette": "\u{1F465}",
        "butterfly": "\u{1F98B}",
        "cactus": "\u{1F335}",
        "cake": "\u{1F370}",
        "calendar": "\u{1F4C6}",
        "call_me_hand": "\u{1F919}",
        "calling": "\u{1F4F2}",
        "camel": "\u{1F42B}",
        "camera": "\u{1F4F7}",
        "camera_flash": "\u{1F4F8}",
        "camping": "\u{1F3D5}",
        "cancer": "\u264B\uFE0F",
        "candle": "\u{1F56F}",
        "candy": "\u{1F36C}",
        "canoe": "\u{1F6F6}",
        "capital_abcd": "\u{1F520}",
        "capricorn": "\u2651\uFE0F",
        "car": "\u{1F697}",
        "card_file_box": "\u{1F5C3}",
        "card_index": "\u{1F4C7}",
        "card_index_dividers": "\u{1F5C2}",
        "carousel_horse": "\u{1F3A0}",
        "carrot": "\u{1F955}",
        "cat": "\u{1F431}",
        "cat2": "\u{1F408}",
        "cd": "\u{1F4BF}",
        "chains": "\u26D3",
        "champagne": "\u{1F37E}",
        "chart": "\u{1F4B9}",
        "chart_with_downwards_trend": "\u{1F4C9}",
        "chart_with_upwards_trend": "\u{1F4C8}",
        "checkered_flag": "\u{1F3C1}",
        "cheese": "\u{1F9C0}",
        "cherries": "\u{1F352}",
        "cherry_blossom": "\u{1F338}",
        "chestnut": "\u{1F330}",
        "chicken": "\u{1F414}",
        "children_crossing": "\u{1F6B8}",
        "chipmunk": "\u{1F43F}",
        "chocolate_bar": "\u{1F36B}",
        "christmas_tree": "\u{1F384}",
        "church": "\u26EA\uFE0F",
        "cinema": "\u{1F3A6}",
        "circus_tent": "\u{1F3AA}",
        "city_sunrise": "\u{1F307}",
        "city_sunset": "\u{1F306}",
        "cityscape": "\u{1F3D9}",
        "cl": "\u{1F191}",
        "clamp": "\u{1F5DC}",
        "clap": "\u{1F44F}",
        "clapper": "\u{1F3AC}",
        "classical_building": "\u{1F3DB}",
        "clinking_glasses": "\u{1F942}",
        "clipboard": "\u{1F4CB}",
        "clock1": "\u{1F550}",
        "clock10": "\u{1F559}",
        "clock1030": "\u{1F565}",
        "clock11": "\u{1F55A}",
        "clock1130": "\u{1F566}",
        "clock12": "\u{1F55B}",
        "clock1230": "\u{1F567}",
        "clock130": "\u{1F55C}",
        "clock2": "\u{1F551}",
        "clock230": "\u{1F55D}",
        "clock3": "\u{1F552}",
        "clock330": "\u{1F55E}",
        "clock4": "\u{1F553}",
        "clock430": "\u{1F55F}",
        "clock5": "\u{1F554}",
        "clock530": "\u{1F560}",
        "clock6": "\u{1F555}",
        "clock630": "\u{1F561}",
        "clock7": "\u{1F556}",
        "clock730": "\u{1F562}",
        "clock8": "\u{1F557}",
        "clock830": "\u{1F563}",
        "clock9": "\u{1F558}",
        "clock930": "\u{1F564}",
        "closed_book": "\u{1F4D5}",
        "closed_lock_with_key": "\u{1F510}",
        "closed_umbrella": "\u{1F302}",
        "cloud": "\u2601\uFE0F",
        "cloud_with_lightning": "\u{1F329}",
        "cloud_with_lightning_and_rain": "\u26C8",
        "cloud_with_rain": "\u{1F327}",
        "cloud_with_snow": "\u{1F328}",
        "clown_face": "\u{1F921}",
        "clubs": "\u2663\uFE0F",
        "cocktail": "\u{1F378}",
        "coffee": "\u2615\uFE0F",
        "coffin": "\u26B0\uFE0F",
        "cold_sweat": "\u{1F630}",
        "comet": "\u2604\uFE0F",
        "computer": "\u{1F4BB}",
        "computer_mouse": "\u{1F5B1}",
        "confetti_ball": "\u{1F38A}",
        "confounded": "\u{1F616}",
        "confused": "\u{1F615}",
        "congratulations": "\u3297\uFE0F",
        "construction": "\u{1F6A7}",
        "construction_worker_man": "\u{1F477}",
        "construction_worker_woman": "\u{1F477}&zwj;\u2640\uFE0F",
        "control_knobs": "\u{1F39B}",
        "convenience_store": "\u{1F3EA}",
        "cookie": "\u{1F36A}",
        "cool": "\u{1F192}",
        "policeman": "\u{1F46E}",
        "copyright": "\xA9\uFE0F",
        "corn": "\u{1F33D}",
        "couch_and_lamp": "\u{1F6CB}",
        "couple": "\u{1F46B}",
        "couple_with_heart_woman_man": "\u{1F491}",
        "couple_with_heart_man_man": "\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F468}",
        "couple_with_heart_woman_woman": "\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F469}",
        "couplekiss_man_man": "\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F468}",
        "couplekiss_man_woman": "\u{1F48F}",
        "couplekiss_woman_woman": "\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F469}",
        "cow": "\u{1F42E}",
        "cow2": "\u{1F404}",
        "cowboy_hat_face": "\u{1F920}",
        "crab": "\u{1F980}",
        "crayon": "\u{1F58D}",
        "credit_card": "\u{1F4B3}",
        "crescent_moon": "\u{1F319}",
        "cricket": "\u{1F3CF}",
        "crocodile": "\u{1F40A}",
        "croissant": "\u{1F950}",
        "crossed_fingers": "\u{1F91E}",
        "crossed_flags": "\u{1F38C}",
        "crossed_swords": "\u2694\uFE0F",
        "crown": "\u{1F451}",
        "cry": "\u{1F622}",
        "crying_cat_face": "\u{1F63F}",
        "crystal_ball": "\u{1F52E}",
        "cucumber": "\u{1F952}",
        "cupid": "\u{1F498}",
        "curly_loop": "\u27B0",
        "currency_exchange": "\u{1F4B1}",
        "curry": "\u{1F35B}",
        "custard": "\u{1F36E}",
        "customs": "\u{1F6C3}",
        "cyclone": "\u{1F300}",
        "dagger": "\u{1F5E1}",
        "dancer": "\u{1F483}",
        "dancing_women": "\u{1F46F}",
        "dancing_men": "\u{1F46F}&zwj;\u2642\uFE0F",
        "dango": "\u{1F361}",
        "dark_sunglasses": "\u{1F576}",
        "dart": "\u{1F3AF}",
        "dash": "\u{1F4A8}",
        "date": "\u{1F4C5}",
        "deciduous_tree": "\u{1F333}",
        "deer": "\u{1F98C}",
        "department_store": "\u{1F3EC}",
        "derelict_house": "\u{1F3DA}",
        "desert": "\u{1F3DC}",
        "desert_island": "\u{1F3DD}",
        "desktop_computer": "\u{1F5A5}",
        "male_detective": "\u{1F575}\uFE0F",
        "diamond_shape_with_a_dot_inside": "\u{1F4A0}",
        "diamonds": "\u2666\uFE0F",
        "disappointed": "\u{1F61E}",
        "disappointed_relieved": "\u{1F625}",
        "dizzy": "\u{1F4AB}",
        "dizzy_face": "\u{1F635}",
        "do_not_litter": "\u{1F6AF}",
        "dog": "\u{1F436}",
        "dog2": "\u{1F415}",
        "dollar": "\u{1F4B5}",
        "dolls": "\u{1F38E}",
        "dolphin": "\u{1F42C}",
        "door": "\u{1F6AA}",
        "doughnut": "\u{1F369}",
        "dove": "\u{1F54A}",
        "dragon": "\u{1F409}",
        "dragon_face": "\u{1F432}",
        "dress": "\u{1F457}",
        "dromedary_camel": "\u{1F42A}",
        "drooling_face": "\u{1F924}",
        "droplet": "\u{1F4A7}",
        "drum": "\u{1F941}",
        "duck": "\u{1F986}",
        "dvd": "\u{1F4C0}",
        "e-mail": "\u{1F4E7}",
        "eagle": "\u{1F985}",
        "ear": "\u{1F442}",
        "ear_of_rice": "\u{1F33E}",
        "earth_africa": "\u{1F30D}",
        "earth_americas": "\u{1F30E}",
        "earth_asia": "\u{1F30F}",
        "egg": "\u{1F95A}",
        "eggplant": "\u{1F346}",
        "eight_pointed_black_star": "\u2734\uFE0F",
        "eight_spoked_asterisk": "\u2733\uFE0F",
        "electric_plug": "\u{1F50C}",
        "elephant": "\u{1F418}",
        "email": "\u2709\uFE0F",
        "end": "\u{1F51A}",
        "envelope_with_arrow": "\u{1F4E9}",
        "euro": "\u{1F4B6}",
        "european_castle": "\u{1F3F0}",
        "european_post_office": "\u{1F3E4}",
        "evergreen_tree": "\u{1F332}",
        "exclamation": "\u2757\uFE0F",
        "expressionless": "\u{1F611}",
        "eye": "\u{1F441}",
        "eye_speech_bubble": "\u{1F441}&zwj;\u{1F5E8}",
        "eyeglasses": "\u{1F453}",
        "eyes": "\u{1F440}",
        "face_with_head_bandage": "\u{1F915}",
        "face_with_thermometer": "\u{1F912}",
        "fist_oncoming": "\u{1F44A}",
        "factory": "\u{1F3ED}",
        "fallen_leaf": "\u{1F342}",
        "family_man_woman_boy": "\u{1F46A}",
        "family_man_boy": "\u{1F468}&zwj;\u{1F466}",
        "family_man_boy_boy": "\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",
        "family_man_girl": "\u{1F468}&zwj;\u{1F467}",
        "family_man_girl_boy": "\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",
        "family_man_girl_girl": "\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",
        "family_man_man_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}",
        "family_man_man_boy_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",
        "family_man_man_girl": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}",
        "family_man_man_girl_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",
        "family_man_man_girl_girl": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",
        "family_man_woman_boy_boy": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
        "family_man_woman_girl": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}",
        "family_man_woman_girl_boy": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
        "family_man_woman_girl_girl": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
        "family_woman_boy": "\u{1F469}&zwj;\u{1F466}",
        "family_woman_boy_boy": "\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
        "family_woman_girl": "\u{1F469}&zwj;\u{1F467}",
        "family_woman_girl_boy": "\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
        "family_woman_girl_girl": "\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
        "family_woman_woman_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}",
        "family_woman_woman_boy_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
        "family_woman_woman_girl": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}",
        "family_woman_woman_girl_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
        "family_woman_woman_girl_girl": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
        "fast_forward": "\u23E9",
        "fax": "\u{1F4E0}",
        "fearful": "\u{1F628}",
        "feet": "\u{1F43E}",
        "female_detective": "\u{1F575}\uFE0F&zwj;\u2640\uFE0F",
        "ferris_wheel": "\u{1F3A1}",
        "ferry": "\u26F4",
        "field_hockey": "\u{1F3D1}",
        "file_cabinet": "\u{1F5C4}",
        "file_folder": "\u{1F4C1}",
        "film_projector": "\u{1F4FD}",
        "film_strip": "\u{1F39E}",
        "fire": "\u{1F525}",
        "fire_engine": "\u{1F692}",
        "fireworks": "\u{1F386}",
        "first_quarter_moon": "\u{1F313}",
        "first_quarter_moon_with_face": "\u{1F31B}",
        "fish": "\u{1F41F}",
        "fish_cake": "\u{1F365}",
        "fishing_pole_and_fish": "\u{1F3A3}",
        "fist_raised": "\u270A",
        "fist_left": "\u{1F91B}",
        "fist_right": "\u{1F91C}",
        "flags": "\u{1F38F}",
        "flashlight": "\u{1F526}",
        "fleur_de_lis": "\u269C\uFE0F",
        "flight_arrival": "\u{1F6EC}",
        "flight_departure": "\u{1F6EB}",
        "floppy_disk": "\u{1F4BE}",
        "flower_playing_cards": "\u{1F3B4}",
        "flushed": "\u{1F633}",
        "fog": "\u{1F32B}",
        "foggy": "\u{1F301}",
        "football": "\u{1F3C8}",
        "footprints": "\u{1F463}",
        "fork_and_knife": "\u{1F374}",
        "fountain": "\u26F2\uFE0F",
        "fountain_pen": "\u{1F58B}",
        "four_leaf_clover": "\u{1F340}",
        "fox_face": "\u{1F98A}",
        "framed_picture": "\u{1F5BC}",
        "free": "\u{1F193}",
        "fried_egg": "\u{1F373}",
        "fried_shrimp": "\u{1F364}",
        "fries": "\u{1F35F}",
        "frog": "\u{1F438}",
        "frowning": "\u{1F626}",
        "frowning_face": "\u2639\uFE0F",
        "frowning_man": "\u{1F64D}&zwj;\u2642\uFE0F",
        "frowning_woman": "\u{1F64D}",
        "middle_finger": "\u{1F595}",
        "fuelpump": "\u26FD\uFE0F",
        "full_moon": "\u{1F315}",
        "full_moon_with_face": "\u{1F31D}",
        "funeral_urn": "\u26B1\uFE0F",
        "game_die": "\u{1F3B2}",
        "gear": "\u2699\uFE0F",
        "gem": "\u{1F48E}",
        "gemini": "\u264A\uFE0F",
        "ghost": "\u{1F47B}",
        "gift": "\u{1F381}",
        "gift_heart": "\u{1F49D}",
        "girl": "\u{1F467}",
        "globe_with_meridians": "\u{1F310}",
        "goal_net": "\u{1F945}",
        "goat": "\u{1F410}",
        "golf": "\u26F3\uFE0F",
        "golfing_man": "\u{1F3CC}\uFE0F",
        "golfing_woman": "\u{1F3CC}\uFE0F&zwj;\u2640\uFE0F",
        "gorilla": "\u{1F98D}",
        "grapes": "\u{1F347}",
        "green_apple": "\u{1F34F}",
        "green_book": "\u{1F4D7}",
        "green_heart": "\u{1F49A}",
        "green_salad": "\u{1F957}",
        "grey_exclamation": "\u2755",
        "grey_question": "\u2754",
        "grimacing": "\u{1F62C}",
        "grin": "\u{1F601}",
        "grinning": "\u{1F600}",
        "guardsman": "\u{1F482}",
        "guardswoman": "\u{1F482}&zwj;\u2640\uFE0F",
        "guitar": "\u{1F3B8}",
        "gun": "\u{1F52B}",
        "haircut_woman": "\u{1F487}",
        "haircut_man": "\u{1F487}&zwj;\u2642\uFE0F",
        "hamburger": "\u{1F354}",
        "hammer": "\u{1F528}",
        "hammer_and_pick": "\u2692",
        "hammer_and_wrench": "\u{1F6E0}",
        "hamster": "\u{1F439}",
        "hand": "\u270B",
        "handbag": "\u{1F45C}",
        "handshake": "\u{1F91D}",
        "hankey": "\u{1F4A9}",
        "hatched_chick": "\u{1F425}",
        "hatching_chick": "\u{1F423}",
        "headphones": "\u{1F3A7}",
        "hear_no_evil": "\u{1F649}",
        "heart": "\u2764\uFE0F",
        "heart_decoration": "\u{1F49F}",
        "heart_eyes": "\u{1F60D}",
        "heart_eyes_cat": "\u{1F63B}",
        "heartbeat": "\u{1F493}",
        "heartpulse": "\u{1F497}",
        "hearts": "\u2665\uFE0F",
        "heavy_check_mark": "\u2714\uFE0F",
        "heavy_division_sign": "\u2797",
        "heavy_dollar_sign": "\u{1F4B2}",
        "heavy_heart_exclamation": "\u2763\uFE0F",
        "heavy_minus_sign": "\u2796",
        "heavy_multiplication_x": "\u2716\uFE0F",
        "heavy_plus_sign": "\u2795",
        "helicopter": "\u{1F681}",
        "herb": "\u{1F33F}",
        "hibiscus": "\u{1F33A}",
        "high_brightness": "\u{1F506}",
        "high_heel": "\u{1F460}",
        "hocho": "\u{1F52A}",
        "hole": "\u{1F573}",
        "honey_pot": "\u{1F36F}",
        "horse": "\u{1F434}",
        "horse_racing": "\u{1F3C7}",
        "hospital": "\u{1F3E5}",
        "hot_pepper": "\u{1F336}",
        "hotdog": "\u{1F32D}",
        "hotel": "\u{1F3E8}",
        "hotsprings": "\u2668\uFE0F",
        "hourglass": "\u231B\uFE0F",
        "hourglass_flowing_sand": "\u23F3",
        "house": "\u{1F3E0}",
        "house_with_garden": "\u{1F3E1}",
        "houses": "\u{1F3D8}",
        "hugs": "\u{1F917}",
        "hushed": "\u{1F62F}",
        "ice_cream": "\u{1F368}",
        "ice_hockey": "\u{1F3D2}",
        "ice_skate": "\u26F8",
        "icecream": "\u{1F366}",
        "id": "\u{1F194}",
        "ideograph_advantage": "\u{1F250}",
        "imp": "\u{1F47F}",
        "inbox_tray": "\u{1F4E5}",
        "incoming_envelope": "\u{1F4E8}",
        "tipping_hand_woman": "\u{1F481}",
        "information_source": "\u2139\uFE0F",
        "innocent": "\u{1F607}",
        "interrobang": "\u2049\uFE0F",
        "iphone": "\u{1F4F1}",
        "izakaya_lantern": "\u{1F3EE}",
        "jack_o_lantern": "\u{1F383}",
        "japan": "\u{1F5FE}",
        "japanese_castle": "\u{1F3EF}",
        "japanese_goblin": "\u{1F47A}",
        "japanese_ogre": "\u{1F479}",
        "jeans": "\u{1F456}",
        "joy": "\u{1F602}",
        "joy_cat": "\u{1F639}",
        "joystick": "\u{1F579}",
        "kaaba": "\u{1F54B}",
        "key": "\u{1F511}",
        "keyboard": "\u2328\uFE0F",
        "keycap_ten": "\u{1F51F}",
        "kick_scooter": "\u{1F6F4}",
        "kimono": "\u{1F458}",
        "kiss": "\u{1F48B}",
        "kissing": "\u{1F617}",
        "kissing_cat": "\u{1F63D}",
        "kissing_closed_eyes": "\u{1F61A}",
        "kissing_heart": "\u{1F618}",
        "kissing_smiling_eyes": "\u{1F619}",
        "kiwi_fruit": "\u{1F95D}",
        "koala": "\u{1F428}",
        "koko": "\u{1F201}",
        "label": "\u{1F3F7}",
        "large_blue_circle": "\u{1F535}",
        "large_blue_diamond": "\u{1F537}",
        "large_orange_diamond": "\u{1F536}",
        "last_quarter_moon": "\u{1F317}",
        "last_quarter_moon_with_face": "\u{1F31C}",
        "latin_cross": "\u271D\uFE0F",
        "laughing": "\u{1F606}",
        "leaves": "\u{1F343}",
        "ledger": "\u{1F4D2}",
        "left_luggage": "\u{1F6C5}",
        "left_right_arrow": "\u2194\uFE0F",
        "leftwards_arrow_with_hook": "\u21A9\uFE0F",
        "lemon": "\u{1F34B}",
        "leo": "\u264C\uFE0F",
        "leopard": "\u{1F406}",
        "level_slider": "\u{1F39A}",
        "libra": "\u264E\uFE0F",
        "light_rail": "\u{1F688}",
        "link": "\u{1F517}",
        "lion": "\u{1F981}",
        "lips": "\u{1F444}",
        "lipstick": "\u{1F484}",
        "lizard": "\u{1F98E}",
        "lock": "\u{1F512}",
        "lock_with_ink_pen": "\u{1F50F}",
        "lollipop": "\u{1F36D}",
        "loop": "\u27BF",
        "loud_sound": "\u{1F50A}",
        "loudspeaker": "\u{1F4E2}",
        "love_hotel": "\u{1F3E9}",
        "love_letter": "\u{1F48C}",
        "low_brightness": "\u{1F505}",
        "lying_face": "\u{1F925}",
        "m": "\u24C2\uFE0F",
        "mag": "\u{1F50D}",
        "mag_right": "\u{1F50E}",
        "mahjong": "\u{1F004}\uFE0F",
        "mailbox": "\u{1F4EB}",
        "mailbox_closed": "\u{1F4EA}",
        "mailbox_with_mail": "\u{1F4EC}",
        "mailbox_with_no_mail": "\u{1F4ED}",
        "man": "\u{1F468}",
        "man_artist": "\u{1F468}&zwj;\u{1F3A8}",
        "man_astronaut": "\u{1F468}&zwj;\u{1F680}",
        "man_cartwheeling": "\u{1F938}&zwj;\u2642\uFE0F",
        "man_cook": "\u{1F468}&zwj;\u{1F373}",
        "man_dancing": "\u{1F57A}",
        "man_facepalming": "\u{1F926}&zwj;\u2642\uFE0F",
        "man_factory_worker": "\u{1F468}&zwj;\u{1F3ED}",
        "man_farmer": "\u{1F468}&zwj;\u{1F33E}",
        "man_firefighter": "\u{1F468}&zwj;\u{1F692}",
        "man_health_worker": "\u{1F468}&zwj;\u2695\uFE0F",
        "man_in_tuxedo": "\u{1F935}",
        "man_judge": "\u{1F468}&zwj;\u2696\uFE0F",
        "man_juggling": "\u{1F939}&zwj;\u2642\uFE0F",
        "man_mechanic": "\u{1F468}&zwj;\u{1F527}",
        "man_office_worker": "\u{1F468}&zwj;\u{1F4BC}",
        "man_pilot": "\u{1F468}&zwj;\u2708\uFE0F",
        "man_playing_handball": "\u{1F93E}&zwj;\u2642\uFE0F",
        "man_playing_water_polo": "\u{1F93D}&zwj;\u2642\uFE0F",
        "man_scientist": "\u{1F468}&zwj;\u{1F52C}",
        "man_shrugging": "\u{1F937}&zwj;\u2642\uFE0F",
        "man_singer": "\u{1F468}&zwj;\u{1F3A4}",
        "man_student": "\u{1F468}&zwj;\u{1F393}",
        "man_teacher": "\u{1F468}&zwj;\u{1F3EB}",
        "man_technologist": "\u{1F468}&zwj;\u{1F4BB}",
        "man_with_gua_pi_mao": "\u{1F472}",
        "man_with_turban": "\u{1F473}",
        "tangerine": "\u{1F34A}",
        "mans_shoe": "\u{1F45E}",
        "mantelpiece_clock": "\u{1F570}",
        "maple_leaf": "\u{1F341}",
        "martial_arts_uniform": "\u{1F94B}",
        "mask": "\u{1F637}",
        "massage_woman": "\u{1F486}",
        "massage_man": "\u{1F486}&zwj;\u2642\uFE0F",
        "meat_on_bone": "\u{1F356}",
        "medal_military": "\u{1F396}",
        "medal_sports": "\u{1F3C5}",
        "mega": "\u{1F4E3}",
        "melon": "\u{1F348}",
        "memo": "\u{1F4DD}",
        "men_wrestling": "\u{1F93C}&zwj;\u2642\uFE0F",
        "menorah": "\u{1F54E}",
        "mens": "\u{1F6B9}",
        "metal": "\u{1F918}",
        "metro": "\u{1F687}",
        "microphone": "\u{1F3A4}",
        "microscope": "\u{1F52C}",
        "milk_glass": "\u{1F95B}",
        "milky_way": "\u{1F30C}",
        "minibus": "\u{1F690}",
        "minidisc": "\u{1F4BD}",
        "mobile_phone_off": "\u{1F4F4}",
        "money_mouth_face": "\u{1F911}",
        "money_with_wings": "\u{1F4B8}",
        "moneybag": "\u{1F4B0}",
        "monkey": "\u{1F412}",
        "monkey_face": "\u{1F435}",
        "monorail": "\u{1F69D}",
        "moon": "\u{1F314}",
        "mortar_board": "\u{1F393}",
        "mosque": "\u{1F54C}",
        "motor_boat": "\u{1F6E5}",
        "motor_scooter": "\u{1F6F5}",
        "motorcycle": "\u{1F3CD}",
        "motorway": "\u{1F6E3}",
        "mount_fuji": "\u{1F5FB}",
        "mountain": "\u26F0",
        "mountain_biking_man": "\u{1F6B5}",
        "mountain_biking_woman": "\u{1F6B5}&zwj;\u2640\uFE0F",
        "mountain_cableway": "\u{1F6A0}",
        "mountain_railway": "\u{1F69E}",
        "mountain_snow": "\u{1F3D4}",
        "mouse": "\u{1F42D}",
        "mouse2": "\u{1F401}",
        "movie_camera": "\u{1F3A5}",
        "moyai": "\u{1F5FF}",
        "mrs_claus": "\u{1F936}",
        "muscle": "\u{1F4AA}",
        "mushroom": "\u{1F344}",
        "musical_keyboard": "\u{1F3B9}",
        "musical_note": "\u{1F3B5}",
        "musical_score": "\u{1F3BC}",
        "mute": "\u{1F507}",
        "nail_care": "\u{1F485}",
        "name_badge": "\u{1F4DB}",
        "national_park": "\u{1F3DE}",
        "nauseated_face": "\u{1F922}",
        "necktie": "\u{1F454}",
        "negative_squared_cross_mark": "\u274E",
        "nerd_face": "\u{1F913}",
        "neutral_face": "\u{1F610}",
        "new": "\u{1F195}",
        "new_moon": "\u{1F311}",
        "new_moon_with_face": "\u{1F31A}",
        "newspaper": "\u{1F4F0}",
        "newspaper_roll": "\u{1F5DE}",
        "next_track_button": "\u23ED",
        "ng": "\u{1F196}",
        "no_good_man": "\u{1F645}&zwj;\u2642\uFE0F",
        "no_good_woman": "\u{1F645}",
        "night_with_stars": "\u{1F303}",
        "no_bell": "\u{1F515}",
        "no_bicycles": "\u{1F6B3}",
        "no_entry": "\u26D4\uFE0F",
        "no_entry_sign": "\u{1F6AB}",
        "no_mobile_phones": "\u{1F4F5}",
        "no_mouth": "\u{1F636}",
        "no_pedestrians": "\u{1F6B7}",
        "no_smoking": "\u{1F6AD}",
        "non-potable_water": "\u{1F6B1}",
        "nose": "\u{1F443}",
        "notebook": "\u{1F4D3}",
        "notebook_with_decorative_cover": "\u{1F4D4}",
        "notes": "\u{1F3B6}",
        "nut_and_bolt": "\u{1F529}",
        "o": "\u2B55\uFE0F",
        "o2": "\u{1F17E}\uFE0F",
        "ocean": "\u{1F30A}",
        "octopus": "\u{1F419}",
        "oden": "\u{1F362}",
        "office": "\u{1F3E2}",
        "oil_drum": "\u{1F6E2}",
        "ok": "\u{1F197}",
        "ok_hand": "\u{1F44C}",
        "ok_man": "\u{1F646}&zwj;\u2642\uFE0F",
        "ok_woman": "\u{1F646}",
        "old_key": "\u{1F5DD}",
        "older_man": "\u{1F474}",
        "older_woman": "\u{1F475}",
        "om": "\u{1F549}",
        "on": "\u{1F51B}",
        "oncoming_automobile": "\u{1F698}",
        "oncoming_bus": "\u{1F68D}",
        "oncoming_police_car": "\u{1F694}",
        "oncoming_taxi": "\u{1F696}",
        "open_file_folder": "\u{1F4C2}",
        "open_hands": "\u{1F450}",
        "open_mouth": "\u{1F62E}",
        "open_umbrella": "\u2602\uFE0F",
        "ophiuchus": "\u26CE",
        "orange_book": "\u{1F4D9}",
        "orthodox_cross": "\u2626\uFE0F",
        "outbox_tray": "\u{1F4E4}",
        "owl": "\u{1F989}",
        "ox": "\u{1F402}",
        "package": "\u{1F4E6}",
        "page_facing_up": "\u{1F4C4}",
        "page_with_curl": "\u{1F4C3}",
        "pager": "\u{1F4DF}",
        "paintbrush": "\u{1F58C}",
        "palm_tree": "\u{1F334}",
        "pancakes": "\u{1F95E}",
        "panda_face": "\u{1F43C}",
        "paperclip": "\u{1F4CE}",
        "paperclips": "\u{1F587}",
        "parasol_on_ground": "\u26F1",
        "parking": "\u{1F17F}\uFE0F",
        "part_alternation_mark": "\u303D\uFE0F",
        "partly_sunny": "\u26C5\uFE0F",
        "passenger_ship": "\u{1F6F3}",
        "passport_control": "\u{1F6C2}",
        "pause_button": "\u23F8",
        "peace_symbol": "\u262E\uFE0F",
        "peach": "\u{1F351}",
        "peanuts": "\u{1F95C}",
        "pear": "\u{1F350}",
        "pen": "\u{1F58A}",
        "pencil2": "\u270F\uFE0F",
        "penguin": "\u{1F427}",
        "pensive": "\u{1F614}",
        "performing_arts": "\u{1F3AD}",
        "persevere": "\u{1F623}",
        "person_fencing": "\u{1F93A}",
        "pouting_woman": "\u{1F64E}",
        "phone": "\u260E\uFE0F",
        "pick": "\u26CF",
        "pig": "\u{1F437}",
        "pig2": "\u{1F416}",
        "pig_nose": "\u{1F43D}",
        "pill": "\u{1F48A}",
        "pineapple": "\u{1F34D}",
        "ping_pong": "\u{1F3D3}",
        "pisces": "\u2653\uFE0F",
        "pizza": "\u{1F355}",
        "place_of_worship": "\u{1F6D0}",
        "plate_with_cutlery": "\u{1F37D}",
        "play_or_pause_button": "\u23EF",
        "point_down": "\u{1F447}",
        "point_left": "\u{1F448}",
        "point_right": "\u{1F449}",
        "point_up": "\u261D\uFE0F",
        "point_up_2": "\u{1F446}",
        "police_car": "\u{1F693}",
        "policewoman": "\u{1F46E}&zwj;\u2640\uFE0F",
        "poodle": "\u{1F429}",
        "popcorn": "\u{1F37F}",
        "post_office": "\u{1F3E3}",
        "postal_horn": "\u{1F4EF}",
        "postbox": "\u{1F4EE}",
        "potable_water": "\u{1F6B0}",
        "potato": "\u{1F954}",
        "pouch": "\u{1F45D}",
        "poultry_leg": "\u{1F357}",
        "pound": "\u{1F4B7}",
        "rage": "\u{1F621}",
        "pouting_cat": "\u{1F63E}",
        "pouting_man": "\u{1F64E}&zwj;\u2642\uFE0F",
        "pray": "\u{1F64F}",
        "prayer_beads": "\u{1F4FF}",
        "pregnant_woman": "\u{1F930}",
        "previous_track_button": "\u23EE",
        "prince": "\u{1F934}",
        "princess": "\u{1F478}",
        "printer": "\u{1F5A8}",
        "purple_heart": "\u{1F49C}",
        "purse": "\u{1F45B}",
        "pushpin": "\u{1F4CC}",
        "put_litter_in_its_place": "\u{1F6AE}",
        "question": "\u2753",
        "rabbit": "\u{1F430}",
        "rabbit2": "\u{1F407}",
        "racehorse": "\u{1F40E}",
        "racing_car": "\u{1F3CE}",
        "radio": "\u{1F4FB}",
        "radio_button": "\u{1F518}",
        "radioactive": "\u2622\uFE0F",
        "railway_car": "\u{1F683}",
        "railway_track": "\u{1F6E4}",
        "rainbow": "\u{1F308}",
        "rainbow_flag": "\u{1F3F3}\uFE0F&zwj;\u{1F308}",
        "raised_back_of_hand": "\u{1F91A}",
        "raised_hand_with_fingers_splayed": "\u{1F590}",
        "raised_hands": "\u{1F64C}",
        "raising_hand_woman": "\u{1F64B}",
        "raising_hand_man": "\u{1F64B}&zwj;\u2642\uFE0F",
        "ram": "\u{1F40F}",
        "ramen": "\u{1F35C}",
        "rat": "\u{1F400}",
        "record_button": "\u23FA",
        "recycle": "\u267B\uFE0F",
        "red_circle": "\u{1F534}",
        "registered": "\xAE\uFE0F",
        "relaxed": "\u263A\uFE0F",
        "relieved": "\u{1F60C}",
        "reminder_ribbon": "\u{1F397}",
        "repeat": "\u{1F501}",
        "repeat_one": "\u{1F502}",
        "rescue_worker_helmet": "\u26D1",
        "restroom": "\u{1F6BB}",
        "revolving_hearts": "\u{1F49E}",
        "rewind": "\u23EA",
        "rhinoceros": "\u{1F98F}",
        "ribbon": "\u{1F380}",
        "rice": "\u{1F35A}",
        "rice_ball": "\u{1F359}",
        "rice_cracker": "\u{1F358}",
        "rice_scene": "\u{1F391}",
        "right_anger_bubble": "\u{1F5EF}",
        "ring": "\u{1F48D}",
        "robot": "\u{1F916}",
        "rocket": "\u{1F680}",
        "rofl": "\u{1F923}",
        "roll_eyes": "\u{1F644}",
        "roller_coaster": "\u{1F3A2}",
        "rooster": "\u{1F413}",
        "rose": "\u{1F339}",
        "rosette": "\u{1F3F5}",
        "rotating_light": "\u{1F6A8}",
        "round_pushpin": "\u{1F4CD}",
        "rowing_man": "\u{1F6A3}",
        "rowing_woman": "\u{1F6A3}&zwj;\u2640\uFE0F",
        "rugby_football": "\u{1F3C9}",
        "running_man": "\u{1F3C3}",
        "running_shirt_with_sash": "\u{1F3BD}",
        "running_woman": "\u{1F3C3}&zwj;\u2640\uFE0F",
        "sa": "\u{1F202}\uFE0F",
        "sagittarius": "\u2650\uFE0F",
        "sake": "\u{1F376}",
        "sandal": "\u{1F461}",
        "santa": "\u{1F385}",
        "satellite": "\u{1F4E1}",
        "saxophone": "\u{1F3B7}",
        "school": "\u{1F3EB}",
        "school_satchel": "\u{1F392}",
        "scissors": "\u2702\uFE0F",
        "scorpion": "\u{1F982}",
        "scorpius": "\u264F\uFE0F",
        "scream": "\u{1F631}",
        "scream_cat": "\u{1F640}",
        "scroll": "\u{1F4DC}",
        "seat": "\u{1F4BA}",
        "secret": "\u3299\uFE0F",
        "see_no_evil": "\u{1F648}",
        "seedling": "\u{1F331}",
        "selfie": "\u{1F933}",
        "shallow_pan_of_food": "\u{1F958}",
        "shamrock": "\u2618\uFE0F",
        "shark": "\u{1F988}",
        "shaved_ice": "\u{1F367}",
        "sheep": "\u{1F411}",
        "shell": "\u{1F41A}",
        "shield": "\u{1F6E1}",
        "shinto_shrine": "\u26E9",
        "ship": "\u{1F6A2}",
        "shirt": "\u{1F455}",
        "shopping": "\u{1F6CD}",
        "shopping_cart": "\u{1F6D2}",
        "shower": "\u{1F6BF}",
        "shrimp": "\u{1F990}",
        "signal_strength": "\u{1F4F6}",
        "six_pointed_star": "\u{1F52F}",
        "ski": "\u{1F3BF}",
        "skier": "\u26F7",
        "skull": "\u{1F480}",
        "skull_and_crossbones": "\u2620\uFE0F",
        "sleeping": "\u{1F634}",
        "sleeping_bed": "\u{1F6CC}",
        "sleepy": "\u{1F62A}",
        "slightly_frowning_face": "\u{1F641}",
        "slightly_smiling_face": "\u{1F642}",
        "slot_machine": "\u{1F3B0}",
        "small_airplane": "\u{1F6E9}",
        "small_blue_diamond": "\u{1F539}",
        "small_orange_diamond": "\u{1F538}",
        "small_red_triangle": "\u{1F53A}",
        "small_red_triangle_down": "\u{1F53B}",
        "smile": "\u{1F604}",
        "smile_cat": "\u{1F638}",
        "smiley": "\u{1F603}",
        "smiley_cat": "\u{1F63A}",
        "smiling_imp": "\u{1F608}",
        "smirk": "\u{1F60F}",
        "smirk_cat": "\u{1F63C}",
        "smoking": "\u{1F6AC}",
        "snail": "\u{1F40C}",
        "snake": "\u{1F40D}",
        "sneezing_face": "\u{1F927}",
        "snowboarder": "\u{1F3C2}",
        "snowflake": "\u2744\uFE0F",
        "snowman": "\u26C4\uFE0F",
        "snowman_with_snow": "\u2603\uFE0F",
        "sob": "\u{1F62D}",
        "soccer": "\u26BD\uFE0F",
        "soon": "\u{1F51C}",
        "sos": "\u{1F198}",
        "sound": "\u{1F509}",
        "space_invader": "\u{1F47E}",
        "spades": "\u2660\uFE0F",
        "spaghetti": "\u{1F35D}",
        "sparkle": "\u2747\uFE0F",
        "sparkler": "\u{1F387}",
        "sparkles": "\u2728",
        "sparkling_heart": "\u{1F496}",
        "speak_no_evil": "\u{1F64A}",
        "speaker": "\u{1F508}",
        "speaking_head": "\u{1F5E3}",
        "speech_balloon": "\u{1F4AC}",
        "speedboat": "\u{1F6A4}",
        "spider": "\u{1F577}",
        "spider_web": "\u{1F578}",
        "spiral_calendar": "\u{1F5D3}",
        "spiral_notepad": "\u{1F5D2}",
        "spoon": "\u{1F944}",
        "squid": "\u{1F991}",
        "stadium": "\u{1F3DF}",
        "star": "\u2B50\uFE0F",
        "star2": "\u{1F31F}",
        "star_and_crescent": "\u262A\uFE0F",
        "star_of_david": "\u2721\uFE0F",
        "stars": "\u{1F320}",
        "station": "\u{1F689}",
        "statue_of_liberty": "\u{1F5FD}",
        "steam_locomotive": "\u{1F682}",
        "stew": "\u{1F372}",
        "stop_button": "\u23F9",
        "stop_sign": "\u{1F6D1}",
        "stopwatch": "\u23F1",
        "straight_ruler": "\u{1F4CF}",
        "strawberry": "\u{1F353}",
        "stuck_out_tongue": "\u{1F61B}",
        "stuck_out_tongue_closed_eyes": "\u{1F61D}",
        "stuck_out_tongue_winking_eye": "\u{1F61C}",
        "studio_microphone": "\u{1F399}",
        "stuffed_flatbread": "\u{1F959}",
        "sun_behind_large_cloud": "\u{1F325}",
        "sun_behind_rain_cloud": "\u{1F326}",
        "sun_behind_small_cloud": "\u{1F324}",
        "sun_with_face": "\u{1F31E}",
        "sunflower": "\u{1F33B}",
        "sunglasses": "\u{1F60E}",
        "sunny": "\u2600\uFE0F",
        "sunrise": "\u{1F305}",
        "sunrise_over_mountains": "\u{1F304}",
        "surfing_man": "\u{1F3C4}",
        "surfing_woman": "\u{1F3C4}&zwj;\u2640\uFE0F",
        "sushi": "\u{1F363}",
        "suspension_railway": "\u{1F69F}",
        "sweat": "\u{1F613}",
        "sweat_drops": "\u{1F4A6}",
        "sweat_smile": "\u{1F605}",
        "sweet_potato": "\u{1F360}",
        "swimming_man": "\u{1F3CA}",
        "swimming_woman": "\u{1F3CA}&zwj;\u2640\uFE0F",
        "symbols": "\u{1F523}",
        "synagogue": "\u{1F54D}",
        "syringe": "\u{1F489}",
        "taco": "\u{1F32E}",
        "tada": "\u{1F389}",
        "tanabata_tree": "\u{1F38B}",
        "taurus": "\u2649\uFE0F",
        "taxi": "\u{1F695}",
        "tea": "\u{1F375}",
        "telephone_receiver": "\u{1F4DE}",
        "telescope": "\u{1F52D}",
        "tennis": "\u{1F3BE}",
        "tent": "\u26FA\uFE0F",
        "thermometer": "\u{1F321}",
        "thinking": "\u{1F914}",
        "thought_balloon": "\u{1F4AD}",
        "ticket": "\u{1F3AB}",
        "tickets": "\u{1F39F}",
        "tiger": "\u{1F42F}",
        "tiger2": "\u{1F405}",
        "timer_clock": "\u23F2",
        "tipping_hand_man": "\u{1F481}&zwj;\u2642\uFE0F",
        "tired_face": "\u{1F62B}",
        "tm": "\u2122\uFE0F",
        "toilet": "\u{1F6BD}",
        "tokyo_tower": "\u{1F5FC}",
        "tomato": "\u{1F345}",
        "tongue": "\u{1F445}",
        "top": "\u{1F51D}",
        "tophat": "\u{1F3A9}",
        "tornado": "\u{1F32A}",
        "trackball": "\u{1F5B2}",
        "tractor": "\u{1F69C}",
        "traffic_light": "\u{1F6A5}",
        "train": "\u{1F68B}",
        "train2": "\u{1F686}",
        "tram": "\u{1F68A}",
        "triangular_flag_on_post": "\u{1F6A9}",
        "triangular_ruler": "\u{1F4D0}",
        "trident": "\u{1F531}",
        "triumph": "\u{1F624}",
        "trolleybus": "\u{1F68E}",
        "trophy": "\u{1F3C6}",
        "tropical_drink": "\u{1F379}",
        "tropical_fish": "\u{1F420}",
        "truck": "\u{1F69A}",
        "trumpet": "\u{1F3BA}",
        "tulip": "\u{1F337}",
        "tumbler_glass": "\u{1F943}",
        "turkey": "\u{1F983}",
        "turtle": "\u{1F422}",
        "tv": "\u{1F4FA}",
        "twisted_rightwards_arrows": "\u{1F500}",
        "two_hearts": "\u{1F495}",
        "two_men_holding_hands": "\u{1F46C}",
        "two_women_holding_hands": "\u{1F46D}",
        "u5272": "\u{1F239}",
        "u5408": "\u{1F234}",
        "u55b6": "\u{1F23A}",
        "u6307": "\u{1F22F}\uFE0F",
        "u6708": "\u{1F237}\uFE0F",
        "u6709": "\u{1F236}",
        "u6e80": "\u{1F235}",
        "u7121": "\u{1F21A}\uFE0F",
        "u7533": "\u{1F238}",
        "u7981": "\u{1F232}",
        "u7a7a": "\u{1F233}",
        "umbrella": "\u2614\uFE0F",
        "unamused": "\u{1F612}",
        "underage": "\u{1F51E}",
        "unicorn": "\u{1F984}",
        "unlock": "\u{1F513}",
        "up": "\u{1F199}",
        "upside_down_face": "\u{1F643}",
        "v": "\u270C\uFE0F",
        "vertical_traffic_light": "\u{1F6A6}",
        "vhs": "\u{1F4FC}",
        "vibration_mode": "\u{1F4F3}",
        "video_camera": "\u{1F4F9}",
        "video_game": "\u{1F3AE}",
        "violin": "\u{1F3BB}",
        "virgo": "\u264D\uFE0F",
        "volcano": "\u{1F30B}",
        "volleyball": "\u{1F3D0}",
        "vs": "\u{1F19A}",
        "vulcan_salute": "\u{1F596}",
        "walking_man": "\u{1F6B6}",
        "walking_woman": "\u{1F6B6}&zwj;\u2640\uFE0F",
        "waning_crescent_moon": "\u{1F318}",
        "waning_gibbous_moon": "\u{1F316}",
        "warning": "\u26A0\uFE0F",
        "wastebasket": "\u{1F5D1}",
        "watch": "\u231A\uFE0F",
        "water_buffalo": "\u{1F403}",
        "watermelon": "\u{1F349}",
        "wave": "\u{1F44B}",
        "wavy_dash": "\u3030\uFE0F",
        "waxing_crescent_moon": "\u{1F312}",
        "wc": "\u{1F6BE}",
        "weary": "\u{1F629}",
        "wedding": "\u{1F492}",
        "weight_lifting_man": "\u{1F3CB}\uFE0F",
        "weight_lifting_woman": "\u{1F3CB}\uFE0F&zwj;\u2640\uFE0F",
        "whale": "\u{1F433}",
        "whale2": "\u{1F40B}",
        "wheel_of_dharma": "\u2638\uFE0F",
        "wheelchair": "\u267F\uFE0F",
        "white_check_mark": "\u2705",
        "white_circle": "\u26AA\uFE0F",
        "white_flag": "\u{1F3F3}\uFE0F",
        "white_flower": "\u{1F4AE}",
        "white_large_square": "\u2B1C\uFE0F",
        "white_medium_small_square": "\u25FD\uFE0F",
        "white_medium_square": "\u25FB\uFE0F",
        "white_small_square": "\u25AB\uFE0F",
        "white_square_button": "\u{1F533}",
        "wilted_flower": "\u{1F940}",
        "wind_chime": "\u{1F390}",
        "wind_face": "\u{1F32C}",
        "wine_glass": "\u{1F377}",
        "wink": "\u{1F609}",
        "wolf": "\u{1F43A}",
        "woman": "\u{1F469}",
        "woman_artist": "\u{1F469}&zwj;\u{1F3A8}",
        "woman_astronaut": "\u{1F469}&zwj;\u{1F680}",
        "woman_cartwheeling": "\u{1F938}&zwj;\u2640\uFE0F",
        "woman_cook": "\u{1F469}&zwj;\u{1F373}",
        "woman_facepalming": "\u{1F926}&zwj;\u2640\uFE0F",
        "woman_factory_worker": "\u{1F469}&zwj;\u{1F3ED}",
        "woman_farmer": "\u{1F469}&zwj;\u{1F33E}",
        "woman_firefighter": "\u{1F469}&zwj;\u{1F692}",
        "woman_health_worker": "\u{1F469}&zwj;\u2695\uFE0F",
        "woman_judge": "\u{1F469}&zwj;\u2696\uFE0F",
        "woman_juggling": "\u{1F939}&zwj;\u2640\uFE0F",
        "woman_mechanic": "\u{1F469}&zwj;\u{1F527}",
        "woman_office_worker": "\u{1F469}&zwj;\u{1F4BC}",
        "woman_pilot": "\u{1F469}&zwj;\u2708\uFE0F",
        "woman_playing_handball": "\u{1F93E}&zwj;\u2640\uFE0F",
        "woman_playing_water_polo": "\u{1F93D}&zwj;\u2640\uFE0F",
        "woman_scientist": "\u{1F469}&zwj;\u{1F52C}",
        "woman_shrugging": "\u{1F937}&zwj;\u2640\uFE0F",
        "woman_singer": "\u{1F469}&zwj;\u{1F3A4}",
        "woman_student": "\u{1F469}&zwj;\u{1F393}",
        "woman_teacher": "\u{1F469}&zwj;\u{1F3EB}",
        "woman_technologist": "\u{1F469}&zwj;\u{1F4BB}",
        "woman_with_turban": "\u{1F473}&zwj;\u2640\uFE0F",
        "womans_clothes": "\u{1F45A}",
        "womans_hat": "\u{1F452}",
        "women_wrestling": "\u{1F93C}&zwj;\u2640\uFE0F",
        "womens": "\u{1F6BA}",
        "world_map": "\u{1F5FA}",
        "worried": "\u{1F61F}",
        "wrench": "\u{1F527}",
        "writing_hand": "\u270D\uFE0F",
        "x": "\u274C",
        "yellow_heart": "\u{1F49B}",
        "yen": "\u{1F4B4}",
        "yin_yang": "\u262F\uFE0F",
        "yum": "\u{1F60B}",
        "zap": "\u26A1\uFE0F",
        "zipper_mouth_face": "\u{1F910}",
        "zzz": "\u{1F4A4}",
        /* special emojis :P */
        "octocat": '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        "showdown": `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
      };
      showdown2.Converter = function(converterOptions) {
        "use strict";
        var options = {}, langExtensions = [], outputModifiers = [], listeners2 = {}, setConvFlavor = setFlavor, metadata = {
          parsed: {},
          raw: "",
          format: ""
        };
        _constructor();
        function _constructor() {
          converterOptions = converterOptions || {};
          for (var gOpt in globalOptions) {
            if (globalOptions.hasOwnProperty(gOpt)) {
              options[gOpt] = globalOptions[gOpt];
            }
          }
          if (typeof converterOptions === "object") {
            for (var opt in converterOptions) {
              if (converterOptions.hasOwnProperty(opt)) {
                options[opt] = converterOptions[opt];
              }
            }
          } else {
            throw Error("Converter expects the passed parameter to be an object, but " + typeof converterOptions + " was passed instead.");
          }
          if (options.extensions) {
            showdown2.helper.forEach(options.extensions, _parseExtension);
          }
        }
        __name(_constructor, "_constructor");
        function _parseExtension(ext, name) {
          name = name || null;
          if (showdown2.helper.isString(ext)) {
            ext = showdown2.helper.stdExtName(ext);
            name = ext;
            if (showdown2.extensions[ext]) {
              console.warn("DEPRECATION WARNING: " + ext + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!");
              legacyExtensionLoading(showdown2.extensions[ext], ext);
              return;
            } else if (!showdown2.helper.isUndefined(extensions[ext])) {
              ext = extensions[ext];
            } else {
              throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
            }
          }
          if (typeof ext === "function") {
            ext = ext();
          }
          if (!showdown2.helper.isArray(ext)) {
            ext = [ext];
          }
          var validExt = validate(ext, name);
          if (!validExt.valid) {
            throw Error(validExt.error);
          }
          for (var i = 0; i < ext.length; ++i) {
            switch (ext[i].type) {
              case "lang":
                langExtensions.push(ext[i]);
                break;
              case "output":
                outputModifiers.push(ext[i]);
                break;
            }
            if (ext[i].hasOwnProperty("listeners")) {
              for (var ln in ext[i].listeners) {
                if (ext[i].listeners.hasOwnProperty(ln)) {
                  listen(ln, ext[i].listeners[ln]);
                }
              }
            }
          }
        }
        __name(_parseExtension, "_parseExtension");
        function legacyExtensionLoading(ext, name) {
          if (typeof ext === "function") {
            ext = ext(new showdown2.Converter());
          }
          if (!showdown2.helper.isArray(ext)) {
            ext = [ext];
          }
          var valid = validate(ext, name);
          if (!valid.valid) {
            throw Error(valid.error);
          }
          for (var i = 0; i < ext.length; ++i) {
            switch (ext[i].type) {
              case "lang":
                langExtensions.push(ext[i]);
                break;
              case "output":
                outputModifiers.push(ext[i]);
                break;
              default:
                throw Error("Extension loader error: Type unrecognized!!!");
            }
          }
        }
        __name(legacyExtensionLoading, "legacyExtensionLoading");
        function listen(name, callback) {
          if (!showdown2.helper.isString(name)) {
            throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof name + " given");
          }
          if (typeof callback !== "function") {
            throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof callback + " given");
          }
          if (!listeners2.hasOwnProperty(name)) {
            listeners2[name] = [];
          }
          listeners2[name].push(callback);
        }
        __name(listen, "listen");
        function rTrimInputText(text) {
          var rsp = text.match(/^\s*/)[0].length, rgx = new RegExp("^\\s{0," + rsp + "}", "gm");
          return text.replace(rgx, "");
        }
        __name(rTrimInputText, "rTrimInputText");
        this._dispatch = /* @__PURE__ */ __name(function dispatch(evtName, text, options2, globals) {
          if (listeners2.hasOwnProperty(evtName)) {
            for (var ei = 0; ei < listeners2[evtName].length; ++ei) {
              var nText = listeners2[evtName][ei](evtName, text, this, options2, globals);
              if (nText && typeof nText !== "undefined") {
                text = nText;
              }
            }
          }
          return text;
        }, "dispatch");
        this.listen = function(name, callback) {
          listen(name, callback);
          return this;
        };
        this.makeHtml = function(text) {
          if (!text) {
            return text;
          }
          var globals = {
            gHtmlBlocks: [],
            gHtmlMdBlocks: [],
            gHtmlSpans: [],
            gUrls: {},
            gTitles: {},
            gDimensions: {},
            gListLevel: 0,
            hashLinkCounts: {},
            langExtensions,
            outputModifiers,
            converter: this,
            ghCodeBlocks: [],
            metadata: {
              parsed: {},
              raw: "",
              format: ""
            }
          };
          text = text.replace(/¨/g, "\xA8T");
          text = text.replace(/\$/g, "\xA8D");
          text = text.replace(/\r\n/g, "\n");
          text = text.replace(/\r/g, "\n");
          text = text.replace(/\u00A0/g, "&nbsp;");
          if (options.smartIndentationFix) {
            text = rTrimInputText(text);
          }
          text = "\n\n" + text + "\n\n";
          text = showdown2.subParser("detab")(text, options, globals);
          text = text.replace(/^[ \t]+$/mg, "");
          showdown2.helper.forEach(langExtensions, function(ext) {
            text = showdown2.subParser("runExtension")(ext, text, options, globals);
          });
          text = showdown2.subParser("metadata")(text, options, globals);
          text = showdown2.subParser("hashPreCodeTags")(text, options, globals);
          text = showdown2.subParser("githubCodeBlocks")(text, options, globals);
          text = showdown2.subParser("hashHTMLBlocks")(text, options, globals);
          text = showdown2.subParser("hashCodeTags")(text, options, globals);
          text = showdown2.subParser("stripLinkDefinitions")(text, options, globals);
          text = showdown2.subParser("blockGamut")(text, options, globals);
          text = showdown2.subParser("unhashHTMLSpans")(text, options, globals);
          text = showdown2.subParser("unescapeSpecialChars")(text, options, globals);
          text = text.replace(/¨D/g, "$$");
          text = text.replace(/¨T/g, "\xA8");
          text = showdown2.subParser("completeHTMLDocument")(text, options, globals);
          showdown2.helper.forEach(outputModifiers, function(ext) {
            text = showdown2.subParser("runExtension")(ext, text, options, globals);
          });
          metadata = globals.metadata;
          return text;
        };
        this.makeMarkdown = this.makeMd = function(src, HTMLParser) {
          src = src.replace(/\r\n/g, "\n");
          src = src.replace(/\r/g, "\n");
          src = src.replace(/>[ \t]+</, ">\xA8NBSP;<");
          if (!HTMLParser) {
            if (window && window.document) {
              HTMLParser = window.document;
            } else {
              throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
            }
          }
          var doc = HTMLParser.createElement("div");
          doc.innerHTML = src;
          var globals = {
            preList: substitutePreCodeTags(doc)
          };
          clean(doc);
          var nodes = doc.childNodes, mdDoc = "";
          for (var i = 0; i < nodes.length; i++) {
            mdDoc += showdown2.subParser("makeMarkdown.node")(nodes[i], globals);
          }
          function clean(node) {
            for (var n = 0; n < node.childNodes.length; ++n) {
              var child = node.childNodes[n];
              if (child.nodeType === 3) {
                if (!/\S/.test(child.nodeValue) && !/^[ ]+$/.test(child.nodeValue)) {
                  node.removeChild(child);
                  --n;
                } else {
                  child.nodeValue = child.nodeValue.split("\n").join(" ");
                  child.nodeValue = child.nodeValue.replace(/(\s)+/g, "$1");
                }
              } else if (child.nodeType === 1) {
                clean(child);
              }
            }
          }
          __name(clean, "clean");
          function substitutePreCodeTags(doc2) {
            var pres = doc2.querySelectorAll("pre"), presPH = [];
            for (var i2 = 0; i2 < pres.length; ++i2) {
              if (pres[i2].childElementCount === 1 && pres[i2].firstChild.tagName.toLowerCase() === "code") {
                var content = pres[i2].firstChild.innerHTML.trim(), language = pres[i2].firstChild.getAttribute("data-language") || "";
                if (language === "") {
                  var classes = pres[i2].firstChild.className.split(" ");
                  for (var c = 0; c < classes.length; ++c) {
                    var matches = classes[c].match(/^language-(.+)$/);
                    if (matches !== null) {
                      language = matches[1];
                      break;
                    }
                  }
                }
                content = showdown2.helper.unescapeHTMLEntities(content);
                presPH.push(content);
                pres[i2].outerHTML = '<precode language="' + language + '" precodenum="' + i2.toString() + '"></precode>';
              } else {
                presPH.push(pres[i2].innerHTML);
                pres[i2].innerHTML = "";
                pres[i2].setAttribute("prenum", i2.toString());
              }
            }
            return presPH;
          }
          __name(substitutePreCodeTags, "substitutePreCodeTags");
          return mdDoc;
        };
        this.setOption = function(key, value) {
          options[key] = value;
        };
        this.getOption = function(key) {
          return options[key];
        };
        this.getOptions = function() {
          return options;
        };
        this.addExtension = function(extension, name) {
          name = name || null;
          _parseExtension(extension, name);
        };
        this.useExtension = function(extensionName) {
          _parseExtension(extensionName);
        };
        this.setFlavor = function(name) {
          if (!flavor.hasOwnProperty(name)) {
            throw Error(name + " flavor was not found");
          }
          var preset = flavor[name];
          setConvFlavor = name;
          for (var option in preset) {
            if (preset.hasOwnProperty(option)) {
              options[option] = preset[option];
            }
          }
        };
        this.getFlavor = function() {
          return setConvFlavor;
        };
        this.removeExtension = function(extension) {
          if (!showdown2.helper.isArray(extension)) {
            extension = [extension];
          }
          for (var a = 0; a < extension.length; ++a) {
            var ext = extension[a];
            for (var i = 0; i < langExtensions.length; ++i) {
              if (langExtensions[i] === ext) {
                langExtensions.splice(i, 1);
              }
            }
            for (var ii = 0; ii < outputModifiers.length; ++ii) {
              if (outputModifiers[ii] === ext) {
                outputModifiers.splice(ii, 1);
              }
            }
          }
        };
        this.getAllExtensions = function() {
          return {
            language: langExtensions,
            output: outputModifiers
          };
        };
        this.getMetadata = function(raw) {
          if (raw) {
            return metadata.raw;
          } else {
            return metadata.parsed;
          }
        };
        this.getMetadataFormat = function() {
          return metadata.format;
        };
        this._setMetadataPair = function(key, value) {
          metadata.parsed[key] = value;
        };
        this._setMetadataFormat = function(format) {
          metadata.format = format;
        };
        this._setMetadataRaw = function(raw) {
          metadata.raw = raw;
        };
      };
      showdown2.subParser("anchors", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("anchors.before", text, options, globals);
        var writeAnchorTag = /* @__PURE__ */ __name(function(wholeMatch, linkText, linkId, url, m5, m6, title2) {
          if (showdown2.helper.isUndefined(title2)) {
            title2 = "";
          }
          linkId = linkId.toLowerCase();
          if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
            url = "";
          } else if (!url) {
            if (!linkId) {
              linkId = linkText.toLowerCase().replace(/ ?\n/g, " ");
            }
            url = "#" + linkId;
            if (!showdown2.helper.isUndefined(globals.gUrls[linkId])) {
              url = globals.gUrls[linkId];
              if (!showdown2.helper.isUndefined(globals.gTitles[linkId])) {
                title2 = globals.gTitles[linkId];
              }
            } else {
              return wholeMatch;
            }
          }
          url = url.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
          var result = '<a href="' + url + '"';
          if (title2 !== "" && title2 !== null) {
            title2 = title2.replace(/"/g, "&quot;");
            title2 = title2.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
            result += ' title="' + title2 + '"';
          }
          if (options.openLinksInNewWindow && !/^#/.test(url)) {
            result += ' rel="noopener noreferrer" target="\xA8E95Eblank"';
          }
          result += ">" + linkText + "</a>";
          return result;
        }, "writeAnchorTag");
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);
        text = text.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          writeAnchorTag
        );
        text = text.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          writeAnchorTag
        );
        text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);
        if (options.ghMentions) {
          text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(wm, st, escape, mentions, username) {
            if (escape === "\\") {
              return st + mentions;
            }
            if (!showdown2.helper.isString(options.ghMentionsLink)) {
              throw new Error("ghMentionsLink option must be a string");
            }
            var lnk = options.ghMentionsLink.replace(/\{u}/g, username), target = "";
            if (options.openLinksInNewWindow) {
              target = ' rel="noopener noreferrer" target="\xA8E95Eblank"';
            }
            return st + '<a href="' + lnk + '"' + target + ">" + mentions + "</a>";
          });
        }
        text = globals.converter._dispatch("anchors.after", text, options, globals);
        return text;
      });
      var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, replaceLink = /* @__PURE__ */ __name(function(options) {
        "use strict";
        return function(wm, leadingMagicChars, link3, m2, m3, trailingPunctuation, trailingMagicChars) {
          link3 = link3.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
          var lnkTxt = link3, append = "", target = "", lmc = leadingMagicChars || "", tmc = trailingMagicChars || "";
          if (/^www\./i.test(link3)) {
            link3 = link3.replace(/^www\./i, "http://www.");
          }
          if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
            append = trailingPunctuation;
          }
          if (options.openLinksInNewWindow) {
            target = ' rel="noopener noreferrer" target="\xA8E95Eblank"';
          }
          return lmc + '<a href="' + link3 + '"' + target + ">" + lnkTxt + "</a>" + append + tmc;
        };
      }, "replaceLink"), replaceMail = /* @__PURE__ */ __name(function(options, globals) {
        "use strict";
        return function(wholeMatch, b, mail) {
          var href = "mailto:";
          b = b || "";
          mail = showdown2.subParser("unescapeSpecialChars")(mail, options, globals);
          if (options.encodeEmails) {
            href = showdown2.helper.encodeEmailAddress(href + mail);
            mail = showdown2.helper.encodeEmailAddress(mail);
          } else {
            href = href + mail;
          }
          return b + '<a href="' + href + '">' + mail + "</a>";
        };
      }, "replaceMail");
      showdown2.subParser("autoLinks", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("autoLinks.before", text, options, globals);
        text = text.replace(delimUrlRegex, replaceLink(options));
        text = text.replace(delimMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch("autoLinks.after", text, options, globals);
        return text;
      });
      showdown2.subParser("simplifiedAutoLinks", function(text, options, globals) {
        "use strict";
        if (!options.simplifiedAutoLink) {
          return text;
        }
        text = globals.converter._dispatch("simplifiedAutoLinks.before", text, options, globals);
        if (options.excludeTrailingPunctuationFromURLs) {
          text = text.replace(simpleURLRegex2, replaceLink(options));
        } else {
          text = text.replace(simpleURLRegex, replaceLink(options));
        }
        text = text.replace(simpleMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch("simplifiedAutoLinks.after", text, options, globals);
        return text;
      });
      showdown2.subParser("blockGamut", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("blockGamut.before", text, options, globals);
        text = showdown2.subParser("blockQuotes")(text, options, globals);
        text = showdown2.subParser("headers")(text, options, globals);
        text = showdown2.subParser("horizontalRule")(text, options, globals);
        text = showdown2.subParser("lists")(text, options, globals);
        text = showdown2.subParser("codeBlocks")(text, options, globals);
        text = showdown2.subParser("tables")(text, options, globals);
        text = showdown2.subParser("hashHTMLBlocks")(text, options, globals);
        text = showdown2.subParser("paragraphs")(text, options, globals);
        text = globals.converter._dispatch("blockGamut.after", text, options, globals);
        return text;
      });
      showdown2.subParser("blockQuotes", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("blockQuotes.before", text, options, globals);
        text = text + "\n\n";
        var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        if (options.splitAdjacentBlockquotes) {
          rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
        }
        text = text.replace(rgx, function(bq) {
          bq = bq.replace(/^[ \t]*>[ \t]?/gm, "");
          bq = bq.replace(/¨0/g, "");
          bq = bq.replace(/^[ \t]+$/gm, "");
          bq = showdown2.subParser("githubCodeBlocks")(bq, options, globals);
          bq = showdown2.subParser("blockGamut")(bq, options, globals);
          bq = bq.replace(/(^|\n)/g, "$1  ");
          bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(wholeMatch, m1) {
            var pre = m1;
            pre = pre.replace(/^  /mg, "\xA80");
            pre = pre.replace(/¨0/g, "");
            return pre;
          });
          return showdown2.subParser("hashBlock")("<blockquote>\n" + bq + "\n</blockquote>", options, globals);
        });
        text = globals.converter._dispatch("blockQuotes.after", text, options, globals);
        return text;
      });
      showdown2.subParser("codeBlocks", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("codeBlocks.before", text, options, globals);
        text += "\xA80";
        var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        text = text.replace(pattern, function(wholeMatch, m1, m2) {
          var codeblock = m1, nextChar = m2, end = "\n";
          codeblock = showdown2.subParser("outdent")(codeblock, options, globals);
          codeblock = showdown2.subParser("encodeCode")(codeblock, options, globals);
          codeblock = showdown2.subParser("detab")(codeblock, options, globals);
          codeblock = codeblock.replace(/^\n+/g, "");
          codeblock = codeblock.replace(/\n+$/g, "");
          if (options.omitExtraWLInCodeBlocks) {
            end = "";
          }
          codeblock = "<pre><code>" + codeblock + end + "</code></pre>";
          return showdown2.subParser("hashBlock")(codeblock, options, globals) + nextChar;
        });
        text = text.replace(/¨0/, "");
        text = globals.converter._dispatch("codeBlocks.after", text, options, globals);
        return text;
      });
      showdown2.subParser("codeSpans", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("codeSpans.before", text, options, globals);
        if (typeof text === "undefined") {
          text = "";
        }
        text = text.replace(
          /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
          function(wholeMatch, m1, m2, m3) {
            var c = m3;
            c = c.replace(/^([ \t]*)/g, "");
            c = c.replace(/[ \t]*$/g, "");
            c = showdown2.subParser("encodeCode")(c, options, globals);
            c = m1 + "<code>" + c + "</code>";
            c = showdown2.subParser("hashHTMLSpans")(c, options, globals);
            return c;
          }
        );
        text = globals.converter._dispatch("codeSpans.after", text, options, globals);
        return text;
      });
      showdown2.subParser("completeHTMLDocument", function(text, options, globals) {
        "use strict";
        if (!options.completeHTMLDocument) {
          return text;
        }
        text = globals.converter._dispatch("completeHTMLDocument.before", text, options, globals);
        var doctype = "html", doctypeParsed = "<!DOCTYPE HTML>\n", title2 = "", charset = '<meta charset="utf-8">\n', lang = "", metadata = "";
        if (typeof globals.metadata.parsed.doctype !== "undefined") {
          doctypeParsed = "<!DOCTYPE " + globals.metadata.parsed.doctype + ">\n";
          doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
          if (doctype === "html" || doctype === "html5") {
            charset = '<meta charset="utf-8">';
          }
        }
        for (var meta in globals.metadata.parsed) {
          if (globals.metadata.parsed.hasOwnProperty(meta)) {
            switch (meta.toLowerCase()) {
              case "doctype":
                break;
              case "title":
                title2 = "<title>" + globals.metadata.parsed.title + "</title>\n";
                break;
              case "charset":
                if (doctype === "html" || doctype === "html5") {
                  charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
                } else {
                  charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
                }
                break;
              case "language":
              case "lang":
                lang = ' lang="' + globals.metadata.parsed[meta] + '"';
                metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
                break;
              default:
                metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
            }
          }
        }
        text = doctypeParsed + "<html" + lang + ">\n<head>\n" + title2 + charset + metadata + "</head>\n<body>\n" + text.trim() + "\n</body>\n</html>";
        text = globals.converter._dispatch("completeHTMLDocument.after", text, options, globals);
        return text;
      });
      showdown2.subParser("detab", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("detab.before", text, options, globals);
        text = text.replace(/\t(?=\t)/g, "    ");
        text = text.replace(/\t/g, "\xA8A\xA8B");
        text = text.replace(/¨B(.+?)¨A/g, function(wholeMatch, m1) {
          var leadingText = m1, numSpaces = 4 - leadingText.length % 4;
          for (var i = 0; i < numSpaces; i++) {
            leadingText += " ";
          }
          return leadingText;
        });
        text = text.replace(/¨A/g, "    ");
        text = text.replace(/¨B/g, "");
        text = globals.converter._dispatch("detab.after", text, options, globals);
        return text;
      });
      showdown2.subParser("ellipsis", function(text, options, globals) {
        "use strict";
        if (!options.ellipsis) {
          return text;
        }
        text = globals.converter._dispatch("ellipsis.before", text, options, globals);
        text = text.replace(/\.\.\./g, "\u2026");
        text = globals.converter._dispatch("ellipsis.after", text, options, globals);
        return text;
      });
      showdown2.subParser("emoji", function(text, options, globals) {
        "use strict";
        if (!options.emoji) {
          return text;
        }
        text = globals.converter._dispatch("emoji.before", text, options, globals);
        var emojiRgx = /:([\S]+?):/g;
        text = text.replace(emojiRgx, function(wm, emojiCode) {
          if (showdown2.helper.emojis.hasOwnProperty(emojiCode)) {
            return showdown2.helper.emojis[emojiCode];
          }
          return wm;
        });
        text = globals.converter._dispatch("emoji.after", text, options, globals);
        return text;
      });
      showdown2.subParser("encodeAmpsAndAngles", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("encodeAmpsAndAngles.before", text, options, globals);
        text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
        text = text.replace(/<(?![a-z\/?$!])/gi, "&lt;");
        text = text.replace(/</g, "&lt;");
        text = text.replace(/>/g, "&gt;");
        text = globals.converter._dispatch("encodeAmpsAndAngles.after", text, options, globals);
        return text;
      });
      showdown2.subParser("encodeBackslashEscapes", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("encodeBackslashEscapes.before", text, options, globals);
        text = text.replace(/\\(\\)/g, showdown2.helper.escapeCharactersCallback);
        text = text.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, showdown2.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("encodeBackslashEscapes.after", text, options, globals);
        return text;
      });
      showdown2.subParser("encodeCode", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("encodeCode.before", text, options, globals);
        text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, showdown2.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("encodeCode.after", text, options, globals);
        return text;
      });
      showdown2.subParser("escapeSpecialCharsWithinTagAttributes", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", text, options, globals);
        var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        text = text.replace(tags, function(wholeMatch) {
          return wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, showdown2.helper.escapeCharactersCallback);
        });
        text = text.replace(comments, function(wholeMatch) {
          return wholeMatch.replace(/([\\`*_~=|])/g, showdown2.helper.escapeCharactersCallback);
        });
        text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", text, options, globals);
        return text;
      });
      showdown2.subParser("githubCodeBlocks", function(text, options, globals) {
        "use strict";
        if (!options.ghCodeBlocks) {
          return text;
        }
        text = globals.converter._dispatch("githubCodeBlocks.before", text, options, globals);
        text += "\xA80";
        text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(wholeMatch, delim, language, codeblock) {
          var end = options.omitExtraWLInCodeBlocks ? "" : "\n";
          codeblock = showdown2.subParser("encodeCode")(codeblock, options, globals);
          codeblock = showdown2.subParser("detab")(codeblock, options, globals);
          codeblock = codeblock.replace(/^\n+/g, "");
          codeblock = codeblock.replace(/\n+$/g, "");
          codeblock = "<pre><code" + (language ? ' class="' + language + " language-" + language + '"' : "") + ">" + codeblock + end + "</code></pre>";
          codeblock = showdown2.subParser("hashBlock")(codeblock, options, globals);
          return "\n\n\xA8G" + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock }) - 1) + "G\n\n";
        });
        text = text.replace(/¨0/, "");
        return globals.converter._dispatch("githubCodeBlocks.after", text, options, globals);
      });
      showdown2.subParser("hashBlock", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashBlock.before", text, options, globals);
        text = text.replace(/(^\n+|\n+$)/g, "");
        text = "\n\n\xA8K" + (globals.gHtmlBlocks.push(text) - 1) + "K\n\n";
        text = globals.converter._dispatch("hashBlock.after", text, options, globals);
        return text;
      });
      showdown2.subParser("hashCodeTags", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashCodeTags.before", text, options, globals);
        var repFunc = /* @__PURE__ */ __name(function(wholeMatch, match, left, right) {
          var codeblock = left + showdown2.subParser("encodeCode")(match, options, globals) + right;
          return "\xA8C" + (globals.gHtmlSpans.push(codeblock) - 1) + "C";
        }, "repFunc");
        text = showdown2.helper.replaceRecursiveRegExp(text, repFunc, "<code\\b[^>]*>", "</code>", "gim");
        text = globals.converter._dispatch("hashCodeTags.after", text, options, globals);
        return text;
      });
      showdown2.subParser("hashElement", function(text, options, globals) {
        "use strict";
        return function(wholeMatch, m1) {
          var blockText = m1;
          blockText = blockText.replace(/\n\n/g, "\n");
          blockText = blockText.replace(/^\n/, "");
          blockText = blockText.replace(/\n+$/g, "");
          blockText = "\n\n\xA8K" + (globals.gHtmlBlocks.push(blockText) - 1) + "K\n\n";
          return blockText;
        };
      });
      showdown2.subParser("hashHTMLBlocks", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashHTMLBlocks.before", text, options, globals);
        var blockTags = [
          "pre",
          "div",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "blockquote",
          "table",
          "dl",
          "ol",
          "ul",
          "script",
          "noscript",
          "form",
          "fieldset",
          "iframe",
          "math",
          "style",
          "section",
          "header",
          "footer",
          "nav",
          "article",
          "aside",
          "address",
          "audio",
          "canvas",
          "figure",
          "hgroup",
          "output",
          "video",
          "p"
        ], repFunc = /* @__PURE__ */ __name(function(wholeMatch, match, left, right) {
          var txt = wholeMatch;
          if (left.search(/\bmarkdown\b/) !== -1) {
            txt = left + globals.converter.makeHtml(match) + right;
          }
          return "\n\n\xA8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
        }, "repFunc");
        if (options.backslashEscapesHTMLTags) {
          text = text.replace(/\\<(\/?[^>]+?)>/g, function(wm, inside) {
            return "&lt;" + inside + "&gt;";
          });
        }
        for (var i = 0; i < blockTags.length; ++i) {
          var opTagPos, rgx1 = new RegExp("^ {0,3}(<" + blockTags[i] + "\\b[^>]*>)", "im"), patLeft = "<" + blockTags[i] + "\\b[^>]*>", patRight = "</" + blockTags[i] + ">";
          while ((opTagPos = showdown2.helper.regexIndexOf(text, rgx1)) !== -1) {
            var subTexts = showdown2.helper.splitAtIndex(text, opTagPos), newSubText1 = showdown2.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, "im");
            if (newSubText1 === subTexts[1]) {
              break;
            }
            text = subTexts[0].concat(newSubText1);
          }
        }
        text = text.replace(
          /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
          showdown2.subParser("hashElement")(text, options, globals)
        );
        text = showdown2.helper.replaceRecursiveRegExp(text, function(txt) {
          return "\n\n\xA8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
        }, "^ {0,3}<!--", "-->", "gm");
        text = text.replace(
          /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
          showdown2.subParser("hashElement")(text, options, globals)
        );
        text = globals.converter._dispatch("hashHTMLBlocks.after", text, options, globals);
        return text;
      });
      showdown2.subParser("hashHTMLSpans", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashHTMLSpans.before", text, options, globals);
        function hashHTMLSpan(html) {
          return "\xA8C" + (globals.gHtmlSpans.push(html) - 1) + "C";
        }
        __name(hashHTMLSpan, "hashHTMLSpan");
        text = text.replace(/<[^>]+?\/>/gi, function(wm) {
          return hashHTMLSpan(wm);
        });
        text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(wm) {
          return hashHTMLSpan(wm);
        });
        text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(wm) {
          return hashHTMLSpan(wm);
        });
        text = text.replace(/<[^>]+?>/gi, function(wm) {
          return hashHTMLSpan(wm);
        });
        text = globals.converter._dispatch("hashHTMLSpans.after", text, options, globals);
        return text;
      });
      showdown2.subParser("unhashHTMLSpans", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("unhashHTMLSpans.before", text, options, globals);
        for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
          var repText = globals.gHtmlSpans[i], limit = 0;
          while (/¨C(\d+)C/.test(repText)) {
            var num = RegExp.$1;
            repText = repText.replace("\xA8C" + num + "C", globals.gHtmlSpans[num]);
            if (limit === 10) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }
            ++limit;
          }
          text = text.replace("\xA8C" + i + "C", repText);
        }
        text = globals.converter._dispatch("unhashHTMLSpans.after", text, options, globals);
        return text;
      });
      showdown2.subParser("hashPreCodeTags", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashPreCodeTags.before", text, options, globals);
        var repFunc = /* @__PURE__ */ __name(function(wholeMatch, match, left, right) {
          var codeblock = left + showdown2.subParser("encodeCode")(match, options, globals) + right;
          return "\n\n\xA8G" + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock }) - 1) + "G\n\n";
        }, "repFunc");
        text = showdown2.helper.replaceRecursiveRegExp(text, repFunc, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim");
        text = globals.converter._dispatch("hashPreCodeTags.after", text, options, globals);
        return text;
      });
      showdown2.subParser("headers", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("headers.before", text, options, globals);
        var headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart), setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        text = text.replace(setextRegexH1, function(wholeMatch, m1) {
          var spanGamut = showdown2.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
          return showdown2.subParser("hashBlock")(hashBlock, options, globals);
        });
        text = text.replace(setextRegexH2, function(matchFound, m1) {
          var spanGamut = showdown2.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart + 1, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
          return showdown2.subParser("hashBlock")(hashBlock, options, globals);
        });
        var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        text = text.replace(atxStyle, function(wholeMatch, m1, m2) {
          var hText = m2;
          if (options.customizedHeaderId) {
            hText = m2.replace(/\s?\{([^{]+?)}\s*$/, "");
          }
          var span = showdown2.subParser("spanGamut")(hText, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m2) + '"', hLevel = headerLevelStart - 1 + m1.length, header = "<h" + hLevel + hID + ">" + span + "</h" + hLevel + ">";
          return showdown2.subParser("hashBlock")(header, options, globals);
        });
        function headerId(m) {
          var title2, prefix;
          if (options.customizedHeaderId) {
            var match = m.match(/\{([^{]+?)}\s*$/);
            if (match && match[1]) {
              m = match[1];
            }
          }
          title2 = m;
          if (showdown2.helper.isString(options.prefixHeaderId)) {
            prefix = options.prefixHeaderId;
          } else if (options.prefixHeaderId === true) {
            prefix = "section-";
          } else {
            prefix = "";
          }
          if (!options.rawPrefixHeaderId) {
            title2 = prefix + title2;
          }
          if (options.ghCompatibleHeaderId) {
            title2 = title2.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase();
          } else if (options.rawHeaderId) {
            title2 = title2.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "\xA8").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase();
          } else {
            title2 = title2.replace(/[^\w]/g, "").toLowerCase();
          }
          if (options.rawPrefixHeaderId) {
            title2 = prefix + title2;
          }
          if (globals.hashLinkCounts[title2]) {
            title2 = title2 + "-" + globals.hashLinkCounts[title2]++;
          } else {
            globals.hashLinkCounts[title2] = 1;
          }
          return title2;
        }
        __name(headerId, "headerId");
        text = globals.converter._dispatch("headers.after", text, options, globals);
        return text;
      });
      showdown2.subParser("horizontalRule", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("horizontalRule.before", text, options, globals);
        var key = showdown2.subParser("hashBlock")("<hr />", options, globals);
        text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
        text = globals.converter._dispatch("horizontalRule.after", text, options, globals);
        return text;
      });
      showdown2.subParser("images", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("images.before", text, options, globals);
        var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;
        function writeImageTagBase64(wholeMatch, altText, linkId, url, width, height, m5, title2) {
          url = url.replace(/\s/g, "");
          return writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title2);
        }
        __name(writeImageTagBase64, "writeImageTagBase64");
        function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title2) {
          var gUrls = globals.gUrls, gTitles = globals.gTitles, gDims = globals.gDimensions;
          linkId = linkId.toLowerCase();
          if (!title2) {
            title2 = "";
          }
          if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
            url = "";
          } else if (url === "" || url === null) {
            if (linkId === "" || linkId === null) {
              linkId = altText.toLowerCase().replace(/ ?\n/g, " ");
            }
            url = "#" + linkId;
            if (!showdown2.helper.isUndefined(gUrls[linkId])) {
              url = gUrls[linkId];
              if (!showdown2.helper.isUndefined(gTitles[linkId])) {
                title2 = gTitles[linkId];
              }
              if (!showdown2.helper.isUndefined(gDims[linkId])) {
                width = gDims[linkId].width;
                height = gDims[linkId].height;
              }
            } else {
              return wholeMatch;
            }
          }
          altText = altText.replace(/"/g, "&quot;").replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
          url = url.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
          var result = '<img src="' + url + '" alt="' + altText + '"';
          if (title2 && showdown2.helper.isString(title2)) {
            title2 = title2.replace(/"/g, "&quot;").replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
            result += ' title="' + title2 + '"';
          }
          if (width && height) {
            width = width === "*" ? "auto" : width;
            height = height === "*" ? "auto" : height;
            result += ' width="' + width + '"';
            result += ' height="' + height + '"';
          }
          result += " />";
          return result;
        }
        __name(writeImageTag, "writeImageTag");
        text = text.replace(referenceRegExp, writeImageTag);
        text = text.replace(base64RegExp, writeImageTagBase64);
        text = text.replace(crazyRegExp, writeImageTag);
        text = text.replace(inlineRegExp, writeImageTag);
        text = text.replace(refShortcutRegExp, writeImageTag);
        text = globals.converter._dispatch("images.after", text, options, globals);
        return text;
      });
      showdown2.subParser("italicsAndBold", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("italicsAndBold.before", text, options, globals);
        function parseInside(txt, left, right) {
          return left + txt + right;
        }
        __name(parseInside, "parseInside");
        if (options.literalMidWordUnderscores) {
          text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
            return parseInside(txt, "<strong><em>", "</em></strong>");
          });
          text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
            return parseInside(txt, "<strong>", "</strong>");
          });
          text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function(wm, txt) {
            return parseInside(txt, "<em>", "</em>");
          });
        } else {
          text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
          });
          text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
          });
          text = text.replace(/_([^\s_][\s\S]*?)_/g, function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
          });
        }
        if (options.literalMidWordAsterisks) {
          text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(wm, lead, txt) {
            return parseInside(txt, lead + "<strong><em>", "</em></strong>");
          });
          text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(wm, lead, txt) {
            return parseInside(txt, lead + "<strong>", "</strong>");
          });
          text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(wm, lead, txt) {
            return parseInside(txt, lead + "<em>", "</em>");
          });
        } else {
          text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
          });
          text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
          });
          text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
          });
        }
        text = globals.converter._dispatch("italicsAndBold.after", text, options, globals);
        return text;
      });
      showdown2.subParser("lists", function(text, options, globals) {
        "use strict";
        function processListItems(listStr, trimTrailing) {
          globals.gListLevel++;
          listStr = listStr.replace(/\n{2,}$/, "\n");
          listStr += "\xA80";
          var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr);
          if (options.disableForced4SpacesIndentedSublists) {
            rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
          }
          listStr = listStr.replace(rgx, function(wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
            checked = checked && checked.trim() !== "";
            var item = showdown2.subParser("outdent")(m4, options, globals), bulletStyle = "";
            if (taskbtn && options.tasklists) {
              bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
              item = item.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                if (checked) {
                  otp += " checked";
                }
                otp += ">";
                return otp;
              });
            }
            item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(wm2) {
              return "\xA8A" + wm2;
            });
            if (m1 || item.search(/\n{2,}/) > -1) {
              item = showdown2.subParser("githubCodeBlocks")(item, options, globals);
              item = showdown2.subParser("blockGamut")(item, options, globals);
            } else {
              item = showdown2.subParser("lists")(item, options, globals);
              item = item.replace(/\n$/, "");
              item = showdown2.subParser("hashHTMLBlocks")(item, options, globals);
              item = item.replace(/\n\n+/g, "\n\n");
              if (isParagraphed) {
                item = showdown2.subParser("paragraphs")(item, options, globals);
              } else {
                item = showdown2.subParser("spanGamut")(item, options, globals);
              }
            }
            item = item.replace("\xA8A", "");
            item = "<li" + bulletStyle + ">" + item + "</li>\n";
            return item;
          });
          listStr = listStr.replace(/¨0/g, "");
          globals.gListLevel--;
          if (trimTrailing) {
            listStr = listStr.replace(/\s+$/, "");
          }
          return listStr;
        }
        __name(processListItems, "processListItems");
        function styleStartNumber(list, listType) {
          if (listType === "ol") {
            var res = list.match(/^ *(\d+)\./);
            if (res && res[1] !== "1") {
              return ' start="' + res[1] + '"';
            }
          }
          return "";
        }
        __name(styleStartNumber, "styleStartNumber");
        function parseConsecutiveLists(list, listType, trimTrailing) {
          var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, counterRxg = listType === "ul" ? olRgx : ulRgx, result = "";
          if (list.search(counterRxg) !== -1) {
            (/* @__PURE__ */ __name((function parseCL(txt) {
              var pos = txt.search(counterRxg), style2 = styleStartNumber(list, listType);
              if (pos !== -1) {
                result += "\n\n<" + listType + style2 + ">\n" + processListItems(txt.slice(0, pos), !!trimTrailing) + "</" + listType + ">\n";
                listType = listType === "ul" ? "ol" : "ul";
                counterRxg = listType === "ul" ? olRgx : ulRgx;
                parseCL(txt.slice(pos));
              } else {
                result += "\n\n<" + listType + style2 + ">\n" + processListItems(txt, !!trimTrailing) + "</" + listType + ">\n";
              }
            }), "parseCL"))(list);
          } else {
            var style = styleStartNumber(list, listType);
            result = "\n\n<" + listType + style + ">\n" + processListItems(list, !!trimTrailing) + "</" + listType + ">\n";
          }
          return result;
        }
        __name(parseConsecutiveLists, "parseConsecutiveLists");
        text = globals.converter._dispatch("lists.before", text, options, globals);
        text += "\xA80";
        if (globals.gListLevel) {
          text = text.replace(
            /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
            function(wholeMatch, list, m2) {
              var listType = m2.search(/[*+-]/g) > -1 ? "ul" : "ol";
              return parseConsecutiveLists(list, listType, true);
            }
          );
        } else {
          text = text.replace(
            /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
            function(wholeMatch, m1, list, m3) {
              var listType = m3.search(/[*+-]/g) > -1 ? "ul" : "ol";
              return parseConsecutiveLists(list, listType, false);
            }
          );
        }
        text = text.replace(/¨0/, "");
        text = globals.converter._dispatch("lists.after", text, options, globals);
        return text;
      });
      showdown2.subParser("metadata", function(text, options, globals) {
        "use strict";
        if (!options.metadata) {
          return text;
        }
        text = globals.converter._dispatch("metadata.before", text, options, globals);
        function parseMetadataContents(content) {
          globals.metadata.raw = content;
          content = content.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
          content = content.replace(/\n {4}/g, " ");
          content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(wm, key, value) {
            globals.metadata.parsed[key] = value;
            return "";
          });
        }
        __name(parseMetadataContents, "parseMetadataContents");
        text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(wholematch, format, content) {
          parseMetadataContents(content);
          return "\xA8M";
        });
        text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(wholematch, format, content) {
          if (format) {
            globals.metadata.format = format;
          }
          parseMetadataContents(content);
          return "\xA8M";
        });
        text = text.replace(/¨M/g, "");
        text = globals.converter._dispatch("metadata.after", text, options, globals);
        return text;
      });
      showdown2.subParser("outdent", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("outdent.before", text, options, globals);
        text = text.replace(/^(\t|[ ]{1,4})/gm, "\xA80");
        text = text.replace(/¨0/g, "");
        text = globals.converter._dispatch("outdent.after", text, options, globals);
        return text;
      });
      showdown2.subParser("paragraphs", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("paragraphs.before", text, options, globals);
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");
        var grafs = text.split(/\n{2,}/g), grafsOut = [], end = grafs.length;
        for (var i = 0; i < end; i++) {
          var str = grafs[i];
          if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
            grafsOut.push(str);
          } else if (str.search(/\S/) >= 0) {
            str = showdown2.subParser("spanGamut")(str, options, globals);
            str = str.replace(/^([ \t]*)/g, "<p>");
            str += "</p>";
            grafsOut.push(str);
          }
        }
        end = grafsOut.length;
        for (i = 0; i < end; i++) {
          var blockText = "", grafsOutIt = grafsOut[i], codeFlag = false;
          while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
            var delim = RegExp.$1, num = RegExp.$2;
            if (delim === "K") {
              blockText = globals.gHtmlBlocks[num];
            } else {
              if (codeFlag) {
                blockText = showdown2.subParser("encodeCode")(globals.ghCodeBlocks[num].text, options, globals);
              } else {
                blockText = globals.ghCodeBlocks[num].codeblock;
              }
            }
            blockText = blockText.replace(/\$/g, "$$$$");
            grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
            if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
              codeFlag = true;
            }
          }
          grafsOut[i] = grafsOutIt;
        }
        text = grafsOut.join("\n");
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");
        return globals.converter._dispatch("paragraphs.after", text, options, globals);
      });
      showdown2.subParser("runExtension", function(ext, text, options, globals) {
        "use strict";
        if (ext.filter) {
          text = ext.filter(text, globals.converter, options);
        } else if (ext.regex) {
          var re = ext.regex;
          if (!(re instanceof RegExp)) {
            re = new RegExp(re, "g");
          }
          text = text.replace(re, ext.replace);
        }
        return text;
      });
      showdown2.subParser("spanGamut", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("spanGamut.before", text, options, globals);
        text = showdown2.subParser("codeSpans")(text, options, globals);
        text = showdown2.subParser("escapeSpecialCharsWithinTagAttributes")(text, options, globals);
        text = showdown2.subParser("encodeBackslashEscapes")(text, options, globals);
        text = showdown2.subParser("images")(text, options, globals);
        text = showdown2.subParser("anchors")(text, options, globals);
        text = showdown2.subParser("autoLinks")(text, options, globals);
        text = showdown2.subParser("simplifiedAutoLinks")(text, options, globals);
        text = showdown2.subParser("emoji")(text, options, globals);
        text = showdown2.subParser("underline")(text, options, globals);
        text = showdown2.subParser("italicsAndBold")(text, options, globals);
        text = showdown2.subParser("strikethrough")(text, options, globals);
        text = showdown2.subParser("ellipsis")(text, options, globals);
        text = showdown2.subParser("hashHTMLSpans")(text, options, globals);
        text = showdown2.subParser("encodeAmpsAndAngles")(text, options, globals);
        if (options.simpleLineBreaks) {
          if (!/\n\n¨K/.test(text)) {
            text = text.replace(/\n+/g, "<br />\n");
          }
        } else {
          text = text.replace(/  +\n/g, "<br />\n");
        }
        text = globals.converter._dispatch("spanGamut.after", text, options, globals);
        return text;
      });
      showdown2.subParser("strikethrough", function(text, options, globals) {
        "use strict";
        function parseInside(txt) {
          if (options.simplifiedAutoLink) {
            txt = showdown2.subParser("simplifiedAutoLinks")(txt, options, globals);
          }
          return "<del>" + txt + "</del>";
        }
        __name(parseInside, "parseInside");
        if (options.strikethrough) {
          text = globals.converter._dispatch("strikethrough.before", text, options, globals);
          text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(wm, txt) {
            return parseInside(txt);
          });
          text = globals.converter._dispatch("strikethrough.after", text, options, globals);
        }
        return text;
      });
      showdown2.subParser("stripLinkDefinitions", function(text, options, globals) {
        "use strict";
        var regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, base64Regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        text += "\xA80";
        var replaceFunc = /* @__PURE__ */ __name(function(wholeMatch, linkId, url, width, height, blankLines, title2) {
          linkId = linkId.toLowerCase();
          if (text.toLowerCase().split(linkId).length - 1 < 2) {
            return wholeMatch;
          }
          if (url.match(/^data:.+?\/.+?;base64,/)) {
            globals.gUrls[linkId] = url.replace(/\s/g, "");
          } else {
            globals.gUrls[linkId] = showdown2.subParser("encodeAmpsAndAngles")(url, options, globals);
          }
          if (blankLines) {
            return blankLines + title2;
          } else {
            if (title2) {
              globals.gTitles[linkId] = title2.replace(/"|'/g, "&quot;");
            }
            if (options.parseImgDimensions && width && height) {
              globals.gDimensions[linkId] = {
                width,
                height
              };
            }
          }
          return "";
        }, "replaceFunc");
        text = text.replace(base64Regex, replaceFunc);
        text = text.replace(regex, replaceFunc);
        text = text.replace(/¨0/, "");
        return text;
      });
      showdown2.subParser("tables", function(text, options, globals) {
        "use strict";
        if (!options.tables) {
          return text;
        }
        var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function parseStyles(sLine) {
          if (/^:[ \t]*--*$/.test(sLine)) {
            return ' style="text-align:left;"';
          } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
            return ' style="text-align:right;"';
          } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
            return ' style="text-align:center;"';
          } else {
            return "";
          }
        }
        __name(parseStyles, "parseStyles");
        function parseHeaders(header, style) {
          var id = "";
          header = header.trim();
          if (options.tablesHeaderId || options.tableHeaderId) {
            id = ' id="' + header.replace(/ /g, "_").toLowerCase() + '"';
          }
          header = showdown2.subParser("spanGamut")(header, options, globals);
          return "<th" + id + style + ">" + header + "</th>\n";
        }
        __name(parseHeaders, "parseHeaders");
        function parseCells(cell, style) {
          var subText = showdown2.subParser("spanGamut")(cell, options, globals);
          return "<td" + style + ">" + subText + "</td>\n";
        }
        __name(parseCells, "parseCells");
        function buildTable(headers, cells) {
          var tb = "<table>\n<thead>\n<tr>\n", tblLgn = headers.length;
          for (var i = 0; i < tblLgn; ++i) {
            tb += headers[i];
          }
          tb += "</tr>\n</thead>\n<tbody>\n";
          for (i = 0; i < cells.length; ++i) {
            tb += "<tr>\n";
            for (var ii = 0; ii < tblLgn; ++ii) {
              tb += cells[i][ii];
            }
            tb += "</tr>\n";
          }
          tb += "</tbody>\n</table>\n";
          return tb;
        }
        __name(buildTable, "buildTable");
        function parseTable(rawTable) {
          var i, tableLines = rawTable.split("\n");
          for (i = 0; i < tableLines.length; ++i) {
            if (/^ {0,3}\|/.test(tableLines[i])) {
              tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, "");
            }
            if (/\|[ \t]*$/.test(tableLines[i])) {
              tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, "");
            }
            tableLines[i] = showdown2.subParser("codeSpans")(tableLines[i], options, globals);
          }
          var rawHeaders2 = tableLines[0].split("|").map(function(s) {
            return s.trim();
          }), rawStyles = tableLines[1].split("|").map(function(s) {
            return s.trim();
          }), rawCells = [], headers = [], styles = [], cells = [];
          tableLines.shift();
          tableLines.shift();
          for (i = 0; i < tableLines.length; ++i) {
            if (tableLines[i].trim() === "") {
              continue;
            }
            rawCells.push(
              tableLines[i].split("|").map(function(s) {
                return s.trim();
              })
            );
          }
          if (rawHeaders2.length < rawStyles.length) {
            return rawTable;
          }
          for (i = 0; i < rawStyles.length; ++i) {
            styles.push(parseStyles(rawStyles[i]));
          }
          for (i = 0; i < rawHeaders2.length; ++i) {
            if (showdown2.helper.isUndefined(styles[i])) {
              styles[i] = "";
            }
            headers.push(parseHeaders(rawHeaders2[i], styles[i]));
          }
          for (i = 0; i < rawCells.length; ++i) {
            var row = [];
            for (var ii = 0; ii < headers.length; ++ii) {
              if (showdown2.helper.isUndefined(rawCells[i][ii])) {
              }
              row.push(parseCells(rawCells[i][ii], styles[ii]));
            }
            cells.push(row);
          }
          return buildTable(headers, cells);
        }
        __name(parseTable, "parseTable");
        text = globals.converter._dispatch("tables.before", text, options, globals);
        text = text.replace(/\\(\|)/g, showdown2.helper.escapeCharactersCallback);
        text = text.replace(tableRgx, parseTable);
        text = text.replace(singeColTblRgx, parseTable);
        text = globals.converter._dispatch("tables.after", text, options, globals);
        return text;
      });
      showdown2.subParser("underline", function(text, options, globals) {
        "use strict";
        if (!options.underline) {
          return text;
        }
        text = globals.converter._dispatch("underline.before", text, options, globals);
        if (options.literalMidWordUnderscores) {
          text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
            return "<u>" + txt + "</u>";
          });
          text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
            return "<u>" + txt + "</u>";
          });
        } else {
          text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
            return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
          });
          text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
            return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
          });
        }
        text = text.replace(/(_)/g, showdown2.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("underline.after", text, options, globals);
        return text;
      });
      showdown2.subParser("unescapeSpecialChars", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("unescapeSpecialChars.before", text, options, globals);
        text = text.replace(/¨E(\d+)E/g, function(wholeMatch, m1) {
          var charCodeToReplace = parseInt(m1);
          return String.fromCharCode(charCodeToReplace);
        });
        text = globals.converter._dispatch("unescapeSpecialChars.after", text, options, globals);
        return text;
      });
      showdown2.subParser("makeMarkdown.blockquote", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
          var children = node.childNodes, childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            var innerTxt = showdown2.subParser("makeMarkdown.node")(children[i], globals);
            if (innerTxt === "") {
              continue;
            }
            txt += innerTxt;
          }
        }
        txt = txt.trim();
        txt = "> " + txt.split("\n").join("\n> ");
        return txt;
      });
      showdown2.subParser("makeMarkdown.codeBlock", function(node, globals) {
        "use strict";
        var lang = node.getAttribute("language"), num = node.getAttribute("precodenum");
        return "```" + lang + "\n" + globals.preList[num] + "\n```";
      });
      showdown2.subParser("makeMarkdown.codeSpan", function(node) {
        "use strict";
        return "`" + node.innerHTML + "`";
      });
      showdown2.subParser("makeMarkdown.emphasis", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
          txt += "*";
          var children = node.childNodes, childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown2.subParser("makeMarkdown.node")(children[i], globals);
          }
          txt += "*";
        }
        return txt;
      });
      showdown2.subParser("makeMarkdown.header", function(node, globals, headerLevel) {
        "use strict";
        var headerMark = new Array(headerLevel + 1).join("#"), txt = "";
        if (node.hasChildNodes()) {
          txt = headerMark + " ";
          var children = node.childNodes, childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown2.subParser("makeMarkdown.node")(children[i], globals);
          }
        }
        return txt;
      });
      showdown2.subParser("makeMarkdown.hr", function() {
        "use strict";
        return "---";
      });
      showdown2.subParser("makeMarkdown.image", function(node) {
        "use strict";
        var txt = "";
        if (node.hasAttribute("src")) {
          txt += "![" + node.getAttribute("alt") + "](";
          txt += "<" + node.getAttribute("src") + ">";
          if (node.hasAttribute("width") && node.hasAttribute("height")) {
            txt += " =" + node.getAttribute("width") + "x" + node.getAttribute("height");
          }
          if (node.hasAttribute("title")) {
            txt += ' "' + node.getAttribute("title") + '"';
          }
          txt += ")";
        }
        return txt;
      });
      showdown2.subParser("makeMarkdown.links", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes() && node.hasAttribute("href")) {
          var children = node.childNodes, childrenLength = children.length;
          txt = "[";
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown2.subParser("makeMarkdown.node")(children[i], globals);
          }
          txt += "](";
          txt += "<" + node.getAttribute("href") + ">";
          if (node.hasAttribute("title")) {
            txt += ' "' + node.getAttribute("title") + '"';
          }
          txt += ")";
        }
        return txt;
      });
      showdown2.subParser("makeMarkdown.list", function(node, globals, type) {
        "use strict";
        var txt = "";
        if (!node.hasChildNodes()) {
          return "";
        }
        var listItems = node.childNodes, listItemsLenght = listItems.length, listNum = node.getAttribute("start") || 1;
        for (var i = 0; i < listItemsLenght; ++i) {
          if (typeof listItems[i].tagName === "undefined" || listItems[i].tagName.toLowerCase() !== "li") {
            continue;
          }
          var bullet = "";
          if (type === "ol") {
            bullet = listNum.toString() + ". ";
          } else {
            bullet = "- ";
          }
          txt += bullet + showdown2.subParser("makeMarkdown.listItem")(listItems[i], globals);
          ++listNum;
        }
        txt += "\n<!-- -->\n";
        return txt.trim();
      });
      showdown2.subParser("makeMarkdown.listItem", function(node, globals) {
        "use strict";
        var listItemTxt = "";
        var children = node.childNodes, childrenLenght = children.length;
        for (var i = 0; i < childrenLenght; ++i) {
          listItemTxt += showdown2.subParser("makeMarkdown.node")(children[i], globals);
        }
        if (!/\n$/.test(listItemTxt)) {
          listItemTxt += "\n";
        } else {
          listItemTxt = listItemTxt.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n");
        }
        return listItemTxt;
      });
      showdown2.subParser("makeMarkdown.node", function(node, globals, spansOnly) {
        "use strict";
        spansOnly = spansOnly || false;
        var txt = "";
        if (node.nodeType === 3) {
          return showdown2.subParser("makeMarkdown.txt")(node, globals);
        }
        if (node.nodeType === 8) {
          return "<!--" + node.data + "-->\n\n";
        }
        if (node.nodeType !== 1) {
          return "";
        }
        var tagName = node.tagName.toLowerCase();
        switch (tagName) {
          //
          // BLOCKS
          //
          case "h1":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.header")(node, globals, 1) + "\n\n";
            }
            break;
          case "h2":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.header")(node, globals, 2) + "\n\n";
            }
            break;
          case "h3":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.header")(node, globals, 3) + "\n\n";
            }
            break;
          case "h4":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.header")(node, globals, 4) + "\n\n";
            }
            break;
          case "h5":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.header")(node, globals, 5) + "\n\n";
            }
            break;
          case "h6":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.header")(node, globals, 6) + "\n\n";
            }
            break;
          case "p":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.paragraph")(node, globals) + "\n\n";
            }
            break;
          case "blockquote":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.blockquote")(node, globals) + "\n\n";
            }
            break;
          case "hr":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.hr")(node, globals) + "\n\n";
            }
            break;
          case "ol":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.list")(node, globals, "ol") + "\n\n";
            }
            break;
          case "ul":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.list")(node, globals, "ul") + "\n\n";
            }
            break;
          case "precode":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.codeBlock")(node, globals) + "\n\n";
            }
            break;
          case "pre":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.pre")(node, globals) + "\n\n";
            }
            break;
          case "table":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.table")(node, globals) + "\n\n";
            }
            break;
          //
          // SPANS
          //
          case "code":
            txt = showdown2.subParser("makeMarkdown.codeSpan")(node, globals);
            break;
          case "em":
          case "i":
            txt = showdown2.subParser("makeMarkdown.emphasis")(node, globals);
            break;
          case "strong":
          case "b":
            txt = showdown2.subParser("makeMarkdown.strong")(node, globals);
            break;
          case "del":
            txt = showdown2.subParser("makeMarkdown.strikethrough")(node, globals);
            break;
          case "a":
            txt = showdown2.subParser("makeMarkdown.links")(node, globals);
            break;
          case "img":
            txt = showdown2.subParser("makeMarkdown.image")(node, globals);
            break;
          default:
            txt = node.outerHTML + "\n\n";
        }
        return txt;
      });
      showdown2.subParser("makeMarkdown.paragraph", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
          var children = node.childNodes, childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown2.subParser("makeMarkdown.node")(children[i], globals);
          }
        }
        txt = txt.trim();
        return txt;
      });
      showdown2.subParser("makeMarkdown.pre", function(node, globals) {
        "use strict";
        var num = node.getAttribute("prenum");
        return "<pre>" + globals.preList[num] + "</pre>";
      });
      showdown2.subParser("makeMarkdown.strikethrough", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
          txt += "~~";
          var children = node.childNodes, childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown2.subParser("makeMarkdown.node")(children[i], globals);
          }
          txt += "~~";
        }
        return txt;
      });
      showdown2.subParser("makeMarkdown.strong", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
          txt += "**";
          var children = node.childNodes, childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown2.subParser("makeMarkdown.node")(children[i], globals);
          }
          txt += "**";
        }
        return txt;
      });
      showdown2.subParser("makeMarkdown.table", function(node, globals) {
        "use strict";
        var txt = "", tableArray = [[], []], headings = node.querySelectorAll("thead>tr>th"), rows = node.querySelectorAll("tbody>tr"), i, ii;
        for (i = 0; i < headings.length; ++i) {
          var headContent = showdown2.subParser("makeMarkdown.tableCell")(headings[i], globals), allign = "---";
          if (headings[i].hasAttribute("style")) {
            var style = headings[i].getAttribute("style").toLowerCase().replace(/\s/g, "");
            switch (style) {
              case "text-align:left;":
                allign = ":---";
                break;
              case "text-align:right;":
                allign = "---:";
                break;
              case "text-align:center;":
                allign = ":---:";
                break;
            }
          }
          tableArray[0][i] = headContent.trim();
          tableArray[1][i] = allign;
        }
        for (i = 0; i < rows.length; ++i) {
          var r = tableArray.push([]) - 1, cols = rows[i].getElementsByTagName("td");
          for (ii = 0; ii < headings.length; ++ii) {
            var cellContent = " ";
            if (typeof cols[ii] !== "undefined") {
              cellContent = showdown2.subParser("makeMarkdown.tableCell")(cols[ii], globals);
            }
            tableArray[r].push(cellContent);
          }
        }
        var cellSpacesCount = 3;
        for (i = 0; i < tableArray.length; ++i) {
          for (ii = 0; ii < tableArray[i].length; ++ii) {
            var strLen = tableArray[i][ii].length;
            if (strLen > cellSpacesCount) {
              cellSpacesCount = strLen;
            }
          }
        }
        for (i = 0; i < tableArray.length; ++i) {
          for (ii = 0; ii < tableArray[i].length; ++ii) {
            if (i === 1) {
              if (tableArray[i][ii].slice(-1) === ":") {
                tableArray[i][ii] = showdown2.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, "-") + ":";
              } else {
                tableArray[i][ii] = showdown2.helper.padEnd(tableArray[i][ii], cellSpacesCount, "-");
              }
            } else {
              tableArray[i][ii] = showdown2.helper.padEnd(tableArray[i][ii], cellSpacesCount);
            }
          }
          txt += "| " + tableArray[i].join(" | ") + " |\n";
        }
        return txt.trim();
      });
      showdown2.subParser("makeMarkdown.tableCell", function(node, globals) {
        "use strict";
        var txt = "";
        if (!node.hasChildNodes()) {
          return "";
        }
        var children = node.childNodes, childrenLength = children.length;
        for (var i = 0; i < childrenLength; ++i) {
          txt += showdown2.subParser("makeMarkdown.node")(children[i], globals, true);
        }
        return txt.trim();
      });
      showdown2.subParser("makeMarkdown.txt", function(node) {
        "use strict";
        var txt = node.nodeValue;
        txt = txt.replace(/ +/g, " ");
        txt = txt.replace(/¨NBSP;/g, " ");
        txt = showdown2.helper.unescapeHTMLEntities(txt);
        txt = txt.replace(/([*_~|`])/g, "\\$1");
        txt = txt.replace(/^(\s*)>/g, "\\$1>");
        txt = txt.replace(/^#/gm, "\\#");
        txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3");
        txt = txt.replace(/^( {0,3}\d+)\./gm, "$1\\.");
        txt = txt.replace(/^( {0,3})([+-])/gm, "$1\\$2");
        txt = txt.replace(/]([\s]*)\(/g, "\\]$1\\(");
        txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:");
        return txt;
      });
      var root = this;
      if (typeof define === "function" && define.amd) {
        define(function() {
          "use strict";
          return showdown2;
        });
      } else if (typeof module !== "undefined" && module.exports) {
        module.exports = showdown2;
      } else {
        root.showdown = showdown2;
      }
    }).call(exports);
  }
});

// .wrangler/tmp/bundle-fLKFiF/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-fLKFiF/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/worker.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/bbbot.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_telegraf5 = __toESM(require_lib());

// src/middlewares/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/middlewares/post/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_telegraf2 = __toESM(require_lib());

// src/utils/DataBase.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+supabase-js@2.43.5/node_modules/@supabase/supabase-js/dist/module/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+supabase-js@2.43.5/node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+functions-js@2.4.1/node_modules/@supabase/functions-js/dist/module/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+functions-js@2.4.1/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+functions-js@2.4.1/node_modules/@supabase/functions-js/dist/module/helper.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var resolveFetch = /* @__PURE__ */ __name((customFetch) => {
  let _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else if (typeof fetch === "undefined") {
    _fetch = /* @__PURE__ */ __name((...args) => Promise.resolve().then(() => (init_browser(), browser_exports)).then(({ default: fetch4 }) => fetch4(...args)), "_fetch");
  } else {
    _fetch = fetch;
  }
  return (...args) => _fetch(...args);
}, "resolveFetch");

// node_modules/.pnpm/@supabase+functions-js@2.4.1/node_modules/@supabase/functions-js/dist/module/types.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var FunctionsError = class extends Error {
  static {
    __name(this, "FunctionsError");
  }
  constructor(message, name = "FunctionsError", context2) {
    super(message);
    this.name = name;
    this.context = context2;
  }
};
var FunctionsFetchError = class extends FunctionsError {
  static {
    __name(this, "FunctionsFetchError");
  }
  constructor(context2) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", context2);
  }
};
var FunctionsRelayError = class extends FunctionsError {
  static {
    __name(this, "FunctionsRelayError");
  }
  constructor(context2) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", context2);
  }
};
var FunctionsHttpError = class extends FunctionsError {
  static {
    __name(this, "FunctionsHttpError");
  }
  constructor(context2) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", context2);
  }
};
var FunctionRegion;
(function(FunctionRegion2) {
  FunctionRegion2["Any"] = "any";
  FunctionRegion2["ApNortheast1"] = "ap-northeast-1";
  FunctionRegion2["ApNortheast2"] = "ap-northeast-2";
  FunctionRegion2["ApSouth1"] = "ap-south-1";
  FunctionRegion2["ApSoutheast1"] = "ap-southeast-1";
  FunctionRegion2["ApSoutheast2"] = "ap-southeast-2";
  FunctionRegion2["CaCentral1"] = "ca-central-1";
  FunctionRegion2["EuCentral1"] = "eu-central-1";
  FunctionRegion2["EuWest1"] = "eu-west-1";
  FunctionRegion2["EuWest2"] = "eu-west-2";
  FunctionRegion2["EuWest3"] = "eu-west-3";
  FunctionRegion2["SaEast1"] = "sa-east-1";
  FunctionRegion2["UsEast1"] = "us-east-1";
  FunctionRegion2["UsWest1"] = "us-west-1";
  FunctionRegion2["UsWest2"] = "us-west-2";
})(FunctionRegion || (FunctionRegion = {}));

// node_modules/.pnpm/@supabase+functions-js@2.4.1/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var FunctionsClient = class {
  static {
    __name(this, "FunctionsClient");
  }
  constructor(url, { headers = {}, customFetch, region = FunctionRegion.Any } = {}) {
    this.url = url;
    this.headers = headers;
    this.region = region;
    this.fetch = resolveFetch(customFetch);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */
  setAuth(token) {
    this.headers.Authorization = `Bearer ${token}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   */
  invoke(functionName, options = {}) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const { headers, method, body: functionArgs } = options;
        let _headers = {};
        let { region } = options;
        if (!region) {
          region = this.region;
        }
        if (region && region !== "any") {
          _headers["x-region"] = region;
        }
        let body;
        if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, "Content-Type") || !headers)) {
          if (typeof Blob !== "undefined" && functionArgs instanceof Blob || functionArgs instanceof ArrayBuffer) {
            _headers["Content-Type"] = "application/octet-stream";
            body = functionArgs;
          } else if (typeof functionArgs === "string") {
            _headers["Content-Type"] = "text/plain";
            body = functionArgs;
          } else if (typeof FormData !== "undefined" && functionArgs instanceof FormData) {
            body = functionArgs;
          } else {
            _headers["Content-Type"] = "application/json";
            body = JSON.stringify(functionArgs);
          }
        }
        const response = yield this.fetch(`${this.url}/${functionName}`, {
          method: method || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
          body
        }).catch((fetchError) => {
          throw new FunctionsFetchError(fetchError);
        });
        const isRelayError = response.headers.get("x-relay-error");
        if (isRelayError && isRelayError === "true") {
          throw new FunctionsRelayError(response);
        }
        if (!response.ok) {
          throw new FunctionsHttpError(response);
        }
        let responseType = ((_a = response.headers.get("Content-Type")) !== null && _a !== void 0 ? _a : "text/plain").split(";")[0].trim();
        let data;
        if (responseType === "application/json") {
          data = yield response.json();
        } else if (responseType === "application/octet-stream") {
          data = yield response.blob();
        } else if (responseType === "text/event-stream") {
          data = response;
        } else if (responseType === "multipart/form-data") {
          data = yield response.formData();
        } else {
          data = yield response.text();
        }
        return { data, error: null };
      } catch (error3) {
        return { data: null, error: error3 };
      }
    });
  }
};

// node_modules/.pnpm/@supabase+postgrest-js@1.15.5/node_modules/@supabase/postgrest-js/dist/module/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+postgrest-js@1.15.5/node_modules/@supabase/postgrest-js/dist/module/PostgrestClient.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+postgrest-js@1.15.5/node_modules/@supabase/postgrest-js/dist/module/PostgrestQueryBuilder.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+postgrest-js@1.15.5/node_modules/@supabase/postgrest-js/dist/module/PostgrestFilterBuilder.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+postgrest-js@1.15.5/node_modules/@supabase/postgrest-js/dist/module/PostgrestTransformBuilder.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+postgrest-js@1.15.5/node_modules/@supabase/postgrest-js/dist/module/PostgrestBuilder.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_browser();

// node_modules/.pnpm/@supabase+postgrest-js@1.15.5/node_modules/@supabase/postgrest-js/dist/module/PostgrestError.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var PostgrestError = class extends Error {
  static {
    __name(this, "PostgrestError");
  }
  constructor(context2) {
    super(context2.message);
    this.name = "PostgrestError";
    this.details = context2.details;
    this.hint = context2.hint;
    this.code = context2.code;
  }
};

// node_modules/.pnpm/@supabase+postgrest-js@1.15.5/node_modules/@supabase/postgrest-js/dist/module/PostgrestBuilder.js
var PostgrestBuilder = class {
  static {
    __name(this, "PostgrestBuilder");
  }
  constructor(builder) {
    this.shouldThrowOnError = false;
    this.method = builder.method;
    this.url = builder.url;
    this.headers = builder.headers;
    this.schema = builder.schema;
    this.body = builder.body;
    this.shouldThrowOnError = builder.shouldThrowOnError;
    this.signal = builder.signal;
    this.isMaybeSingle = builder.isMaybeSingle;
    if (builder.fetch) {
      this.fetch = builder.fetch;
    } else if (typeof fetch === "undefined") {
      this.fetch = browser_default;
    } else {
      this.fetch = fetch;
    }
  }
  /**
   * If there's an error with the query, throwOnError will reject the promise by
   * throwing the error instead of returning it as part of a successful response.
   *
   * {@link https://github.com/supabase/supabase-js/issues/92}
   */
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  then(onfulfilled, onrejected) {
    if (this.schema === void 0) {
    } else if (["GET", "HEAD"].includes(this.method)) {
      this.headers["Accept-Profile"] = this.schema;
    } else {
      this.headers["Content-Profile"] = this.schema;
    }
    if (this.method !== "GET" && this.method !== "HEAD") {
      this.headers["Content-Type"] = "application/json";
    }
    const _fetch = this.fetch;
    let res = _fetch(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async (res2) => {
      var _a, _b, _c;
      let error3 = null;
      let data = null;
      let count3 = null;
      let status = res2.status;
      let statusText = res2.statusText;
      if (res2.ok) {
        if (this.method !== "HEAD") {
          const body = await res2.text();
          if (body === "") {
          } else if (this.headers["Accept"] === "text/csv") {
            data = body;
          } else if (this.headers["Accept"] && this.headers["Accept"].includes("application/vnd.pgrst.plan+text")) {
            data = body;
          } else {
            data = JSON.parse(body);
          }
        }
        const countHeader = (_a = this.headers["Prefer"]) === null || _a === void 0 ? void 0 : _a.match(/count=(exact|planned|estimated)/);
        const contentRange = (_b = res2.headers.get("content-range")) === null || _b === void 0 ? void 0 : _b.split("/");
        if (countHeader && contentRange && contentRange.length > 1) {
          count3 = parseInt(contentRange[1]);
        }
        if (this.isMaybeSingle && this.method === "GET" && Array.isArray(data)) {
          if (data.length > 1) {
            error3 = {
              // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
              code: "PGRST116",
              details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
              hint: null,
              message: "JSON object requested, multiple (or no) rows returned"
            };
            data = null;
            count3 = null;
            status = 406;
            statusText = "Not Acceptable";
          } else if (data.length === 1) {
            data = data[0];
          } else {
            data = null;
          }
        }
      } else {
        const body = await res2.text();
        try {
          error3 = JSON.parse(body);
          if (Array.isArray(error3) && res2.status === 404) {
            data = [];
            error3 = null;
            status = 200;
            statusText = "OK";
          }
        } catch (_d) {
          if (res2.status === 404 && body === "") {
            status = 204;
            statusText = "No Content";
          } else {
            error3 = {
              message: body
            };
          }
        }
        if (error3 && this.isMaybeSingle && ((_c = error3 === null || error3 === void 0 ? void 0 : error3.details) === null || _c === void 0 ? void 0 : _c.includes("0 rows"))) {
          error3 = null;
          status = 200;
          statusText = "OK";
        }
        if (error3 && this.shouldThrowOnError) {
          throw new PostgrestError(error3);
        }
      }
      const postgrestResponse = {
        error: error3,
        data,
        count: count3,
        status,
        statusText
      };
      return postgrestResponse;
    });
    if (!this.shouldThrowOnError) {
      res = res.catch((fetchError) => {
        var _a, _b, _c;
        return {
          error: {
            message: `${(_a = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _a !== void 0 ? _a : "FetchError"}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
            details: `${(_b = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _b !== void 0 ? _b : ""}`,
            hint: "",
            code: `${(_c = fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) !== null && _c !== void 0 ? _c : ""}`
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      });
    }
    return res.then(onfulfilled, onrejected);
  }
};

// node_modules/.pnpm/@supabase+postgrest-js@1.15.5/node_modules/@supabase/postgrest-js/dist/module/PostgrestTransformBuilder.js
var PostgrestTransformBuilder = class extends PostgrestBuilder {
  static {
    __name(this, "PostgrestTransformBuilder");
  }
  /**
   * Perform a SELECT on the query result.
   *
   * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
   * return modified rows. By calling this method, modified rows are returned in
   * `data`.
   *
   * @param columns - The columns to retrieve, separated by commas
   */
  select(columns) {
    let quoted = false;
    const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map((c) => {
      if (/\s/.test(c) && !quoted) {
        return "";
      }
      if (c === '"') {
        quoted = !quoted;
      }
      return c;
    }).join("");
    this.url.searchParams.set("select", cleanedColumns);
    if (this.headers["Prefer"]) {
      this.headers["Prefer"] += ",";
    }
    this.headers["Prefer"] += "return=representation";
    return this;
  }
  /**
   * Order the query result by `column`.
   *
   * You can call this method multiple times to order by multiple columns.
   *
   * You can order referenced tables, but it only affects the ordering of the
   * parent table if you use `!inner` in the query.
   *
   * @param column - The column to order by
   * @param options - Named parameters
   * @param options.ascending - If `true`, the result will be in ascending order
   * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
   * `null`s appear last.
   * @param options.referencedTable - Set this to order a referenced table by
   * its columns
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
    const key = referencedTable ? `${referencedTable}.order` : "order";
    const existingOrder = this.url.searchParams.get(key);
    this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ""}${column}.${ascending ? "asc" : "desc"}${nullsFirst === void 0 ? "" : nullsFirst ? ".nullsfirst" : ".nullslast"}`);
    return this;
  }
  /**
   * Limit the query result by `count`.
   *
   * @param count - The maximum number of rows to return
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  limit(count3, { foreignTable, referencedTable = foreignTable } = {}) {
    const key = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
    this.url.searchParams.set(key, `${count3}`);
    return this;
  }
  /**
   * Limit the query result by starting at an offset (`from`) and ending at the offset (`from + to`).
   * Only records within this range are returned.
   * This respects the query order and if there is no order clause the range could behave unexpectedly.
   * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
   * and fourth rows of the query.
   *
   * @param from - The starting index from which to limit the result
   * @param to - The last index to which to limit the result
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
    const keyOffset = typeof referencedTable === "undefined" ? "offset" : `${referencedTable}.offset`;
    const keyLimit = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
    this.url.searchParams.set(keyOffset, `${from}`);
    this.url.searchParams.set(keyLimit, `${to - from + 1}`);
    return this;
  }
  /**
   * Set the AbortSignal for the fetch request.
   *
   * @param signal - The AbortSignal to use for the fetch request
   */
  abortSignal(signal) {
    this.signal = signal;
    return this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be one row (e.g. using `.limit(1)`), otherwise this
   * returns an error.
   */
  single() {
    this.headers["Accept"] = "application/vnd.pgrst.object+json";
    return this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
   * this returns an error.
   */
  maybeSingle() {
    if (this.method === "GET") {
      this.headers["Accept"] = "application/json";
    } else {
      this.headers["Accept"] = "application/vnd.pgrst.object+json";
    }
    this.isMaybeSingle = true;
    return this;
  }
  /**
   * Return `data` as a string in CSV format.
   */
  csv() {
    this.headers["Accept"] = "text/csv";
    return this;
  }
  /**
   * Return `data` as an object in [GeoJSON](https://geojson.org) format.
   */
  geojson() {
    this.headers["Accept"] = "application/geo+json";
    return this;
  }
  /**
   * Return `data` as the EXPLAIN plan for the query.
   *
   * You need to enable the
   * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
   * setting before using this method.
   *
   * @param options - Named parameters
   *
   * @param options.analyze - If `true`, the query will be executed and the
   * actual run time will be returned
   *
   * @param options.verbose - If `true`, the query identifier will be returned
   * and `data` will include the output columns of the query
   *
   * @param options.settings - If `true`, include information on configuration
   * parameters that affect query planning
   *
   * @param options.buffers - If `true`, include information on buffer usage
   *
   * @param options.wal - If `true`, include information on WAL record generation
   *
   * @param options.format - The format of the output, can be `"text"` (default)
   * or `"json"`
   */
  explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = "text" } = {}) {
    var _a;
    const options = [
      analyze ? "analyze" : null,
      verbose ? "verbose" : null,
      settings ? "settings" : null,
      buffers ? "buffers" : null,
      wal ? "wal" : null
    ].filter(Boolean).join("|");
    const forMediatype = (_a = this.headers["Accept"]) !== null && _a !== void 0 ? _a : "application/json";
    this.headers["Accept"] = `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`;
    if (format === "json")
      return this;
    else
      return this;
  }
  /**
   * Rollback the query.
   *
   * `data` will still be returned, but the query is not committed.
   */
  rollback() {
    var _a;
    if (((_a = this.headers["Prefer"]) !== null && _a !== void 0 ? _a : "").trim().length > 0) {
      this.headers["Prefer"] += ",tx=rollback";
    } else {
      this.headers["Prefer"] = "tx=rollback";
    }
    return this;
  }
  /**
   * Override the type of the returned `data`.
   *
   * @typeParam NewResult - The new result type to override with
   */
  returns() {
    return this;
  }
};

// node_modules/.pnpm/@supabase+postgrest-js@1.15.5/node_modules/@supabase/postgrest-js/dist/module/PostgrestFilterBuilder.js
var PostgrestFilterBuilder = class extends PostgrestTransformBuilder {
  static {
    __name(this, "PostgrestFilterBuilder");
  }
  /**
   * Match only rows where `column` is equal to `value`.
   *
   * To check if the value of `column` is NULL, you should use `.is()` instead.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  eq(column, value) {
    this.url.searchParams.append(column, `eq.${value}`);
    return this;
  }
  /**
   * Match only rows where `column` is not equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  neq(column, value) {
    this.url.searchParams.append(column, `neq.${value}`);
    return this;
  }
  /**
   * Match only rows where `column` is greater than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gt(column, value) {
    this.url.searchParams.append(column, `gt.${value}`);
    return this;
  }
  /**
   * Match only rows where `column` is greater than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gte(column, value) {
    this.url.searchParams.append(column, `gte.${value}`);
    return this;
  }
  /**
   * Match only rows where `column` is less than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lt(column, value) {
    this.url.searchParams.append(column, `lt.${value}`);
    return this;
  }
  /**
   * Match only rows where `column` is less than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lte(column, value) {
    this.url.searchParams.append(column, `lte.${value}`);
    return this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-sensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  like(column, pattern) {
    this.url.searchParams.append(column, `like.${pattern}`);
    return this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAllOf(column, patterns) {
    this.url.searchParams.append(column, `like(all).{${patterns.join(",")}}`);
    return this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAnyOf(column, patterns) {
    this.url.searchParams.append(column, `like(any).{${patterns.join(",")}}`);
    return this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-insensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  ilike(column, pattern) {
    this.url.searchParams.append(column, `ilike.${pattern}`);
    return this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAllOf(column, patterns) {
    this.url.searchParams.append(column, `ilike(all).{${patterns.join(",")}}`);
    return this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAnyOf(column, patterns) {
    this.url.searchParams.append(column, `ilike(any).{${patterns.join(",")}}`);
    return this;
  }
  /**
   * Match only rows where `column` IS `value`.
   *
   * For non-boolean columns, this is only relevant for checking if the value of
   * `column` is NULL by setting `value` to `null`.
   *
   * For boolean columns, you can also set `value` to `true` or `false` and it
   * will behave the same way as `.eq()`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  is(column, value) {
    this.url.searchParams.append(column, `is.${value}`);
    return this;
  }
  /**
   * Match only rows where `column` is included in the `values` array.
   *
   * @param column - The column to filter on
   * @param values - The values array to filter with
   */
  in(column, values) {
    const cleanedValues = Array.from(new Set(values)).map((s) => {
      if (typeof s === "string" && new RegExp("[,()]").test(s))
        return `"${s}"`;
      else
        return `${s}`;
    }).join(",");
    this.url.searchParams.append(column, `in.(${cleanedValues})`);
    return this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * `column` contains every element appearing in `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  contains(column, value) {
    if (typeof value === "string") {
      this.url.searchParams.append(column, `cs.${value}`);
    } else if (Array.isArray(value)) {
      this.url.searchParams.append(column, `cs.{${value.join(",")}}`);
    } else {
      this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
    }
    return this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * every element appearing in `column` is contained by `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  containedBy(column, value) {
    if (typeof value === "string") {
      this.url.searchParams.append(column, `cd.${value}`);
    } else if (Array.isArray(value)) {
      this.url.searchParams.append(column, `cd.{${value.join(",")}}`);
    } else {
      this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
    }
    return this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is greater than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGt(column, range) {
    this.url.searchParams.append(column, `sr.${range}`);
    return this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or greater than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGte(column, range) {
    this.url.searchParams.append(column, `nxl.${range}`);
    return this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is less than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLt(column, range) {
    this.url.searchParams.append(column, `sl.${range}`);
    return this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or less than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLte(column, range) {
    this.url.searchParams.append(column, `nxr.${range}`);
    return this;
  }
  /**
   * Only relevant for range columns. Match only rows where `column` is
   * mutually exclusive to `range` and there can be no element between the two
   * ranges.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeAdjacent(column, range) {
    this.url.searchParams.append(column, `adj.${range}`);
    return this;
  }
  /**
   * Only relevant for array and range columns. Match only rows where
   * `column` and `value` have an element in common.
   *
   * @param column - The array or range column to filter on
   * @param value - The array or range value to filter with
   */
  overlaps(column, value) {
    if (typeof value === "string") {
      this.url.searchParams.append(column, `ov.${value}`);
    } else {
      this.url.searchParams.append(column, `ov.{${value.join(",")}}`);
    }
    return this;
  }
  /**
   * Only relevant for text and tsvector columns. Match only rows where
   * `column` matches the query string in `query`.
   *
   * @param column - The text or tsvector column to filter on
   * @param query - The query text to match with
   * @param options - Named parameters
   * @param options.config - The text search configuration to use
   * @param options.type - Change how the `query` text is interpreted
   */
  textSearch(column, query, { config: config2, type } = {}) {
    let typePart = "";
    if (type === "plain") {
      typePart = "pl";
    } else if (type === "phrase") {
      typePart = "ph";
    } else if (type === "websearch") {
      typePart = "w";
    }
    const configPart = config2 === void 0 ? "" : `(${config2})`;
    this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
    return this;
  }
  /**
   * Match only rows where each column in `query` keys is equal to its
   * associated value. Shorthand for multiple `.eq()`s.
   *
   * @param query - The object to filter with, with column names as keys mapped
   * to their filter values
   */
  match(query) {
    Object.entries(query).forEach(([column, value]) => {
      this.url.searchParams.append(column, `eq.${value}`);
    });
    return this;
  }
  /**
   * Match only rows which doesn't satisfy the filter.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to be negated to filter with, following
   * PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  not(column, operator, value) {
    this.url.searchParams.append(column, `not.${operator}.${value}`);
    return this;
  }
  /**
   * Match only rows which satisfy at least one of the filters.
   *
   * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure it's properly sanitized.
   *
   * It's currently not possible to do an `.or()` filter across multiple tables.
   *
   * @param filters - The filters to use, following PostgREST syntax
   * @param options - Named parameters
   * @param options.referencedTable - Set this to filter on referenced tables
   * instead of the parent table
   * @param options.foreignTable - Deprecated, use `referencedTable` instead
   */
  or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
    const key = referencedTable ? `${referencedTable}.or` : "or";
    this.url.searchParams.append(key, `(${filters})`);
    return this;
  }
  /**
   * Match only rows which satisfy the filter. This is an escape hatch - you
   * should use the specific filter methods wherever possible.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to filter with, following PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  filter(column, operator, value) {
    this.url.searchParams.append(column, `${operator}.${value}`);
    return this;
  }
};

// node_modules/.pnpm/@supabase+postgrest-js@1.15.5/node_modules/@supabase/postgrest-js/dist/module/PostgrestQueryBuilder.js
var PostgrestQueryBuilder = class {
  static {
    __name(this, "PostgrestQueryBuilder");
  }
  constructor(url, { headers = {}, schema, fetch: fetch4 }) {
    this.url = url;
    this.headers = headers;
    this.schema = schema;
    this.fetch = fetch4;
  }
  /**
   * Perform a SELECT query on the table or view.
   *
   * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
   *
   * @param options - Named parameters
   *
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   *
   * @param options.count - Count algorithm to use to count rows in the table or view.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  select(columns, { head = false, count: count3 } = {}) {
    const method = head ? "HEAD" : "GET";
    let quoted = false;
    const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map((c) => {
      if (/\s/.test(c) && !quoted) {
        return "";
      }
      if (c === '"') {
        quoted = !quoted;
      }
      return c;
    }).join("");
    this.url.searchParams.set("select", cleanedColumns);
    if (count3) {
      this.headers["Prefer"] = `count=${count3}`;
    }
    return new PostgrestFilterBuilder({
      method,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      allowEmpty: false
    });
  }
  /**
   * Perform an INSERT into the table or view.
   *
   * By default, inserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to insert. Pass an object to insert a single row
   * or an array to insert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count inserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. Only applies for bulk
   * inserts.
   */
  insert(values, { count: count3, defaultToNull = true } = {}) {
    const method = "POST";
    const prefersHeaders = [];
    if (this.headers["Prefer"]) {
      prefersHeaders.push(this.headers["Prefer"]);
    }
    if (count3) {
      prefersHeaders.push(`count=${count3}`);
    }
    if (!defaultToNull) {
      prefersHeaders.push("missing=default");
    }
    this.headers["Prefer"] = prefersHeaders.join(",");
    if (Array.isArray(values)) {
      const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
      if (columns.length > 0) {
        const uniqueColumns = [...new Set(columns)].map((column) => `"${column}"`);
        this.url.searchParams.set("columns", uniqueColumns.join(","));
      }
    }
    return new PostgrestFilterBuilder({
      method,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: values,
      fetch: this.fetch,
      allowEmpty: false
    });
  }
  /**
   * Perform an UPSERT on the table or view. Depending on the column(s) passed
   * to `onConflict`, `.upsert()` allows you to perform the equivalent of
   * `.insert()` if a row with the corresponding `onConflict` columns doesn't
   * exist, or if it does exist, perform an alternative action depending on
   * `ignoreDuplicates`.
   *
   * By default, upserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to upsert with. Pass an object to upsert a
   * single row or an array to upsert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
   * duplicate rows are determined. Two rows are duplicates if all the
   * `onConflict` columns are equal.
   *
   * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
   * `false`, duplicate rows are merged with existing rows.
   *
   * @param options.count - Count algorithm to use to count upserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. This only applies when
   * inserting new rows, not when merging with existing rows under
   * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
   */
  upsert(values, { onConflict, ignoreDuplicates = false, count: count3, defaultToNull = true } = {}) {
    const method = "POST";
    const prefersHeaders = [`resolution=${ignoreDuplicates ? "ignore" : "merge"}-duplicates`];
    if (onConflict !== void 0)
      this.url.searchParams.set("on_conflict", onConflict);
    if (this.headers["Prefer"]) {
      prefersHeaders.push(this.headers["Prefer"]);
    }
    if (count3) {
      prefersHeaders.push(`count=${count3}`);
    }
    if (!defaultToNull) {
      prefersHeaders.push("missing=default");
    }
    this.headers["Prefer"] = prefersHeaders.join(",");
    if (Array.isArray(values)) {
      const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
      if (columns.length > 0) {
        const uniqueColumns = [...new Set(columns)].map((column) => `"${column}"`);
        this.url.searchParams.set("columns", uniqueColumns.join(","));
      }
    }
    return new PostgrestFilterBuilder({
      method,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: values,
      fetch: this.fetch,
      allowEmpty: false
    });
  }
  /**
   * Perform an UPDATE on the table or view.
   *
   * By default, updated rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param values - The values to update with
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count updated rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  update(values, { count: count3 } = {}) {
    const method = "PATCH";
    const prefersHeaders = [];
    if (this.headers["Prefer"]) {
      prefersHeaders.push(this.headers["Prefer"]);
    }
    if (count3) {
      prefersHeaders.push(`count=${count3}`);
    }
    this.headers["Prefer"] = prefersHeaders.join(",");
    return new PostgrestFilterBuilder({
      method,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: values,
      fetch: this.fetch,
      allowEmpty: false
    });
  }
  /**
   * Perform a DELETE on the table or view.
   *
   * By default, deleted rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count deleted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  delete({ count: count3 } = {}) {
    const method = "DELETE";
    const prefersHeaders = [];
    if (count3) {
      prefersHeaders.push(`count=${count3}`);
    }
    if (this.headers["Prefer"]) {
      prefersHeaders.unshift(this.headers["Prefer"]);
    }
    this.headers["Prefer"] = prefersHeaders.join(",");
    return new PostgrestFilterBuilder({
      method,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      allowEmpty: false
    });
  }
};

// node_modules/.pnpm/@supabase+postgrest-js@1.15.5/node_modules/@supabase/postgrest-js/dist/module/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+postgrest-js@1.15.5/node_modules/@supabase/postgrest-js/dist/module/version.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var version2 = "1.15.5";

// node_modules/.pnpm/@supabase+postgrest-js@1.15.5/node_modules/@supabase/postgrest-js/dist/module/constants.js
var DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${version2}` };

// node_modules/.pnpm/@supabase+postgrest-js@1.15.5/node_modules/@supabase/postgrest-js/dist/module/PostgrestClient.js
var PostgrestClient = class _PostgrestClient {
  static {
    __name(this, "PostgrestClient");
  }
  // TODO: Add back shouldThrowOnError once we figure out the typings
  /**
   * Creates a PostgREST client.
   *
   * @param url - URL of the PostgREST endpoint
   * @param options - Named parameters
   * @param options.headers - Custom headers
   * @param options.schema - Postgres schema to switch to
   * @param options.fetch - Custom fetch
   */
  constructor(url, { headers = {}, schema, fetch: fetch4 } = {}) {
    this.url = url;
    this.headers = Object.assign(Object.assign({}, DEFAULT_HEADERS), headers);
    this.schemaName = schema;
    this.fetch = fetch4;
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(relation) {
    const url = new URL(`${this.url}/${relation}`);
    return new PostgrestQueryBuilder(url, {
      headers: Object.assign({}, this.headers),
      schema: this.schemaName,
      fetch: this.fetch
    });
  }
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(schema) {
    return new _PostgrestClient(this.url, {
      headers: this.headers,
      schema,
      fetch: this.fetch
    });
  }
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(fn, args = {}, { head = false, get: get4 = false, count: count3 } = {}) {
    let method;
    const url = new URL(`${this.url}/rpc/${fn}`);
    let body;
    if (head || get4) {
      method = head ? "HEAD" : "GET";
      Object.entries(args).filter(([_, value]) => value !== void 0).map(([name, value]) => [name, Array.isArray(value) ? `{${value.join(",")}}` : `${value}`]).forEach(([name, value]) => {
        url.searchParams.append(name, value);
      });
    } else {
      method = "POST";
      body = args;
    }
    const headers = Object.assign({}, this.headers);
    if (count3) {
      headers["Prefer"] = `count=${count3}`;
    }
    return new PostgrestFilterBuilder({
      method,
      url,
      headers,
      schema: this.schemaName,
      body,
      fetch: this.fetch,
      allowEmpty: false
    });
  }
};

// node_modules/.pnpm/@supabase+realtime-js@2.9.5/node_modules/@supabase/realtime-js/dist/module/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+realtime-js@2.9.5/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+realtime-js@2.9.5/node_modules/@supabase/realtime-js/dist/module/lib/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+realtime-js@2.9.5/node_modules/@supabase/realtime-js/dist/module/lib/version.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var version3 = "2.9.5";

// node_modules/.pnpm/@supabase+realtime-js@2.9.5/node_modules/@supabase/realtime-js/dist/module/lib/constants.js
var DEFAULT_HEADERS2 = { "X-Client-Info": `realtime-js/${version3}` };
var VSN = "1.0.0";
var DEFAULT_TIMEOUT = 1e4;
var WS_CLOSE_NORMAL = 1e3;
var SOCKET_STATES;
(function(SOCKET_STATES2) {
  SOCKET_STATES2[SOCKET_STATES2["connecting"] = 0] = "connecting";
  SOCKET_STATES2[SOCKET_STATES2["open"] = 1] = "open";
  SOCKET_STATES2[SOCKET_STATES2["closing"] = 2] = "closing";
  SOCKET_STATES2[SOCKET_STATES2["closed"] = 3] = "closed";
})(SOCKET_STATES || (SOCKET_STATES = {}));
var CHANNEL_STATES;
(function(CHANNEL_STATES2) {
  CHANNEL_STATES2["closed"] = "closed";
  CHANNEL_STATES2["errored"] = "errored";
  CHANNEL_STATES2["joined"] = "joined";
  CHANNEL_STATES2["joining"] = "joining";
  CHANNEL_STATES2["leaving"] = "leaving";
})(CHANNEL_STATES || (CHANNEL_STATES = {}));
var CHANNEL_EVENTS;
(function(CHANNEL_EVENTS2) {
  CHANNEL_EVENTS2["close"] = "phx_close";
  CHANNEL_EVENTS2["error"] = "phx_error";
  CHANNEL_EVENTS2["join"] = "phx_join";
  CHANNEL_EVENTS2["reply"] = "phx_reply";
  CHANNEL_EVENTS2["leave"] = "phx_leave";
  CHANNEL_EVENTS2["access_token"] = "access_token";
})(CHANNEL_EVENTS || (CHANNEL_EVENTS = {}));
var TRANSPORTS;
(function(TRANSPORTS2) {
  TRANSPORTS2["websocket"] = "websocket";
})(TRANSPORTS || (TRANSPORTS = {}));
var CONNECTION_STATE;
(function(CONNECTION_STATE2) {
  CONNECTION_STATE2["Connecting"] = "connecting";
  CONNECTION_STATE2["Open"] = "open";
  CONNECTION_STATE2["Closing"] = "closing";
  CONNECTION_STATE2["Closed"] = "closed";
})(CONNECTION_STATE || (CONNECTION_STATE = {}));

// node_modules/.pnpm/@supabase+realtime-js@2.9.5/node_modules/@supabase/realtime-js/dist/module/lib/timer.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Timer = class {
  static {
    __name(this, "Timer");
  }
  constructor(callback, timerCalc) {
    this.callback = callback;
    this.timerCalc = timerCalc;
    this.timer = void 0;
    this.tries = 0;
    this.callback = callback;
    this.timerCalc = timerCalc;
  }
  reset() {
    this.tries = 0;
    clearTimeout(this.timer);
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.tries = this.tries + 1;
      this.callback();
    }, this.timerCalc(this.tries + 1));
  }
};

// node_modules/.pnpm/@supabase+realtime-js@2.9.5/node_modules/@supabase/realtime-js/dist/module/lib/serializer.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Serializer = class {
  static {
    __name(this, "Serializer");
  }
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(rawPayload, callback) {
    if (rawPayload.constructor === ArrayBuffer) {
      return callback(this._binaryDecode(rawPayload));
    }
    if (typeof rawPayload === "string") {
      return callback(JSON.parse(rawPayload));
    }
    return callback({});
  }
  _binaryDecode(buffer) {
    const view = new DataView(buffer);
    const decoder = new TextDecoder();
    return this._decodeBroadcast(buffer, view, decoder);
  }
  _decodeBroadcast(buffer, view, decoder) {
    const topicSize = view.getUint8(1);
    const eventSize = view.getUint8(2);
    let offset = this.HEADER_LENGTH + 2;
    const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    const event = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    const data = JSON.parse(decoder.decode(buffer.slice(offset, buffer.byteLength)));
    return { ref: null, topic, event, payload: data };
  }
};

// node_modules/.pnpm/@supabase+realtime-js@2.9.5/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+realtime-js@2.9.5/node_modules/@supabase/realtime-js/dist/module/lib/push.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Push = class {
  static {
    __name(this, "Push");
  }
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(channel2, event, payload = {}, timeout = DEFAULT_TIMEOUT) {
    this.channel = channel2;
    this.event = event;
    this.payload = payload;
    this.timeout = timeout;
    this.sent = false;
    this.timeoutTimer = void 0;
    this.ref = "";
    this.receivedResp = null;
    this.recHooks = [];
    this.refEvent = null;
  }
  resend(timeout) {
    this.timeout = timeout;
    this._cancelRefEvent();
    this.ref = "";
    this.refEvent = null;
    this.receivedResp = null;
    this.sent = false;
    this.send();
  }
  send() {
    if (this._hasReceived("timeout")) {
      return;
    }
    this.startTimeout();
    this.sent = true;
    this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    });
  }
  updatePayload(payload) {
    this.payload = Object.assign(Object.assign({}, this.payload), payload);
  }
  receive(status, callback) {
    var _a;
    if (this._hasReceived(status)) {
      callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
    }
    this.recHooks.push({ status, callback });
    return this;
  }
  startTimeout() {
    if (this.timeoutTimer) {
      return;
    }
    this.ref = this.channel.socket._makeRef();
    this.refEvent = this.channel._replyEventName(this.ref);
    const callback = /* @__PURE__ */ __name((payload) => {
      this._cancelRefEvent();
      this._cancelTimeout();
      this.receivedResp = payload;
      this._matchReceive(payload);
    }, "callback");
    this.channel._on(this.refEvent, {}, callback);
    this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(status, response) {
    if (this.refEvent)
      this.channel._trigger(this.refEvent, { status, response });
  }
  destroy() {
    this._cancelRefEvent();
    this._cancelTimeout();
  }
  _cancelRefEvent() {
    if (!this.refEvent) {
      return;
    }
    this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer);
    this.timeoutTimer = void 0;
  }
  _matchReceive({ status, response }) {
    this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
  }
  _hasReceived(status) {
    return this.receivedResp && this.receivedResp.status === status;
  }
};

// node_modules/.pnpm/@supabase+realtime-js@2.9.5/node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var REALTIME_PRESENCE_LISTEN_EVENTS;
(function(REALTIME_PRESENCE_LISTEN_EVENTS2) {
  REALTIME_PRESENCE_LISTEN_EVENTS2["SYNC"] = "sync";
  REALTIME_PRESENCE_LISTEN_EVENTS2["JOIN"] = "join";
  REALTIME_PRESENCE_LISTEN_EVENTS2["LEAVE"] = "leave";
})(REALTIME_PRESENCE_LISTEN_EVENTS || (REALTIME_PRESENCE_LISTEN_EVENTS = {}));
var RealtimePresence = class _RealtimePresence {
  static {
    __name(this, "RealtimePresence");
  }
  /**
   * Initializes the Presence.
   *
   * @param channel - The RealtimeChannel
   * @param opts - The options,
   *        for example `{events: {state: 'state', diff: 'diff'}}`
   */
  constructor(channel2, opts) {
    this.channel = channel2;
    this.state = {};
    this.pendingDiffs = [];
    this.joinRef = null;
    this.caller = {
      onJoin: /* @__PURE__ */ __name(() => {
      }, "onJoin"),
      onLeave: /* @__PURE__ */ __name(() => {
      }, "onLeave"),
      onSync: /* @__PURE__ */ __name(() => {
      }, "onSync")
    };
    const events = (opts === null || opts === void 0 ? void 0 : opts.events) || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(events.state, {}, (newState) => {
      const { onJoin, onLeave, onSync } = this.caller;
      this.joinRef = this.channel._joinRef();
      this.state = _RealtimePresence.syncState(this.state, newState, onJoin, onLeave);
      this.pendingDiffs.forEach((diff) => {
        this.state = _RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
      });
      this.pendingDiffs = [];
      onSync();
    });
    this.channel._on(events.diff, {}, (diff) => {
      const { onJoin, onLeave, onSync } = this.caller;
      if (this.inPendingSyncState()) {
        this.pendingDiffs.push(diff);
      } else {
        this.state = _RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
        onSync();
      }
    });
    this.onJoin((key, currentPresences, newPresences) => {
      this.channel._trigger("presence", {
        event: "join",
        key,
        currentPresences,
        newPresences
      });
    });
    this.onLeave((key, currentPresences, leftPresences) => {
      this.channel._trigger("presence", {
        event: "leave",
        key,
        currentPresences,
        leftPresences
      });
    });
    this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(currentState, newState, onJoin, onLeave) {
    const state = this.cloneDeep(currentState);
    const transformedState = this.transformState(newState);
    const joins = {};
    const leaves = {};
    this.map(state, (key, presences) => {
      if (!transformedState[key]) {
        leaves[key] = presences;
      }
    });
    this.map(transformedState, (key, newPresences) => {
      const currentPresences = state[key];
      if (currentPresences) {
        const newPresenceRefs = newPresences.map((m) => m.presence_ref);
        const curPresenceRefs = currentPresences.map((m) => m.presence_ref);
        const joinedPresences = newPresences.filter((m) => curPresenceRefs.indexOf(m.presence_ref) < 0);
        const leftPresences = currentPresences.filter((m) => newPresenceRefs.indexOf(m.presence_ref) < 0);
        if (joinedPresences.length > 0) {
          joins[key] = joinedPresences;
        }
        if (leftPresences.length > 0) {
          leaves[key] = leftPresences;
        }
      } else {
        joins[key] = newPresences;
      }
    });
    return this.syncDiff(state, { joins, leaves }, onJoin, onLeave);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(state, diff, onJoin, onLeave) {
    const { joins, leaves } = {
      joins: this.transformState(diff.joins),
      leaves: this.transformState(diff.leaves)
    };
    if (!onJoin) {
      onJoin = /* @__PURE__ */ __name(() => {
      }, "onJoin");
    }
    if (!onLeave) {
      onLeave = /* @__PURE__ */ __name(() => {
      }, "onLeave");
    }
    this.map(joins, (key, newPresences) => {
      var _a;
      const currentPresences = (_a = state[key]) !== null && _a !== void 0 ? _a : [];
      state[key] = this.cloneDeep(newPresences);
      if (currentPresences.length > 0) {
        const joinedPresenceRefs = state[key].map((m) => m.presence_ref);
        const curPresences = currentPresences.filter((m) => joinedPresenceRefs.indexOf(m.presence_ref) < 0);
        state[key].unshift(...curPresences);
      }
      onJoin(key, currentPresences, newPresences);
    });
    this.map(leaves, (key, leftPresences) => {
      let currentPresences = state[key];
      if (!currentPresences)
        return;
      const presenceRefsToRemove = leftPresences.map((m) => m.presence_ref);
      currentPresences = currentPresences.filter((m) => presenceRefsToRemove.indexOf(m.presence_ref) < 0);
      state[key] = currentPresences;
      onLeave(key, currentPresences, leftPresences);
      if (currentPresences.length === 0)
        delete state[key];
    });
    return state;
  }
  /** @internal */
  static map(obj, func) {
    return Object.getOwnPropertyNames(obj).map((key) => func(key, obj[key]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(state) {
    state = this.cloneDeep(state);
    return Object.getOwnPropertyNames(state).reduce((newState, key) => {
      const presences = state[key];
      if ("metas" in presences) {
        newState[key] = presences.metas.map((presence) => {
          presence["presence_ref"] = presence["phx_ref"];
          delete presence["phx_ref"];
          delete presence["phx_ref_prev"];
          return presence;
        });
      } else {
        newState[key] = presences;
      }
      return newState;
    }, {});
  }
  /** @internal */
  static cloneDeep(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  /** @internal */
  onJoin(callback) {
    this.caller.onJoin = callback;
  }
  /** @internal */
  onLeave(callback) {
    this.caller.onLeave = callback;
  }
  /** @internal */
  onSync(callback) {
    this.caller.onSync = callback;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
};

// node_modules/.pnpm/@supabase+realtime-js@2.9.5/node_modules/@supabase/realtime-js/dist/module/lib/transformers.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var PostgresTypes;
(function(PostgresTypes2) {
  PostgresTypes2["abstime"] = "abstime";
  PostgresTypes2["bool"] = "bool";
  PostgresTypes2["date"] = "date";
  PostgresTypes2["daterange"] = "daterange";
  PostgresTypes2["float4"] = "float4";
  PostgresTypes2["float8"] = "float8";
  PostgresTypes2["int2"] = "int2";
  PostgresTypes2["int4"] = "int4";
  PostgresTypes2["int4range"] = "int4range";
  PostgresTypes2["int8"] = "int8";
  PostgresTypes2["int8range"] = "int8range";
  PostgresTypes2["json"] = "json";
  PostgresTypes2["jsonb"] = "jsonb";
  PostgresTypes2["money"] = "money";
  PostgresTypes2["numeric"] = "numeric";
  PostgresTypes2["oid"] = "oid";
  PostgresTypes2["reltime"] = "reltime";
  PostgresTypes2["text"] = "text";
  PostgresTypes2["time"] = "time";
  PostgresTypes2["timestamp"] = "timestamp";
  PostgresTypes2["timestamptz"] = "timestamptz";
  PostgresTypes2["timetz"] = "timetz";
  PostgresTypes2["tsrange"] = "tsrange";
  PostgresTypes2["tstzrange"] = "tstzrange";
})(PostgresTypes || (PostgresTypes = {}));
var convertChangeData = /* @__PURE__ */ __name((columns, record, options = {}) => {
  var _a;
  const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
  return Object.keys(record).reduce((acc, rec_key) => {
    acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
    return acc;
  }, {});
}, "convertChangeData");
var convertColumn = /* @__PURE__ */ __name((columnName, columns, record, skipTypes) => {
  const column = columns.find((x) => x.name === columnName);
  const colType = column === null || column === void 0 ? void 0 : column.type;
  const value = record[columnName];
  if (colType && !skipTypes.includes(colType)) {
    return convertCell(colType, value);
  }
  return noop(value);
}, "convertColumn");
var convertCell = /* @__PURE__ */ __name((type, value) => {
  if (type.charAt(0) === "_") {
    const dataType = type.slice(1, type.length);
    return toArray(value, dataType);
  }
  switch (type) {
    case PostgresTypes.bool:
      return toBoolean(value);
    case PostgresTypes.float4:
    case PostgresTypes.float8:
    case PostgresTypes.int2:
    case PostgresTypes.int4:
    case PostgresTypes.int8:
    case PostgresTypes.numeric:
    case PostgresTypes.oid:
      return toNumber(value);
    case PostgresTypes.json:
    case PostgresTypes.jsonb:
      return toJson(value);
    case PostgresTypes.timestamp:
      return toTimestampString(value);
    // Format to be consistent with PostgREST
    case PostgresTypes.abstime:
    // To allow users to cast it based on Timezone
    case PostgresTypes.date:
    // To allow users to cast it based on Timezone
    case PostgresTypes.daterange:
    case PostgresTypes.int4range:
    case PostgresTypes.int8range:
    case PostgresTypes.money:
    case PostgresTypes.reltime:
    // To allow users to cast it based on Timezone
    case PostgresTypes.text:
    case PostgresTypes.time:
    // To allow users to cast it based on Timezone
    case PostgresTypes.timestamptz:
    // To allow users to cast it based on Timezone
    case PostgresTypes.timetz:
    // To allow users to cast it based on Timezone
    case PostgresTypes.tsrange:
    case PostgresTypes.tstzrange:
      return noop(value);
    default:
      return noop(value);
  }
}, "convertCell");
var noop = /* @__PURE__ */ __name((value) => {
  return value;
}, "noop");
var toBoolean = /* @__PURE__ */ __name((value) => {
  switch (value) {
    case "t":
      return true;
    case "f":
      return false;
    default:
      return value;
  }
}, "toBoolean");
var toNumber = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    const parsedValue = parseFloat(value);
    if (!Number.isNaN(parsedValue)) {
      return parsedValue;
    }
  }
  return value;
}, "toNumber");
var toJson = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch (error3) {
      console.log(`JSON parse error: ${error3}`);
      return value;
    }
  }
  return value;
}, "toJson");
var toArray = /* @__PURE__ */ __name((value, type) => {
  if (typeof value !== "string") {
    return value;
  }
  const lastIdx = value.length - 1;
  const closeBrace = value[lastIdx];
  const openBrace = value[0];
  if (openBrace === "{" && closeBrace === "}") {
    let arr;
    const valTrim = value.slice(1, lastIdx);
    try {
      arr = JSON.parse("[" + valTrim + "]");
    } catch (_) {
      arr = valTrim ? valTrim.split(",") : [];
    }
    return arr.map((val) => convertCell(type, val));
  }
  return value;
}, "toArray");
var toTimestampString = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return value.replace(" ", "T");
  }
  return value;
}, "toTimestampString");

// node_modules/.pnpm/@supabase+realtime-js@2.9.5/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js
var REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
(function(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2) {
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["ALL"] = "*";
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["INSERT"] = "INSERT";
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["UPDATE"] = "UPDATE";
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["DELETE"] = "DELETE";
})(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT || (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = {}));
var REALTIME_LISTEN_TYPES;
(function(REALTIME_LISTEN_TYPES2) {
  REALTIME_LISTEN_TYPES2["BROADCAST"] = "broadcast";
  REALTIME_LISTEN_TYPES2["PRESENCE"] = "presence";
  REALTIME_LISTEN_TYPES2["POSTGRES_CHANGES"] = "postgres_changes";
})(REALTIME_LISTEN_TYPES || (REALTIME_LISTEN_TYPES = {}));
var REALTIME_SUBSCRIBE_STATES;
(function(REALTIME_SUBSCRIBE_STATES2) {
  REALTIME_SUBSCRIBE_STATES2["SUBSCRIBED"] = "SUBSCRIBED";
  REALTIME_SUBSCRIBE_STATES2["TIMED_OUT"] = "TIMED_OUT";
  REALTIME_SUBSCRIBE_STATES2["CLOSED"] = "CLOSED";
  REALTIME_SUBSCRIBE_STATES2["CHANNEL_ERROR"] = "CHANNEL_ERROR";
})(REALTIME_SUBSCRIBE_STATES || (REALTIME_SUBSCRIBE_STATES = {}));
var RealtimeChannel = class _RealtimeChannel {
  static {
    __name(this, "RealtimeChannel");
  }
  constructor(topic, params = { config: {} }, socket) {
    this.topic = topic;
    this.params = params;
    this.socket = socket;
    this.bindings = {};
    this.state = CHANNEL_STATES.closed;
    this.joinedOnce = false;
    this.pushBuffer = [];
    this.subTopic = topic.replace(/^realtime:/i, "");
    this.params.config = Object.assign({
      broadcast: { ack: false, self: false },
      presence: { key: "" }
    }, params.config);
    this.timeout = this.socket.timeout;
    this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
    this.rejoinTimer = new Timer(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs);
    this.joinPush.receive("ok", () => {
      this.state = CHANNEL_STATES.joined;
      this.rejoinTimer.reset();
      this.pushBuffer.forEach((pushEvent) => pushEvent.send());
      this.pushBuffer = [];
    });
    this._onClose(() => {
      this.rejoinTimer.reset();
      this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`);
      this.state = CHANNEL_STATES.closed;
      this.socket._remove(this);
    });
    this._onError((reason) => {
      if (this._isLeaving() || this._isClosed()) {
        return;
      }
      this.socket.log("channel", `error ${this.topic}`, reason);
      this.state = CHANNEL_STATES.errored;
      this.rejoinTimer.scheduleTimeout();
    });
    this.joinPush.receive("timeout", () => {
      if (!this._isJoining()) {
        return;
      }
      this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
      this.state = CHANNEL_STATES.errored;
      this.rejoinTimer.scheduleTimeout();
    });
    this._on(CHANNEL_EVENTS.reply, {}, (payload, ref2) => {
      this._trigger(this._replyEventName(ref2), payload);
    });
    this.presence = new RealtimePresence(this);
    this.broadcastEndpointURL = this._broadcastEndpointURL();
  }
  /** Subscribe registers your client with the server */
  subscribe(callback, timeout = this.timeout) {
    var _a, _b;
    if (!this.socket.isConnected()) {
      this.socket.connect();
    }
    if (this.joinedOnce) {
      throw `tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance`;
    } else {
      const { config: { broadcast, presence } } = this.params;
      this._onError((e) => callback && callback("CHANNEL_ERROR", e));
      this._onClose(() => callback && callback("CLOSED"));
      const accessTokenPayload = {};
      const config2 = {
        broadcast,
        presence,
        postgres_changes: (_b = (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.map((r) => r.filter)) !== null && _b !== void 0 ? _b : []
      };
      if (this.socket.accessToken) {
        accessTokenPayload.access_token = this.socket.accessToken;
      }
      this.updateJoinPayload(Object.assign({ config: config2 }, accessTokenPayload));
      this.joinedOnce = true;
      this._rejoin(timeout);
      this.joinPush.receive("ok", ({ postgres_changes: serverPostgresFilters }) => {
        var _a2;
        this.socket.accessToken && this.socket.setAuth(this.socket.accessToken);
        if (serverPostgresFilters === void 0) {
          callback && callback("SUBSCRIBED");
          return;
        } else {
          const clientPostgresBindings = this.bindings.postgres_changes;
          const bindingsLen = (_a2 = clientPostgresBindings === null || clientPostgresBindings === void 0 ? void 0 : clientPostgresBindings.length) !== null && _a2 !== void 0 ? _a2 : 0;
          const newPostgresBindings = [];
          for (let i = 0; i < bindingsLen; i++) {
            const clientPostgresBinding = clientPostgresBindings[i];
            const { filter: { event, schema, table: table3, filter } } = clientPostgresBinding;
            const serverPostgresFilter = serverPostgresFilters && serverPostgresFilters[i];
            if (serverPostgresFilter && serverPostgresFilter.event === event && serverPostgresFilter.schema === schema && serverPostgresFilter.table === table3 && serverPostgresFilter.filter === filter) {
              newPostgresBindings.push(Object.assign(Object.assign({}, clientPostgresBinding), { id: serverPostgresFilter.id }));
            } else {
              this.unsubscribe();
              callback && callback("CHANNEL_ERROR", new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = newPostgresBindings;
          callback && callback("SUBSCRIBED");
          return;
        }
      }).receive("error", (error3) => {
        callback && callback("CHANNEL_ERROR", new Error(JSON.stringify(Object.values(error3).join(", ") || "error")));
        return;
      }).receive("timeout", () => {
        callback && callback("TIMED_OUT");
        return;
      });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(payload, opts = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload
    }, opts.timeout || this.timeout);
  }
  async untrack(opts = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, opts);
  }
  on(type, filter, callback) {
    return this._on(type, filter, callback);
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(args, opts = {}) {
    var _a, _b;
    if (!this._canPush() && args.type === "broadcast") {
      const { event, payload: endpoint_payload } = args;
      const options = {
        method: "POST",
        headers: {
          apikey: (_a = this.socket.apiKey) !== null && _a !== void 0 ? _a : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            { topic: this.subTopic, event, payload: endpoint_payload }
          ]
        })
      };
      try {
        const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_b = opts.timeout) !== null && _b !== void 0 ? _b : this.timeout);
        if (response.ok) {
          return "ok";
        } else {
          return "error";
        }
      } catch (error3) {
        if (error3.name === "AbortError") {
          return "timed out";
        } else {
          return "error";
        }
      }
    } else {
      return new Promise((resolve) => {
        var _a2, _b2, _c;
        const push = this._push(args.type, args, opts.timeout || this.timeout);
        if (args.type === "broadcast" && !((_c = (_b2 = (_a2 = this.params) === null || _a2 === void 0 ? void 0 : _a2.config) === null || _b2 === void 0 ? void 0 : _b2.broadcast) === null || _c === void 0 ? void 0 : _c.ack)) {
          resolve("ok");
        }
        push.receive("ok", () => resolve("ok"));
        push.receive("error", () => resolve("error"));
        push.receive("timeout", () => resolve("timed out"));
      });
    }
  }
  updateJoinPayload(payload) {
    this.joinPush.updatePayload(payload);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(timeout = this.timeout) {
    this.state = CHANNEL_STATES.leaving;
    const onClose = /* @__PURE__ */ __name(() => {
      this.socket.log("channel", `leave ${this.topic}`);
      this._trigger(CHANNEL_EVENTS.close, "leave", this._joinRef());
    }, "onClose");
    this.rejoinTimer.reset();
    this.joinPush.destroy();
    return new Promise((resolve) => {
      const leavePush = new Push(this, CHANNEL_EVENTS.leave, {}, timeout);
      leavePush.receive("ok", () => {
        onClose();
        resolve("ok");
      }).receive("timeout", () => {
        onClose();
        resolve("timed out");
      }).receive("error", () => {
        resolve("error");
      });
      leavePush.send();
      if (!this._canPush()) {
        leavePush.trigger("ok", {});
      }
    });
  }
  /** @internal */
  _broadcastEndpointURL() {
    let url = this.socket.endPoint;
    url = url.replace(/^ws/i, "http");
    url = url.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "");
    return url.replace(/\/+$/, "") + "/api/broadcast";
  }
  async _fetchWithTimeout(url, options, timeout) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await this.socket.fetch(url, Object.assign(Object.assign({}, options), { signal: controller.signal }));
    clearTimeout(id);
    return response;
  }
  /** @internal */
  _push(event, payload, timeout = this.timeout) {
    if (!this.joinedOnce) {
      throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    }
    let pushEvent = new Push(this, event, payload, timeout);
    if (this._canPush()) {
      pushEvent.send();
    } else {
      pushEvent.startTimeout();
      this.pushBuffer.push(pushEvent);
    }
    return pushEvent;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(_event, payload, _ref) {
    return payload;
  }
  /** @internal */
  _isMember(topic) {
    return this.topic === topic;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(type, payload, ref2) {
    var _a, _b;
    const typeLower = type.toLocaleLowerCase();
    const { close: close2, error: error3, leave, join } = CHANNEL_EVENTS;
    const events = [close2, error3, leave, join];
    if (ref2 && events.indexOf(typeLower) >= 0 && ref2 !== this._joinRef()) {
      return;
    }
    let handledPayload = this._onMessage(typeLower, payload, ref2);
    if (payload && !handledPayload) {
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    }
    if (["insert", "update", "delete"].includes(typeLower)) {
      (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.filter((bind) => {
        var _a2, _b2, _c;
        return ((_a2 = bind.filter) === null || _a2 === void 0 ? void 0 : _a2.event) === "*" || ((_c = (_b2 = bind.filter) === null || _b2 === void 0 ? void 0 : _b2.event) === null || _c === void 0 ? void 0 : _c.toLocaleLowerCase()) === typeLower;
      }).map((bind) => bind.callback(handledPayload, ref2));
    } else {
      (_b = this.bindings[typeLower]) === null || _b === void 0 ? void 0 : _b.filter((bind) => {
        var _a2, _b2, _c, _d, _e, _f;
        if (["broadcast", "presence", "postgres_changes"].includes(typeLower)) {
          if ("id" in bind) {
            const bindId = bind.id;
            const bindEvent = (_a2 = bind.filter) === null || _a2 === void 0 ? void 0 : _a2.event;
            return bindId && ((_b2 = payload.ids) === null || _b2 === void 0 ? void 0 : _b2.includes(bindId)) && (bindEvent === "*" || (bindEvent === null || bindEvent === void 0 ? void 0 : bindEvent.toLocaleLowerCase()) === ((_c = payload.data) === null || _c === void 0 ? void 0 : _c.type.toLocaleLowerCase()));
          } else {
            const bindEvent = (_e = (_d = bind === null || bind === void 0 ? void 0 : bind.filter) === null || _d === void 0 ? void 0 : _d.event) === null || _e === void 0 ? void 0 : _e.toLocaleLowerCase();
            return bindEvent === "*" || bindEvent === ((_f = payload === null || payload === void 0 ? void 0 : payload.event) === null || _f === void 0 ? void 0 : _f.toLocaleLowerCase());
          }
        } else {
          return bind.type.toLocaleLowerCase() === typeLower;
        }
      }).map((bind) => {
        if (typeof handledPayload === "object" && "ids" in handledPayload) {
          const postgresChanges = handledPayload.data;
          const { schema, table: table3, commit_timestamp, type: type2, errors } = postgresChanges;
          const enrichedPayload = {
            schema,
            table: table3,
            commit_timestamp,
            eventType: type2,
            new: {},
            old: {},
            errors
          };
          handledPayload = Object.assign(Object.assign({}, enrichedPayload), this._getPayloadRecords(postgresChanges));
        }
        bind.callback(handledPayload, ref2);
      });
    }
  }
  /** @internal */
  _isClosed() {
    return this.state === CHANNEL_STATES.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === CHANNEL_STATES.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === CHANNEL_STATES.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === CHANNEL_STATES.leaving;
  }
  /** @internal */
  _replyEventName(ref2) {
    return `chan_reply_${ref2}`;
  }
  /** @internal */
  _on(type, filter, callback) {
    const typeLower = type.toLocaleLowerCase();
    const binding2 = {
      type: typeLower,
      filter,
      callback
    };
    if (this.bindings[typeLower]) {
      this.bindings[typeLower].push(binding2);
    } else {
      this.bindings[typeLower] = [binding2];
    }
    return this;
  }
  /** @internal */
  _off(type, filter) {
    const typeLower = type.toLocaleLowerCase();
    this.bindings[typeLower] = this.bindings[typeLower].filter((bind) => {
      var _a;
      return !(((_a = bind.type) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === typeLower && _RealtimeChannel.isEqual(bind.filter, filter));
    });
    return this;
  }
  /** @internal */
  static isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    for (const k in obj1) {
      if (obj1[k] !== obj2[k]) {
        return false;
      }
    }
    return true;
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout();
    if (this.socket.isConnected()) {
      this._rejoin();
    }
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(callback) {
    this._on(CHANNEL_EVENTS.close, {}, callback);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(callback) {
    this._on(CHANNEL_EVENTS.error, {}, (reason) => callback(reason));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(timeout = this.timeout) {
    if (this._isLeaving()) {
      return;
    }
    this.socket._leaveOpenTopic(this.topic);
    this.state = CHANNEL_STATES.joining;
    this.joinPush.resend(timeout);
  }
  /** @internal */
  _getPayloadRecords(payload) {
    const records = {
      new: {},
      old: {}
    };
    if (payload.type === "INSERT" || payload.type === "UPDATE") {
      records.new = convertChangeData(payload.columns, payload.record);
    }
    if (payload.type === "UPDATE" || payload.type === "DELETE") {
      records.old = convertChangeData(payload.columns, payload.old_record);
    }
    return records;
  }
};

// node_modules/.pnpm/@supabase+realtime-js@2.9.5/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js
var noop2 = /* @__PURE__ */ __name(() => {
}, "noop");
var NATIVE_WEBSOCKET_AVAILABLE = typeof WebSocket !== "undefined";
var RealtimeClient = class {
  static {
    __name(this, "RealtimeClient");
  }
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket.
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers The optional headers to pass when connecting.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   */
  constructor(endPoint, options) {
    var _a;
    this.accessToken = null;
    this.apiKey = null;
    this.channels = [];
    this.endPoint = "";
    this.headers = DEFAULT_HEADERS2;
    this.params = {};
    this.timeout = DEFAULT_TIMEOUT;
    this.heartbeatIntervalMs = 3e4;
    this.heartbeatTimer = void 0;
    this.pendingHeartbeatRef = null;
    this.ref = 0;
    this.logger = noop2;
    this.conn = null;
    this.sendBuffer = [];
    this.serializer = new Serializer();
    this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    };
    this._resolveFetch = (customFetch) => {
      let _fetch;
      if (customFetch) {
        _fetch = customFetch;
      } else if (typeof fetch === "undefined") {
        _fetch = /* @__PURE__ */ __name((...args) => Promise.resolve().then(() => (init_browser(), browser_exports)).then(({ default: fetch4 }) => fetch4(...args)), "_fetch");
      } else {
        _fetch = fetch;
      }
      return (...args) => _fetch(...args);
    };
    this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
    if (options === null || options === void 0 ? void 0 : options.transport) {
      this.transport = options.transport;
    } else {
      this.transport = null;
    }
    if (options === null || options === void 0 ? void 0 : options.params)
      this.params = options.params;
    if (options === null || options === void 0 ? void 0 : options.headers)
      this.headers = Object.assign(Object.assign({}, this.headers), options.headers);
    if (options === null || options === void 0 ? void 0 : options.timeout)
      this.timeout = options.timeout;
    if (options === null || options === void 0 ? void 0 : options.logger)
      this.logger = options.logger;
    if (options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs)
      this.heartbeatIntervalMs = options.heartbeatIntervalMs;
    const accessToken = (_a = options === null || options === void 0 ? void 0 : options.params) === null || _a === void 0 ? void 0 : _a.apikey;
    if (accessToken) {
      this.accessToken = accessToken;
      this.apiKey = accessToken;
    }
    this.reconnectAfterMs = (options === null || options === void 0 ? void 0 : options.reconnectAfterMs) ? options.reconnectAfterMs : (tries) => {
      return [1e3, 2e3, 5e3, 1e4][tries - 1] || 1e4;
    };
    this.encode = (options === null || options === void 0 ? void 0 : options.encode) ? options.encode : (payload, callback) => {
      return callback(JSON.stringify(payload));
    };
    this.decode = (options === null || options === void 0 ? void 0 : options.decode) ? options.decode : this.serializer.decode.bind(this.serializer);
    this.reconnectTimer = new Timer(async () => {
      this.disconnect();
      this.connect();
    }, this.reconnectAfterMs);
    this.fetch = this._resolveFetch(options === null || options === void 0 ? void 0 : options.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (this.conn) {
      return;
    }
    if (this.transport) {
      this.conn = new this.transport(this._endPointURL(), void 0, {
        headers: this.headers
      });
      return;
    }
    if (NATIVE_WEBSOCKET_AVAILABLE) {
      this.conn = new WebSocket(this._endPointURL());
      this.setupConnection();
      return;
    }
    this.conn = new WSWebSocketDummy(this._endPointURL(), void 0, {
      close: /* @__PURE__ */ __name(() => {
        this.conn = null;
      }, "close")
    });
    Promise.resolve().then(() => __toESM(require_browser3())).then(({ default: WS }) => {
      this.conn = new WS(this._endPointURL(), void 0, {
        headers: this.headers
      });
      this.setupConnection();
    });
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(code, reason) {
    if (this.conn) {
      this.conn.onclose = function() {
      };
      if (code) {
        this.conn.close(code, reason !== null && reason !== void 0 ? reason : "");
      } else {
        this.conn.close();
      }
      this.conn = null;
      this.heartbeatTimer && clearInterval(this.heartbeatTimer);
      this.reconnectTimer.reset();
    }
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(channel2) {
    const status = await channel2.unsubscribe();
    if (this.channels.length === 0) {
      this.disconnect();
    }
    return status;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const values_1 = await Promise.all(this.channels.map((channel2) => channel2.unsubscribe()));
    this.disconnect();
    return values_1;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(kind, msg, data) {
    this.logger(kind, msg, data);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case SOCKET_STATES.connecting:
        return CONNECTION_STATE.Connecting;
      case SOCKET_STATES.open:
        return CONNECTION_STATE.Open;
      case SOCKET_STATES.closing:
        return CONNECTION_STATE.Closing;
      default:
        return CONNECTION_STATE.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === CONNECTION_STATE.Open;
  }
  channel(topic, params = { config: {} }) {
    const chan = new RealtimeChannel(`realtime:${topic}`, params, this);
    this.channels.push(chan);
    return chan;
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(data) {
    const { topic, event, payload, ref: ref2 } = data;
    const callback = /* @__PURE__ */ __name(() => {
      this.encode(data, (result) => {
        var _a;
        (_a = this.conn) === null || _a === void 0 ? void 0 : _a.send(result);
      });
    }, "callback");
    this.log("push", `${topic} ${event} (${ref2})`, payload);
    if (this.isConnected()) {
      callback();
    } else {
      this.sendBuffer.push(callback);
    }
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * @param token A JWT string.
   */
  setAuth(token) {
    this.accessToken = token;
    this.channels.forEach((channel2) => {
      token && channel2.updateJoinPayload({ access_token: token });
      if (channel2.joinedOnce && channel2._isJoined()) {
        channel2._push(CHANNEL_EVENTS.access_token, { access_token: token });
      }
    });
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let newRef = this.ref + 1;
    if (newRef === this.ref) {
      this.ref = 0;
    } else {
      this.ref = newRef;
    }
    return this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(topic) {
    let dupChannel = this.channels.find((c) => c.topic === topic && (c._isJoined() || c._isJoining()));
    if (dupChannel) {
      this.log("transport", `leaving duplicate topic "${topic}"`);
      dupChannel.unsubscribe();
    }
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(channel2) {
    this.channels = this.channels.filter((c) => c._joinRef() !== channel2._joinRef());
  }
  /**
   * Sets up connection handlers.
   *
   * @internal
   */
  setupConnection() {
    if (this.conn) {
      this.conn.binaryType = "arraybuffer";
      this.conn.onopen = () => this._onConnOpen();
      this.conn.onerror = (error3) => this._onConnError(error3);
      this.conn.onmessage = (event) => this._onConnMessage(event);
      this.conn.onclose = (event) => this._onConnClose(event);
    }
  }
  /**
   * Returns the URL of the websocket.
   *
   * @internal
   */
  _endPointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: VSN }));
  }
  /** @internal */
  _onConnMessage(rawMessage) {
    this.decode(rawMessage.data, (msg) => {
      let { topic, event, payload, ref: ref2 } = msg;
      if (ref2 && ref2 === this.pendingHeartbeatRef || event === (payload === null || payload === void 0 ? void 0 : payload.type)) {
        this.pendingHeartbeatRef = null;
      }
      this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref2 && "(" + ref2 + ")" || ""}`, payload);
      this.channels.filter((channel2) => channel2._isMember(topic)).forEach((channel2) => channel2._trigger(event, payload, ref2));
      this.stateChangeCallbacks.message.forEach((callback) => callback(msg));
    });
  }
  /** @internal */
  _onConnOpen() {
    this.log("transport", `connected to ${this._endPointURL()}`);
    this._flushSendBuffer();
    this.reconnectTimer.reset();
    this.heartbeatTimer && clearInterval(this.heartbeatTimer);
    this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs);
    this.stateChangeCallbacks.open.forEach((callback) => callback());
  }
  /** @internal */
  _onConnClose(event) {
    this.log("transport", "close", event);
    this._triggerChanError();
    this.heartbeatTimer && clearInterval(this.heartbeatTimer);
    this.reconnectTimer.scheduleTimeout();
    this.stateChangeCallbacks.close.forEach((callback) => callback(event));
  }
  /** @internal */
  _onConnError(error3) {
    this.log("transport", error3.message);
    this._triggerChanError();
    this.stateChangeCallbacks.error.forEach((callback) => callback(error3));
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((channel2) => channel2._trigger(CHANNEL_EVENTS.error));
  }
  /** @internal */
  _appendParams(url, params) {
    if (Object.keys(params).length === 0) {
      return url;
    }
    const prefix = url.match(/\?/) ? "&" : "?";
    const query = new URLSearchParams(params);
    return `${url}${prefix}${query}`;
  }
  /** @internal */
  _flushSendBuffer() {
    if (this.isConnected() && this.sendBuffer.length > 0) {
      this.sendBuffer.forEach((callback) => callback());
      this.sendBuffer = [];
    }
  }
  /** @internal */
  _sendHeartbeat() {
    var _a;
    if (!this.isConnected()) {
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null;
      this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      (_a = this.conn) === null || _a === void 0 ? void 0 : _a.close(WS_CLOSE_NORMAL, "hearbeat timeout");
      return;
    }
    this.pendingHeartbeatRef = this._makeRef();
    this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    });
    this.setAuth(this.accessToken);
  }
};
var WSWebSocketDummy = class {
  static {
    __name(this, "WSWebSocketDummy");
  }
  constructor(address, _protocols, options) {
    this.binaryType = "arraybuffer";
    this.onclose = () => {
    };
    this.onerror = () => {
    };
    this.onmessage = () => {
    };
    this.onopen = () => {
    };
    this.readyState = SOCKET_STATES.connecting;
    this.send = () => {
    };
    this.url = null;
    this.url = address;
    this.close = options.close;
  }
};

// node_modules/.pnpm/@supabase+storage-js@2.6.0/node_modules/@supabase/storage-js/dist/module/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+storage-js@2.6.0/node_modules/@supabase/storage-js/dist/module/StorageClient.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+storage-js@2.6.0/node_modules/@supabase/storage-js/dist/module/packages/StorageFileApi.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+storage-js@2.6.0/node_modules/@supabase/storage-js/dist/module/lib/errors.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var StorageError = class extends Error {
  static {
    __name(this, "StorageError");
  }
  constructor(message) {
    super(message);
    this.__isStorageError = true;
    this.name = "StorageError";
  }
};
function isStorageError(error3) {
  return typeof error3 === "object" && error3 !== null && "__isStorageError" in error3;
}
__name(isStorageError, "isStorageError");
var StorageApiError = class extends StorageError {
  static {
    __name(this, "StorageApiError");
  }
  constructor(message, status) {
    super(message);
    this.name = "StorageApiError";
    this.status = status;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status
    };
  }
};
var StorageUnknownError = class extends StorageError {
  static {
    __name(this, "StorageUnknownError");
  }
  constructor(message, originalError) {
    super(message);
    this.name = "StorageUnknownError";
    this.originalError = originalError;
  }
};

// node_modules/.pnpm/@supabase+storage-js@2.6.0/node_modules/@supabase/storage-js/dist/module/lib/fetch.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+storage-js@2.6.0/node_modules/@supabase/storage-js/dist/module/lib/helpers.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var resolveFetch2 = /* @__PURE__ */ __name((customFetch) => {
  let _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else if (typeof fetch === "undefined") {
    _fetch = /* @__PURE__ */ __name((...args) => Promise.resolve().then(() => (init_browser(), browser_exports)).then(({ default: fetch4 }) => fetch4(...args)), "_fetch");
  } else {
    _fetch = fetch;
  }
  return (...args) => _fetch(...args);
}, "resolveFetch");
var resolveResponse = /* @__PURE__ */ __name(() => __awaiter2(void 0, void 0, void 0, function* () {
  if (typeof Response === "undefined") {
    return (yield Promise.resolve().then(() => (init_browser(), browser_exports))).Response;
  }
  return Response;
}), "resolveResponse");

// node_modules/.pnpm/@supabase+storage-js@2.6.0/node_modules/@supabase/storage-js/dist/module/lib/fetch.js
var __awaiter3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var _getErrorMessage = /* @__PURE__ */ __name((err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err), "_getErrorMessage");
var handleError = /* @__PURE__ */ __name((error3, reject) => __awaiter3(void 0, void 0, void 0, function* () {
  const Res = yield resolveResponse();
  if (error3 instanceof Res) {
    error3.json().then((err) => {
      reject(new StorageApiError(_getErrorMessage(err), error3.status || 500));
    }).catch((err) => {
      reject(new StorageUnknownError(_getErrorMessage(err), err));
    });
  } else {
    reject(new StorageUnknownError(_getErrorMessage(error3), error3));
  }
}), "handleError");
var _getRequestParams = /* @__PURE__ */ __name((method, options, parameters, body) => {
  const params = { method, headers: (options === null || options === void 0 ? void 0 : options.headers) || {} };
  if (method === "GET") {
    return params;
  }
  params.headers = Object.assign({ "Content-Type": "application/json" }, options === null || options === void 0 ? void 0 : options.headers);
  params.body = JSON.stringify(body);
  return Object.assign(Object.assign({}, params), parameters);
}, "_getRequestParams");
function _handleRequest(fetcher, method, url, options, parameters, body) {
  return __awaiter3(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
      fetcher(url, _getRequestParams(method, options, parameters, body)).then((result) => {
        if (!result.ok)
          throw result;
        if (options === null || options === void 0 ? void 0 : options.noResolveJson)
          return result;
        return result.json();
      }).then((data) => resolve(data)).catch((error3) => handleError(error3, reject));
    });
  });
}
__name(_handleRequest, "_handleRequest");
function get3(fetcher, url, options, parameters) {
  return __awaiter3(this, void 0, void 0, function* () {
    return _handleRequest(fetcher, "GET", url, options, parameters);
  });
}
__name(get3, "get");
function post(fetcher, url, body, options, parameters) {
  return __awaiter3(this, void 0, void 0, function* () {
    return _handleRequest(fetcher, "POST", url, options, parameters, body);
  });
}
__name(post, "post");
function put(fetcher, url, body, options, parameters) {
  return __awaiter3(this, void 0, void 0, function* () {
    return _handleRequest(fetcher, "PUT", url, options, parameters, body);
  });
}
__name(put, "put");
function remove(fetcher, url, body, options, parameters) {
  return __awaiter3(this, void 0, void 0, function* () {
    return _handleRequest(fetcher, "DELETE", url, options, parameters, body);
  });
}
__name(remove, "remove");

// node_modules/.pnpm/@supabase+storage-js@2.6.0/node_modules/@supabase/storage-js/dist/module/packages/StorageFileApi.js
var __awaiter4 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var DEFAULT_SEARCH_OPTIONS = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
};
var DEFAULT_FILE_OPTIONS = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: false
};
var StorageFileApi = class {
  static {
    __name(this, "StorageFileApi");
  }
  constructor(url, headers = {}, bucketId, fetch4) {
    this.url = url;
    this.headers = headers;
    this.bucketId = bucketId;
    this.fetch = resolveFetch2(fetch4);
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(method, path, fileBody, fileOptions) {
    return __awaiter4(this, void 0, void 0, function* () {
      try {
        let body;
        const options = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
        const headers = Object.assign(Object.assign({}, this.headers), method === "POST" && { "x-upsert": String(options.upsert) });
        if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
          body = new FormData();
          body.append("cacheControl", options.cacheControl);
          body.append("", fileBody);
        } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
          body = fileBody;
          body.append("cacheControl", options.cacheControl);
        } else {
          body = fileBody;
          headers["cache-control"] = `max-age=${options.cacheControl}`;
          headers["content-type"] = options.contentType;
        }
        const cleanPath = this._removeEmptyFolders(path);
        const _path = this._getFinalPath(cleanPath);
        const res = yield this.fetch(`${this.url}/object/${_path}`, Object.assign({ method, body, headers }, (options === null || options === void 0 ? void 0 : options.duplex) ? { duplex: options.duplex } : {}));
        const data = yield res.json();
        if (res.ok) {
          return {
            data: { path: cleanPath, id: data.Id, fullPath: data.Key },
            error: null
          };
        } else {
          const error3 = data;
          return { data: null, error: error3 };
        }
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  upload(path, fileBody, fileOptions) {
    return __awaiter4(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", path, fileBody, fileOptions);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadToSignedUrl(path, token, fileBody, fileOptions) {
    return __awaiter4(this, void 0, void 0, function* () {
      const cleanPath = this._removeEmptyFolders(path);
      const _path = this._getFinalPath(cleanPath);
      const url = new URL(this.url + `/object/upload/sign/${_path}`);
      url.searchParams.set("token", token);
      try {
        let body;
        const options = Object.assign({ upsert: DEFAULT_FILE_OPTIONS.upsert }, fileOptions);
        const headers = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(options.upsert) });
        if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
          body = new FormData();
          body.append("cacheControl", options.cacheControl);
          body.append("", fileBody);
        } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
          body = fileBody;
          body.append("cacheControl", options.cacheControl);
        } else {
          body = fileBody;
          headers["cache-control"] = `max-age=${options.cacheControl}`;
          headers["content-type"] = options.contentType;
        }
        const res = yield this.fetch(url.toString(), {
          method: "PUT",
          body,
          headers
        });
        const data = yield res.json();
        if (res.ok) {
          return {
            data: { path: cleanPath, fullPath: data.Key },
            error: null
          };
        } else {
          const error3 = data;
          return { data: null, error: error3 };
        }
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   */
  createSignedUploadUrl(path, options) {
    return __awaiter4(this, void 0, void 0, function* () {
      try {
        let _path = this._getFinalPath(path);
        const headers = Object.assign({}, this.headers);
        if (options === null || options === void 0 ? void 0 : options.upsert) {
          headers["x-upsert"] = "true";
        }
        const data = yield post(this.fetch, `${this.url}/object/upload/sign/${_path}`, {}, { headers });
        const url = new URL(this.url + data.url);
        const token = url.searchParams.get("token");
        if (!token) {
          throw new StorageError("No token returned by API");
        }
        return { data: { signedUrl: url.toString(), path, token }, error: null };
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  update(path, fileBody, fileOptions) {
    return __awaiter4(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", path, fileBody, fileOptions);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   */
  move(fromPath, toPath, options) {
    return __awaiter4(this, void 0, void 0, function* () {
      try {
        const data = yield post(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: fromPath,
          destinationKey: toPath,
          destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
        }, { headers: this.headers });
        return { data, error: null };
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   */
  copy(fromPath, toPath, options) {
    return __awaiter4(this, void 0, void 0, function* () {
      try {
        const data = yield post(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: fromPath,
          destinationKey: toPath,
          destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
        }, { headers: this.headers });
        return { data: { path: data.Key }, error: null };
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  createSignedUrl(path, expiresIn, options) {
    return __awaiter4(this, void 0, void 0, function* () {
      try {
        let _path = this._getFinalPath(path);
        let data = yield post(this.fetch, `${this.url}/object/sign/${_path}`, Object.assign({ expiresIn }, (options === null || options === void 0 ? void 0 : options.transform) ? { transform: options.transform } : {}), { headers: this.headers });
        const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
        const signedUrl = encodeURI(`${this.url}${data.signedURL}${downloadQueryParam}`);
        data = { signedUrl };
        return { data, error: null };
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   */
  createSignedUrls(paths, expiresIn, options) {
    return __awaiter4(this, void 0, void 0, function* () {
      try {
        const data = yield post(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn, paths }, { headers: this.headers });
        const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
        return {
          data: data.map((datum) => Object.assign(Object.assign({}, datum), { signedUrl: datum.signedURL ? encodeURI(`${this.url}${datum.signedURL}${downloadQueryParam}`) : null })),
          error: null
        };
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   */
  download(path, options) {
    return __awaiter4(this, void 0, void 0, function* () {
      const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined";
      const renderPath = wantsTransformation ? "render/image/authenticated" : "object";
      const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
      const queryString = transformationQuery ? `?${transformationQuery}` : "";
      try {
        const _path = this._getFinalPath(path);
        const res = yield get3(this.fetch, `${this.url}/${renderPath}/${_path}${queryString}`, {
          headers: this.headers,
          noResolveJson: true
        });
        const data = yield res.blob();
        return { data, error: null };
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  getPublicUrl(path, options) {
    const _path = this._getFinalPath(path);
    const _queryString = [];
    const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `download=${options.download === true ? "" : options.download}` : "";
    if (downloadQueryParam !== "") {
      _queryString.push(downloadQueryParam);
    }
    const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined";
    const renderPath = wantsTransformation ? "render/image" : "object";
    const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
    if (transformationQuery !== "") {
      _queryString.push(transformationQuery);
    }
    let queryString = _queryString.join("&");
    if (queryString !== "") {
      queryString = `?${queryString}`;
    }
    return {
      data: { publicUrl: encodeURI(`${this.url}/${renderPath}/public/${_path}${queryString}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */
  remove(paths) {
    return __awaiter4(this, void 0, void 0, function* () {
      try {
        const data = yield remove(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: paths }, { headers: this.headers });
        return { data, error: null };
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files within a bucket.
   * @param path The folder path.
   */
  list(path, options, parameters) {
    return __awaiter4(this, void 0, void 0, function* () {
      try {
        const body = Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options), { prefix: path || "" });
        const data = yield post(this.fetch, `${this.url}/object/list/${this.bucketId}`, body, { headers: this.headers }, parameters);
        return { data, error: null };
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  _getFinalPath(path) {
    return `${this.bucketId}/${path}`;
  }
  _removeEmptyFolders(path) {
    return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(transform) {
    const params = [];
    if (transform.width) {
      params.push(`width=${transform.width}`);
    }
    if (transform.height) {
      params.push(`height=${transform.height}`);
    }
    if (transform.resize) {
      params.push(`resize=${transform.resize}`);
    }
    if (transform.format) {
      params.push(`format=${transform.format}`);
    }
    if (transform.quality) {
      params.push(`quality=${transform.quality}`);
    }
    return params.join("&");
  }
};

// node_modules/.pnpm/@supabase+storage-js@2.6.0/node_modules/@supabase/storage-js/dist/module/packages/StorageBucketApi.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+storage-js@2.6.0/node_modules/@supabase/storage-js/dist/module/lib/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+storage-js@2.6.0/node_modules/@supabase/storage-js/dist/module/lib/version.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var version4 = "2.6.0";

// node_modules/.pnpm/@supabase+storage-js@2.6.0/node_modules/@supabase/storage-js/dist/module/lib/constants.js
var DEFAULT_HEADERS3 = { "X-Client-Info": `storage-js/${version4}` };

// node_modules/.pnpm/@supabase+storage-js@2.6.0/node_modules/@supabase/storage-js/dist/module/packages/StorageBucketApi.js
var __awaiter5 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var StorageBucketApi = class {
  static {
    __name(this, "StorageBucketApi");
  }
  constructor(url, headers = {}, fetch4) {
    this.url = url;
    this.headers = Object.assign(Object.assign({}, DEFAULT_HEADERS3), headers);
    this.fetch = resolveFetch2(fetch4);
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const data = yield get3(this.fetch, `${this.url}/bucket`, { headers: this.headers });
        return { data, error: null };
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */
  getBucket(id) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const data = yield get3(this.fetch, `${this.url}/bucket/${id}`, { headers: this.headers });
        return { data, error: null };
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns newly created bucket id
   */
  createBucket(id, options = {
    public: false
  }) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const data = yield post(this.fetch, `${this.url}/bucket`, {
          id,
          name: id,
          public: options.public,
          file_size_limit: options.fileSizeLimit,
          allowed_mime_types: options.allowedMimeTypes
        }, { headers: this.headers });
        return { data, error: null };
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   */
  updateBucket(id, options) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const data = yield put(this.fetch, `${this.url}/bucket/${id}`, {
          id,
          name: id,
          public: options.public,
          file_size_limit: options.fileSizeLimit,
          allowed_mime_types: options.allowedMimeTypes
        }, { headers: this.headers });
        return { data, error: null };
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */
  emptyBucket(id) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const data = yield post(this.fetch, `${this.url}/bucket/${id}/empty`, {}, { headers: this.headers });
        return { data, error: null };
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */
  deleteBucket(id) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const data = yield remove(this.fetch, `${this.url}/bucket/${id}`, {}, { headers: this.headers });
        return { data, error: null };
      } catch (error3) {
        if (isStorageError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
};

// node_modules/.pnpm/@supabase+storage-js@2.6.0/node_modules/@supabase/storage-js/dist/module/StorageClient.js
var StorageClient = class extends StorageBucketApi {
  static {
    __name(this, "StorageClient");
  }
  constructor(url, headers = {}, fetch4) {
    super(url, headers, fetch4);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(id) {
    return new StorageFileApi(this.url, this.headers, id, this.fetch);
  }
};

// node_modules/.pnpm/@supabase+supabase-js@2.43.5/node_modules/@supabase/supabase-js/dist/module/lib/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+supabase-js@2.43.5/node_modules/@supabase/supabase-js/dist/module/lib/version.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var version5 = "2.43.5";

// node_modules/.pnpm/@supabase+supabase-js@2.43.5/node_modules/@supabase/supabase-js/dist/module/lib/constants.js
var JS_ENV = "";
if (typeof Deno !== "undefined") {
  JS_ENV = "deno";
} else if (typeof document !== "undefined") {
  JS_ENV = "web";
} else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
  JS_ENV = "react-native";
} else {
  JS_ENV = "node";
}
var DEFAULT_HEADERS4 = { "X-Client-Info": `supabase-js-${JS_ENV}/${version5}` };
var DEFAULT_GLOBAL_OPTIONS = {
  headers: DEFAULT_HEADERS4
};
var DEFAULT_DB_OPTIONS = {
  schema: "public"
};
var DEFAULT_AUTH_OPTIONS = {
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  flowType: "implicit"
};
var DEFAULT_REALTIME_OPTIONS = {};

// node_modules/.pnpm/@supabase+supabase-js@2.43.5/node_modules/@supabase/supabase-js/dist/module/lib/fetch.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_browser();
var __awaiter6 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var resolveFetch3 = /* @__PURE__ */ __name((customFetch) => {
  let _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else if (typeof fetch === "undefined") {
    _fetch = browser_default;
  } else {
    _fetch = fetch;
  }
  return (...args) => _fetch(...args);
}, "resolveFetch");
var resolveHeadersConstructor = /* @__PURE__ */ __name(() => {
  if (typeof Headers === "undefined") {
    return Headers3;
  }
  return Headers;
}, "resolveHeadersConstructor");
var fetchWithAuth = /* @__PURE__ */ __name((supabaseKey, getAccessToken, customFetch) => {
  const fetch4 = resolveFetch3(customFetch);
  const HeadersConstructor = resolveHeadersConstructor();
  return (input, init) => __awaiter6(void 0, void 0, void 0, function* () {
    var _a;
    const accessToken = (_a = yield getAccessToken()) !== null && _a !== void 0 ? _a : supabaseKey;
    let headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
    if (!headers.has("apikey")) {
      headers.set("apikey", supabaseKey);
    }
    if (!headers.has("Authorization")) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return fetch4(input, Object.assign(Object.assign({}, init), { headers }));
  });
}, "fetchWithAuth");

// node_modules/.pnpm/@supabase+supabase-js@2.43.5/node_modules/@supabase/supabase-js/dist/module/lib/helpers.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function stripTrailingSlash(url) {
  return url.replace(/\/$/, "");
}
__name(stripTrailingSlash, "stripTrailingSlash");
function applySettingDefaults(options, defaults) {
  const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions } = options;
  const { db: DEFAULT_DB_OPTIONS2, auth: DEFAULT_AUTH_OPTIONS2, realtime: DEFAULT_REALTIME_OPTIONS2, global: DEFAULT_GLOBAL_OPTIONS2 } = defaults;
  return {
    db: Object.assign(Object.assign({}, DEFAULT_DB_OPTIONS2), dbOptions),
    auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS2), authOptions),
    realtime: Object.assign(Object.assign({}, DEFAULT_REALTIME_OPTIONS2), realtimeOptions),
    global: Object.assign(Object.assign({}, DEFAULT_GLOBAL_OPTIONS2), globalOptions)
  };
}
__name(applySettingDefaults, "applySettingDefaults");

// node_modules/.pnpm/@supabase+supabase-js@2.43.5/node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/GoTrueAdminApi.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/lib/fetch.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/lib/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/lib/version.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var version6 = "2.64.2";

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/lib/constants.js
var GOTRUE_URL = "http://localhost:9999";
var STORAGE_KEY = "supabase.auth.token";
var DEFAULT_HEADERS5 = { "X-Client-Info": `gotrue-js/${version6}` };
var EXPIRY_MARGIN = 10;
var API_VERSION_HEADER_NAME = "X-Supabase-Api-Version";
var API_VERSIONS = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
};

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/lib/helpers.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function expiresAt(expiresIn) {
  const timeNow = Math.round(Date.now() / 1e3);
  return timeNow + expiresIn;
}
__name(expiresAt, "expiresAt");
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
__name(uuid, "uuid");
var isBrowser = /* @__PURE__ */ __name(() => typeof document !== "undefined", "isBrowser");
var localStorageWriteTests = {
  tested: false,
  writable: false
};
var supportsLocalStorage = /* @__PURE__ */ __name(() => {
  if (!isBrowser()) {
    return false;
  }
  try {
    if (typeof globalThis.localStorage !== "object") {
      return false;
    }
  } catch (e) {
    return false;
  }
  if (localStorageWriteTests.tested) {
    return localStorageWriteTests.writable;
  }
  const randomKey = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(randomKey, randomKey);
    globalThis.localStorage.removeItem(randomKey);
    localStorageWriteTests.tested = true;
    localStorageWriteTests.writable = true;
  } catch (e) {
    localStorageWriteTests.tested = true;
    localStorageWriteTests.writable = false;
  }
  return localStorageWriteTests.writable;
}, "supportsLocalStorage");
function parseParametersFromURL(href) {
  const result = {};
  const url = new URL(href);
  if (url.hash && url.hash[0] === "#") {
    try {
      const hashSearchParams = new URLSearchParams(url.hash.substring(1));
      hashSearchParams.forEach((value, key) => {
        result[key] = value;
      });
    } catch (e) {
    }
  }
  url.searchParams.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}
__name(parseParametersFromURL, "parseParametersFromURL");
var resolveFetch4 = /* @__PURE__ */ __name((customFetch) => {
  let _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else if (typeof fetch === "undefined") {
    _fetch = /* @__PURE__ */ __name((...args) => Promise.resolve().then(() => (init_browser(), browser_exports)).then(({ default: fetch4 }) => fetch4(...args)), "_fetch");
  } else {
    _fetch = fetch;
  }
  return (...args) => _fetch(...args);
}, "resolveFetch");
var looksLikeFetchResponse = /* @__PURE__ */ __name((maybeResponse) => {
  return typeof maybeResponse === "object" && maybeResponse !== null && "status" in maybeResponse && "ok" in maybeResponse && "json" in maybeResponse && typeof maybeResponse.json === "function";
}, "looksLikeFetchResponse");
var setItemAsync = /* @__PURE__ */ __name(async (storage, key, data) => {
  await storage.setItem(key, JSON.stringify(data));
}, "setItemAsync");
var getItemAsync = /* @__PURE__ */ __name(async (storage, key) => {
  const value = await storage.getItem(key);
  if (!value) {
    return null;
  }
  try {
    return JSON.parse(value);
  } catch (_a) {
    return value;
  }
}, "getItemAsync");
var removeItemAsync = /* @__PURE__ */ __name(async (storage, key) => {
  await storage.removeItem(key);
}, "removeItemAsync");
function decodeBase64URL(value) {
  const key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let base64 = "";
  let chr1, chr2, chr3;
  let enc1, enc2, enc3, enc4;
  let i = 0;
  value = value.replace("-", "+").replace("_", "/");
  while (i < value.length) {
    enc1 = key.indexOf(value.charAt(i++));
    enc2 = key.indexOf(value.charAt(i++));
    enc3 = key.indexOf(value.charAt(i++));
    enc4 = key.indexOf(value.charAt(i++));
    chr1 = enc1 << 2 | enc2 >> 4;
    chr2 = (enc2 & 15) << 4 | enc3 >> 2;
    chr3 = (enc3 & 3) << 6 | enc4;
    base64 = base64 + String.fromCharCode(chr1);
    if (enc3 != 64 && chr2 != 0) {
      base64 = base64 + String.fromCharCode(chr2);
    }
    if (enc4 != 64 && chr3 != 0) {
      base64 = base64 + String.fromCharCode(chr3);
    }
  }
  return base64;
}
__name(decodeBase64URL, "decodeBase64URL");
var Deferred = class _Deferred {
  static {
    __name(this, "Deferred");
  }
  constructor() {
    ;
    this.promise = new _Deferred.promiseConstructor((res, rej) => {
      ;
      this.resolve = res;
      this.reject = rej;
    });
  }
};
Deferred.promiseConstructor = Promise;
function decodeJWTPayload(token) {
  const base64UrlRegex = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i;
  const parts = token.split(".");
  if (parts.length !== 3) {
    throw new Error("JWT is not valid: not a JWT structure");
  }
  if (!base64UrlRegex.test(parts[1])) {
    throw new Error("JWT is not valid: payload is not in base64url format");
  }
  const base64Url = parts[1];
  return JSON.parse(decodeBase64URL(base64Url));
}
__name(decodeJWTPayload, "decodeJWTPayload");
async function sleep(time3) {
  return await new Promise((accept) => {
    setTimeout(() => accept(null), time3);
  });
}
__name(sleep, "sleep");
function retryable(fn, isRetryable) {
  const promise = new Promise((accept, reject) => {
    ;
    (async () => {
      for (let attempt = 0; attempt < Infinity; attempt++) {
        try {
          const result = await fn(attempt);
          if (!isRetryable(attempt, null, result)) {
            accept(result);
            return;
          }
        } catch (e) {
          if (!isRetryable(attempt, e)) {
            reject(e);
            return;
          }
        }
      }
    })();
  });
  return promise;
}
__name(retryable, "retryable");
function dec2hex(dec) {
  return ("0" + dec.toString(16)).substr(-2);
}
__name(dec2hex, "dec2hex");
function generatePKCEVerifier() {
  const verifierLength = 56;
  const array = new Uint32Array(verifierLength);
  if (typeof crypto === "undefined") {
    const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
    const charSetLen = charSet.length;
    let verifier = "";
    for (let i = 0; i < verifierLength; i++) {
      verifier += charSet.charAt(Math.floor(Math.random() * charSetLen));
    }
    return verifier;
  }
  crypto.getRandomValues(array);
  return Array.from(array, dec2hex).join("");
}
__name(generatePKCEVerifier, "generatePKCEVerifier");
async function sha256(randomString) {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(randomString);
  const hash = await crypto.subtle.digest("SHA-256", encodedData);
  const bytes = new Uint8Array(hash);
  return Array.from(bytes).map((c) => String.fromCharCode(c)).join("");
}
__name(sha256, "sha256");
function base64urlencode(str) {
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
__name(base64urlencode, "base64urlencode");
async function generatePKCEChallenge(verifier) {
  const hasCryptoSupport = typeof crypto !== "undefined" && typeof crypto.subtle !== "undefined" && typeof TextEncoder !== "undefined";
  if (!hasCryptoSupport) {
    console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.");
    return verifier;
  }
  const hashed = await sha256(verifier);
  return base64urlencode(hashed);
}
__name(generatePKCEChallenge, "generatePKCEChallenge");
async function getCodeChallengeAndMethod(storage, storageKey, isPasswordRecovery = false) {
  const codeVerifier = generatePKCEVerifier();
  let storedCodeVerifier = codeVerifier;
  if (isPasswordRecovery) {
    storedCodeVerifier += "/PASSWORD_RECOVERY";
  }
  await setItemAsync(storage, `${storageKey}-code-verifier`, storedCodeVerifier);
  const codeChallenge = await generatePKCEChallenge(codeVerifier);
  const codeChallengeMethod = codeVerifier === codeChallenge ? "plain" : "s256";
  return [codeChallenge, codeChallengeMethod];
}
__name(getCodeChallengeAndMethod, "getCodeChallengeAndMethod");
var API_VERSION_REGEX = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function parseResponseAPIVersion(response) {
  const apiVersion = response.headers.get(API_VERSION_HEADER_NAME);
  if (!apiVersion) {
    return null;
  }
  if (!apiVersion.match(API_VERSION_REGEX)) {
    return null;
  }
  try {
    const date = /* @__PURE__ */ new Date(`${apiVersion}T00:00:00.0Z`);
    return date;
  } catch (e) {
    return null;
  }
}
__name(parseResponseAPIVersion, "parseResponseAPIVersion");

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/lib/errors.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var AuthError = class extends Error {
  static {
    __name(this, "AuthError");
  }
  constructor(message, status, code) {
    super(message);
    this.__isAuthError = true;
    this.name = "AuthError";
    this.status = status;
    this.code = code;
  }
};
function isAuthError(error3) {
  return typeof error3 === "object" && error3 !== null && "__isAuthError" in error3;
}
__name(isAuthError, "isAuthError");
var AuthApiError = class extends AuthError {
  static {
    __name(this, "AuthApiError");
  }
  constructor(message, status, code) {
    super(message, status, code);
    this.name = "AuthApiError";
    this.status = status;
    this.code = code;
  }
};
function isAuthApiError(error3) {
  return isAuthError(error3) && error3.name === "AuthApiError";
}
__name(isAuthApiError, "isAuthApiError");
var AuthUnknownError = class extends AuthError {
  static {
    __name(this, "AuthUnknownError");
  }
  constructor(message, originalError) {
    super(message);
    this.name = "AuthUnknownError";
    this.originalError = originalError;
  }
};
var CustomAuthError = class extends AuthError {
  static {
    __name(this, "CustomAuthError");
  }
  constructor(message, name, status, code) {
    super(message, status, code);
    this.name = name;
    this.status = status;
  }
};
var AuthSessionMissingError = class extends CustomAuthError {
  static {
    __name(this, "AuthSessionMissingError");
  }
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
};
var AuthInvalidTokenResponseError = class extends CustomAuthError {
  static {
    __name(this, "AuthInvalidTokenResponseError");
  }
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
};
var AuthInvalidCredentialsError = class extends CustomAuthError {
  static {
    __name(this, "AuthInvalidCredentialsError");
  }
  constructor(message) {
    super(message, "AuthInvalidCredentialsError", 400, void 0);
  }
};
var AuthImplicitGrantRedirectError = class extends CustomAuthError {
  static {
    __name(this, "AuthImplicitGrantRedirectError");
  }
  constructor(message, details = null) {
    super(message, "AuthImplicitGrantRedirectError", 500, void 0);
    this.details = null;
    this.details = details;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
};
var AuthPKCEGrantCodeExchangeError = class extends CustomAuthError {
  static {
    __name(this, "AuthPKCEGrantCodeExchangeError");
  }
  constructor(message, details = null) {
    super(message, "AuthPKCEGrantCodeExchangeError", 500, void 0);
    this.details = null;
    this.details = details;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
};
var AuthRetryableFetchError = class extends CustomAuthError {
  static {
    __name(this, "AuthRetryableFetchError");
  }
  constructor(message, status) {
    super(message, "AuthRetryableFetchError", status, void 0);
  }
};
function isAuthRetryableFetchError(error3) {
  return isAuthError(error3) && error3.name === "AuthRetryableFetchError";
}
__name(isAuthRetryableFetchError, "isAuthRetryableFetchError");
var AuthWeakPasswordError = class extends CustomAuthError {
  static {
    __name(this, "AuthWeakPasswordError");
  }
  constructor(message, status, reasons) {
    super(message, "AuthWeakPasswordError", status, "weak_password");
    this.reasons = reasons;
  }
};

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/lib/fetch.js
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var _getErrorMessage2 = /* @__PURE__ */ __name((err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err), "_getErrorMessage");
var NETWORK_ERROR_CODES = [502, 503, 504];
async function handleError2(error3) {
  var _a;
  if (!looksLikeFetchResponse(error3)) {
    throw new AuthRetryableFetchError(_getErrorMessage2(error3), 0);
  }
  if (NETWORK_ERROR_CODES.includes(error3.status)) {
    throw new AuthRetryableFetchError(_getErrorMessage2(error3), error3.status);
  }
  let data;
  try {
    data = await error3.json();
  } catch (e) {
    throw new AuthUnknownError(_getErrorMessage2(e), e);
  }
  let errorCode = void 0;
  const responseAPIVersion = parseResponseAPIVersion(error3);
  if (responseAPIVersion && responseAPIVersion.getTime() >= API_VERSIONS["2024-01-01"].timestamp && typeof data === "object" && data && typeof data.code === "string") {
    errorCode = data.code;
  } else if (typeof data === "object" && data && typeof data.error_code === "string") {
    errorCode = data.error_code;
  }
  if (!errorCode) {
    if (typeof data === "object" && data && typeof data.weak_password === "object" && data.weak_password && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.reasons.reduce((a, i) => a && typeof i === "string", true)) {
      throw new AuthWeakPasswordError(_getErrorMessage2(data), error3.status, data.weak_password.reasons);
    }
  } else if (errorCode === "weak_password") {
    throw new AuthWeakPasswordError(_getErrorMessage2(data), error3.status, ((_a = data.weak_password) === null || _a === void 0 ? void 0 : _a.reasons) || []);
  }
  throw new AuthApiError(_getErrorMessage2(data), error3.status || 500, errorCode);
}
__name(handleError2, "handleError");
var _getRequestParams2 = /* @__PURE__ */ __name((method, options, parameters, body) => {
  const params = { method, headers: (options === null || options === void 0 ? void 0 : options.headers) || {} };
  if (method === "GET") {
    return params;
  }
  params.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, options === null || options === void 0 ? void 0 : options.headers);
  params.body = JSON.stringify(body);
  return Object.assign(Object.assign({}, params), parameters);
}, "_getRequestParams");
async function _request(fetcher, method, url, options) {
  var _a;
  const headers = Object.assign({}, options === null || options === void 0 ? void 0 : options.headers);
  if (!headers[API_VERSION_HEADER_NAME]) {
    headers[API_VERSION_HEADER_NAME] = API_VERSIONS["2024-01-01"].name;
  }
  if (options === null || options === void 0 ? void 0 : options.jwt) {
    headers["Authorization"] = `Bearer ${options.jwt}`;
  }
  const qs = (_a = options === null || options === void 0 ? void 0 : options.query) !== null && _a !== void 0 ? _a : {};
  if (options === null || options === void 0 ? void 0 : options.redirectTo) {
    qs["redirect_to"] = options.redirectTo;
  }
  const queryString = Object.keys(qs).length ? "?" + new URLSearchParams(qs).toString() : "";
  const data = await _handleRequest2(fetcher, method, url + queryString, {
    headers,
    noResolveJson: options === null || options === void 0 ? void 0 : options.noResolveJson
  }, {}, options === null || options === void 0 ? void 0 : options.body);
  return (options === null || options === void 0 ? void 0 : options.xform) ? options === null || options === void 0 ? void 0 : options.xform(data) : { data: Object.assign({}, data), error: null };
}
__name(_request, "_request");
async function _handleRequest2(fetcher, method, url, options, parameters, body) {
  const requestParams = _getRequestParams2(method, options, parameters, body);
  let result;
  try {
    result = await fetcher(url, Object.assign({}, requestParams));
  } catch (e) {
    console.error(e);
    throw new AuthRetryableFetchError(_getErrorMessage2(e), 0);
  }
  if (!result.ok) {
    await handleError2(result);
  }
  if (options === null || options === void 0 ? void 0 : options.noResolveJson) {
    return result;
  }
  try {
    return await result.json();
  } catch (e) {
    await handleError2(e);
  }
}
__name(_handleRequest2, "_handleRequest");
function _sessionResponse(data) {
  var _a;
  let session2 = null;
  if (hasSession(data)) {
    session2 = Object.assign({}, data);
    if (!data.expires_at) {
      session2.expires_at = expiresAt(data.expires_in);
    }
  }
  const user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
  return { data: { session: session2, user }, error: null };
}
__name(_sessionResponse, "_sessionResponse");
function _sessionResponsePassword(data) {
  const response = _sessionResponse(data);
  if (!response.error && data.weak_password && typeof data.weak_password === "object" && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.message && typeof data.weak_password.message === "string" && data.weak_password.reasons.reduce((a, i) => a && typeof i === "string", true)) {
    response.data.weak_password = data.weak_password;
  }
  return response;
}
__name(_sessionResponsePassword, "_sessionResponsePassword");
function _userResponse(data) {
  var _a;
  const user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
  return { data: { user }, error: null };
}
__name(_userResponse, "_userResponse");
function _ssoResponse(data) {
  return { data, error: null };
}
__name(_ssoResponse, "_ssoResponse");
function _generateLinkResponse(data) {
  const { action_link, email_otp, hashed_token, redirect_to, verification_type } = data, rest = __rest(data, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]);
  const properties = {
    action_link,
    email_otp,
    hashed_token,
    redirect_to,
    verification_type
  };
  const user = Object.assign({}, rest);
  return {
    data: {
      properties,
      user
    },
    error: null
  };
}
__name(_generateLinkResponse, "_generateLinkResponse");
function _noResolveJsonResponse(data) {
  return data;
}
__name(_noResolveJsonResponse, "_noResolveJsonResponse");
function hasSession(data) {
  return data.access_token && data.refresh_token && data.expires_in;
}
__name(hasSession, "hasSession");

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/GoTrueAdminApi.js
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var GoTrueAdminApi = class {
  static {
    __name(this, "GoTrueAdminApi");
  }
  constructor({ url = "", headers = {}, fetch: fetch4 }) {
    this.url = url;
    this.headers = headers;
    this.fetch = resolveFetch4(fetch4);
    this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(jwt, scope = "global") {
    try {
      await _request(this.fetch, "POST", `${this.url}/logout?scope=${scope}`, {
        headers: this.headers,
        jwt,
        noResolveJson: true
      });
      return { data: null, error: null };
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: null, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(email, options = {}) {
    try {
      return await _request(this.fetch, "POST", `${this.url}/invite`, {
        body: { email, data: options.data },
        headers: this.headers,
        redirectTo: options.redirectTo,
        xform: _userResponse
      });
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(params) {
    try {
      const { options } = params, rest = __rest2(params, ["options"]);
      const body = Object.assign(Object.assign({}, rest), options);
      if ("newEmail" in rest) {
        body.new_email = rest === null || rest === void 0 ? void 0 : rest.newEmail;
        delete body["newEmail"];
      }
      return await _request(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body,
        headers: this.headers,
        xform: _generateLinkResponse,
        redirectTo: options === null || options === void 0 ? void 0 : options.redirectTo
      });
    } catch (error3) {
      if (isAuthError(error3)) {
        return {
          data: {
            properties: null,
            user: null
          },
          error: error3
        };
      }
      throw error3;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(attributes) {
    try {
      return await _request(this.fetch, "POST", `${this.url}/admin/users`, {
        body: attributes,
        headers: this.headers,
        xform: _userResponse
      });
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(params) {
    var _a, _b, _c, _d, _e, _f, _g;
    try {
      const pagination = { nextPage: null, lastPage: 0, total: 0 };
      const response = await _request(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: true,
        query: {
          page: (_b = (_a = params === null || params === void 0 ? void 0 : params.page) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "",
          per_page: (_d = (_c = params === null || params === void 0 ? void 0 : params.perPage) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""
        },
        xform: _noResolveJsonResponse
      });
      if (response.error)
        throw response.error;
      const users = await response.json();
      const total = (_e = response.headers.get("x-total-count")) !== null && _e !== void 0 ? _e : 0;
      const links = (_g = (_f = response.headers.get("link")) === null || _f === void 0 ? void 0 : _f.split(",")) !== null && _g !== void 0 ? _g : [];
      if (links.length > 0) {
        links.forEach((link3) => {
          const page = parseInt(link3.split(";")[0].split("=")[1].substring(0, 1));
          const rel = JSON.parse(link3.split(";")[1].split("=")[1]);
          pagination[`${rel}Page`] = page;
        });
        pagination.total = parseInt(total);
      }
      return { data: Object.assign(Object.assign({}, users), pagination), error: null };
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { users: [] }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(uid) {
    try {
      return await _request(this.fetch, "GET", `${this.url}/admin/users/${uid}`, {
        headers: this.headers,
        xform: _userResponse
      });
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(uid, attributes) {
    try {
      return await _request(this.fetch, "PUT", `${this.url}/admin/users/${uid}`, {
        body: attributes,
        headers: this.headers,
        xform: _userResponse
      });
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted (setting `deleted_at` to the current timestamp and disabling their account while preserving their data) from the auth schema.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(id, shouldSoftDelete = false) {
    try {
      return await _request(this.fetch, "DELETE", `${this.url}/admin/users/${id}`, {
        headers: this.headers,
        body: {
          should_soft_delete: shouldSoftDelete
        },
        xform: _userResponse
      });
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null }, error: error3 };
      }
      throw error3;
    }
  }
  async _listFactors(params) {
    try {
      const { data, error: error3 } = await _request(this.fetch, "GET", `${this.url}/admin/users/${params.userId}/factors`, {
        headers: this.headers,
        xform: /* @__PURE__ */ __name((factors) => {
          return { data: { factors }, error: null };
        }, "xform")
      });
      return { data, error: error3 };
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: null, error: error3 };
      }
      throw error3;
    }
  }
  async _deleteFactor(params) {
    try {
      const data = await _request(this.fetch, "DELETE", `${this.url}/admin/users/${params.userId}/factors/${params.id}`, {
        headers: this.headers
      });
      return { data, error: null };
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: null, error: error3 };
      }
      throw error3;
    }
  }
};

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/GoTrueClient.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/lib/local-storage.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var localStorageAdapter = {
  getItem: /* @__PURE__ */ __name((key) => {
    if (!supportsLocalStorage()) {
      return null;
    }
    return globalThis.localStorage.getItem(key);
  }, "getItem"),
  setItem: /* @__PURE__ */ __name((key, value) => {
    if (!supportsLocalStorage()) {
      return;
    }
    globalThis.localStorage.setItem(key, value);
  }, "setItem"),
  removeItem: /* @__PURE__ */ __name((key) => {
    if (!supportsLocalStorage()) {
      return;
    }
    globalThis.localStorage.removeItem(key);
  }, "removeItem")
};
function memoryLocalStorageAdapter(store = {}) {
  return {
    getItem: /* @__PURE__ */ __name((key) => {
      return store[key] || null;
    }, "getItem"),
    setItem: /* @__PURE__ */ __name((key, value) => {
      store[key] = value;
    }, "setItem"),
    removeItem: /* @__PURE__ */ __name((key) => {
      delete store[key];
    }, "removeItem")
  };
}
__name(memoryLocalStorageAdapter, "memoryLocalStorageAdapter");

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/lib/polyfills.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function polyfillGlobalThis() {
  if (typeof globalThis === "object")
    return;
  try {
    Object.defineProperty(Object.prototype, "__magic__", {
      get: /* @__PURE__ */ __name(function() {
        return this;
      }, "get"),
      configurable: true
    });
    __magic__.globalThis = __magic__;
    delete Object.prototype.__magic__;
  } catch (e) {
    if (typeof self !== "undefined") {
      self.globalThis = self;
    }
  }
}
__name(polyfillGlobalThis, "polyfillGlobalThis");

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/lib/locks.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var internals = {
  /**
   * @experimental
   */
  debug: !!(globalThis && supportsLocalStorage() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
var LockAcquireTimeoutError = class extends Error {
  static {
    __name(this, "LockAcquireTimeoutError");
  }
  constructor(message) {
    super(message);
    this.isAcquireTimeout = true;
  }
};
var NavigatorLockAcquireTimeoutError = class extends LockAcquireTimeoutError {
  static {
    __name(this, "NavigatorLockAcquireTimeoutError");
  }
};
async function navigatorLock(name, acquireTimeout, fn) {
  if (internals.debug) {
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", name, acquireTimeout);
  }
  const abortController = new globalThis.AbortController();
  if (acquireTimeout > 0) {
    setTimeout(() => {
      abortController.abort();
      if (internals.debug) {
        console.log("@supabase/gotrue-js: navigatorLock acquire timed out", name);
      }
    }, acquireTimeout);
  }
  return await globalThis.navigator.locks.request(name, acquireTimeout === 0 ? {
    mode: "exclusive",
    ifAvailable: true
  } : {
    mode: "exclusive",
    signal: abortController.signal
  }, async (lock) => {
    if (lock) {
      if (internals.debug) {
        console.log("@supabase/gotrue-js: navigatorLock: acquired", name, lock.name);
      }
      try {
        return await fn();
      } finally {
        if (internals.debug) {
          console.log("@supabase/gotrue-js: navigatorLock: released", name, lock.name);
        }
      }
    } else {
      if (acquireTimeout === 0) {
        if (internals.debug) {
          console.log("@supabase/gotrue-js: navigatorLock: not immediately available", name);
        }
        throw new NavigatorLockAcquireTimeoutError(`Acquiring an exclusive Navigator LockManager lock "${name}" immediately failed`);
      } else {
        if (internals.debug) {
          try {
            const result = await globalThis.navigator.locks.query();
            console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(result, null, "  "));
          } catch (e) {
            console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e);
          }
        }
        console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request");
        return await fn();
      }
    }
  });
}
__name(navigatorLock, "navigatorLock");

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/GoTrueClient.js
polyfillGlobalThis();
var DEFAULT_OPTIONS = {
  url: GOTRUE_URL,
  storageKey: STORAGE_KEY,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  headers: DEFAULT_HEADERS5,
  flowType: "implicit",
  debug: false,
  hasCustomAuthorizationHeader: false
};
var AUTO_REFRESH_TICK_DURATION = 30 * 1e3;
var AUTO_REFRESH_TICK_THRESHOLD = 3;
async function lockNoOp(name, acquireTimeout, fn) {
  return await fn();
}
__name(lockNoOp, "lockNoOp");
var GoTrueClient = class _GoTrueClient {
  static {
    __name(this, "GoTrueClient");
  }
  /**
   * Create a new client for use in the browser.
   */
  constructor(options) {
    var _a, _b;
    this.memoryStorage = null;
    this.stateChangeEmitters = /* @__PURE__ */ new Map();
    this.autoRefreshTicker = null;
    this.visibilityChangedCallback = null;
    this.refreshingDeferred = null;
    this.initializePromise = null;
    this.detectSessionInUrl = true;
    this.hasCustomAuthorizationHeader = false;
    this.suppressGetSessionWarning = false;
    this.lockAcquired = false;
    this.pendingInLock = [];
    this.broadcastChannel = null;
    this.logger = console.log;
    this.instanceID = _GoTrueClient.nextInstanceID;
    _GoTrueClient.nextInstanceID += 1;
    if (this.instanceID > 0 && isBrowser()) {
      console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    }
    const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
    this.logDebugMessages = !!settings.debug;
    if (typeof settings.debug === "function") {
      this.logger = settings.debug;
    }
    this.persistSession = settings.persistSession;
    this.storageKey = settings.storageKey;
    this.autoRefreshToken = settings.autoRefreshToken;
    this.admin = new GoTrueAdminApi({
      url: settings.url,
      headers: settings.headers,
      fetch: settings.fetch
    });
    this.url = settings.url;
    this.headers = settings.headers;
    this.fetch = resolveFetch4(settings.fetch);
    this.lock = settings.lock || lockNoOp;
    this.detectSessionInUrl = settings.detectSessionInUrl;
    this.flowType = settings.flowType;
    this.hasCustomAuthorizationHeader = settings.hasCustomAuthorizationHeader;
    if (settings.lock) {
      this.lock = settings.lock;
    } else if (isBrowser() && ((_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.navigator) === null || _a === void 0 ? void 0 : _a.locks)) {
      this.lock = navigatorLock;
    } else {
      this.lock = lockNoOp;
    }
    this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    };
    if (this.persistSession) {
      if (settings.storage) {
        this.storage = settings.storage;
      } else {
        if (supportsLocalStorage()) {
          this.storage = localStorageAdapter;
        } else {
          this.memoryStorage = {};
          this.storage = memoryLocalStorageAdapter(this.memoryStorage);
        }
      }
    } else {
      this.memoryStorage = {};
      this.storage = memoryLocalStorageAdapter(this.memoryStorage);
    }
    if (isBrowser() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (e) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e);
      }
      (_b = this.broadcastChannel) === null || _b === void 0 ? void 0 : _b.addEventListener("message", async (event) => {
        this._debug("received broadcast notification from other tab or client", event);
        await this._notifyAllSubscribers(event.data.event, event.data.session, false);
      });
    }
    this.initialize();
  }
  _debug(...args) {
    if (this.logDebugMessages) {
      this.logger(`GoTrueClient@${this.instanceID} (${version6}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...args);
    }
    return this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    if (this.initializePromise) {
      return await this.initializePromise;
    }
    this.initializePromise = (async () => {
      return await this._acquireLock(-1, async () => {
        return await this._initialize();
      });
    })();
    return await this.initializePromise;
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    try {
      const isPKCEFlow = isBrowser() ? await this._isPKCEFlow() : false;
      this._debug("#_initialize()", "begin", "is PKCE flow", isPKCEFlow);
      if (isPKCEFlow || this.detectSessionInUrl && this._isImplicitGrantFlow()) {
        const { data, error: error3 } = await this._getSessionFromURL(isPKCEFlow);
        if (error3) {
          this._debug("#_initialize()", "error detecting session from URL", error3);
          if ((error3 === null || error3 === void 0 ? void 0 : error3.message) === "Identity is already linked" || (error3 === null || error3 === void 0 ? void 0 : error3.message) === "Identity is already linked to another user") {
            return { error: error3 };
          }
          await this._removeSession();
          return { error: error3 };
        }
        const { session: session2, redirectType } = data;
        this._debug("#_initialize()", "detected session in URL", session2, "redirect type", redirectType);
        await this._saveSession(session2);
        setTimeout(async () => {
          if (redirectType === "recovery") {
            await this._notifyAllSubscribers("PASSWORD_RECOVERY", session2);
          } else {
            await this._notifyAllSubscribers("SIGNED_IN", session2);
          }
        }, 0);
        return { error: null };
      }
      await this._recoverAndRefresh();
      return { error: null };
    } catch (error3) {
      if (isAuthError(error3)) {
        return { error: error3 };
      }
      return {
        error: new AuthUnknownError("Unexpected error during initialization", error3)
      };
    } finally {
      await this._handleVisibilityChange();
      this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(credentials) {
    var _a, _b, _c;
    try {
      await this._removeSession();
      const res = await _request(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (_b = (_a = credentials === null || credentials === void 0 ? void 0 : credentials.options) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : {},
          gotrue_meta_security: { captcha_token: (_c = credentials === null || credentials === void 0 ? void 0 : credentials.options) === null || _c === void 0 ? void 0 : _c.captchaToken }
        },
        xform: _sessionResponse
      });
      const { data, error: error3 } = res;
      if (error3 || !data) {
        return { data: { user: null, session: null }, error: error3 };
      }
      const session2 = data.session;
      const user = data.user;
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers("SIGNED_IN", session2);
      }
      return { data: { user, session: session2 }, error: null };
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null, session: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(credentials) {
    var _a, _b, _c;
    try {
      await this._removeSession();
      let res;
      if ("email" in credentials) {
        const { email, password, options } = credentials;
        let codeChallenge = null;
        let codeChallengeMethod = null;
        if (this.flowType === "pkce") {
          ;
          [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(this.storage, this.storageKey);
        }
        res = await _request(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
          body: {
            email,
            password,
            data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
            code_challenge: codeChallenge,
            code_challenge_method: codeChallengeMethod
          },
          xform: _sessionResponse
        });
      } else if ("phone" in credentials) {
        const { phone, password, options } = credentials;
        res = await _request(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone,
            password,
            data: (_b = options === null || options === void 0 ? void 0 : options.data) !== null && _b !== void 0 ? _b : {},
            channel: (_c = options === null || options === void 0 ? void 0 : options.channel) !== null && _c !== void 0 ? _c : "sms",
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
          },
          xform: _sessionResponse
        });
      } else {
        throw new AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
      }
      const { data, error: error3 } = res;
      if (error3 || !data) {
        return { data: { user: null, session: null }, error: error3 };
      }
      const session2 = data.session;
      const user = data.user;
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers("SIGNED_IN", session2);
      }
      return { data: { user, session: session2 }, error: null };
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null, session: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(credentials) {
    try {
      await this._removeSession();
      let res;
      if ("email" in credentials) {
        const { email, password, options } = credentials;
        res = await _request(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email,
            password,
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
          },
          xform: _sessionResponsePassword
        });
      } else if ("phone" in credentials) {
        const { phone, password, options } = credentials;
        res = await _request(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone,
            password,
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
          },
          xform: _sessionResponsePassword
        });
      } else {
        throw new AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
      }
      const { data, error: error3 } = res;
      if (error3) {
        return { data: { user: null, session: null }, error: error3 };
      } else if (!data || !data.session || !data.user) {
        return { data: { user: null, session: null }, error: new AuthInvalidTokenResponseError() };
      }
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers("SIGNED_IN", data.session);
      }
      return {
        data: Object.assign({ user: data.user, session: data.session }, data.weak_password ? { weakPassword: data.weak_password } : null),
        error: error3
      };
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null, session: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(credentials) {
    var _a, _b, _c, _d;
    await this._removeSession();
    return await this._handleProviderSignIn(credentials.provider, {
      redirectTo: (_a = credentials.options) === null || _a === void 0 ? void 0 : _a.redirectTo,
      scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
      queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams,
      skipBrowserRedirect: (_d = credentials.options) === null || _d === void 0 ? void 0 : _d.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(authCode) {
    await this.initializePromise;
    return this._acquireLock(-1, async () => {
      return this._exchangeCodeForSession(authCode);
    });
  }
  async _exchangeCodeForSession(authCode) {
    const storageItem = await getItemAsync(this.storage, `${this.storageKey}-code-verifier`);
    const [codeVerifier, redirectType] = (storageItem !== null && storageItem !== void 0 ? storageItem : "").split("/");
    const { data, error: error3 } = await _request(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
      headers: this.headers,
      body: {
        auth_code: authCode,
        code_verifier: codeVerifier
      },
      xform: _sessionResponse
    });
    await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
    if (error3) {
      return { data: { user: null, session: null, redirectType: null }, error: error3 };
    } else if (!data || !data.session || !data.user) {
      return {
        data: { user: null, session: null, redirectType: null },
        error: new AuthInvalidTokenResponseError()
      };
    }
    if (data.session) {
      await this._saveSession(data.session);
      await this._notifyAllSubscribers("SIGNED_IN", data.session);
    }
    return { data: Object.assign(Object.assign({}, data), { redirectType: redirectType !== null && redirectType !== void 0 ? redirectType : null }), error: error3 };
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(credentials) {
    await this._removeSession();
    try {
      const { options, provider, token, access_token, nonce } = credentials;
      const res = await _request(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider,
          id_token: token,
          access_token,
          nonce,
          gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
        },
        xform: _sessionResponse
      });
      const { data, error: error3 } = res;
      if (error3) {
        return { data: { user: null, session: null }, error: error3 };
      } else if (!data || !data.session || !data.user) {
        return {
          data: { user: null, session: null },
          error: new AuthInvalidTokenResponseError()
        };
      }
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers("SIGNED_IN", data.session);
      }
      return { data, error: error3 };
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null, session: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(credentials) {
    var _a, _b, _c, _d, _e;
    try {
      await this._removeSession();
      if ("email" in credentials) {
        const { email, options } = credentials;
        let codeChallenge = null;
        let codeChallengeMethod = null;
        if (this.flowType === "pkce") {
          ;
          [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(this.storage, this.storageKey);
        }
        const { error: error3 } = await _request(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email,
            data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
            create_user: (_b = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _b !== void 0 ? _b : true,
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
            code_challenge: codeChallenge,
            code_challenge_method: codeChallengeMethod
          },
          redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: error3 };
      }
      if ("phone" in credentials) {
        const { phone, options } = credentials;
        const { data, error: error3 } = await _request(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone,
            data: (_c = options === null || options === void 0 ? void 0 : options.data) !== null && _c !== void 0 ? _c : {},
            create_user: (_d = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _d !== void 0 ? _d : true,
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
            channel: (_e = options === null || options === void 0 ? void 0 : options.channel) !== null && _e !== void 0 ? _e : "sms"
          }
        });
        return { data: { user: null, session: null, messageId: data === null || data === void 0 ? void 0 : data.message_id }, error: error3 };
      }
      throw new AuthInvalidCredentialsError("You must provide either an email or phone number.");
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null, session: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(params) {
    var _a, _b;
    try {
      if (params.type !== "email_change" && params.type !== "phone_change") {
        await this._removeSession();
      }
      let redirectTo = void 0;
      let captchaToken = void 0;
      if ("options" in params) {
        redirectTo = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo;
        captchaToken = (_b = params.options) === null || _b === void 0 ? void 0 : _b.captchaToken;
      }
      const { data, error: error3 } = await _request(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, params), { gotrue_meta_security: { captcha_token: captchaToken } }),
        redirectTo,
        xform: _sessionResponse
      });
      if (error3) {
        throw error3;
      }
      if (!data) {
        throw new Error("An error occurred on token verification.");
      }
      const session2 = data.session;
      const user = data.user;
      if (session2 === null || session2 === void 0 ? void 0 : session2.access_token) {
        await this._saveSession(session2);
        await this._notifyAllSubscribers(params.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", session2);
      }
      return { data: { user, session: session2 }, error: null };
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null, session: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(params) {
    var _a, _b, _c;
    try {
      await this._removeSession();
      let codeChallenge = null;
      let codeChallengeMethod = null;
      if (this.flowType === "pkce") {
        ;
        [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(this.storage, this.storageKey);
      }
      return await _request(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in params ? { provider_id: params.providerId } : null), "domain" in params ? { domain: params.domain } : null), { redirect_to: (_b = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo) !== null && _b !== void 0 ? _b : void 0 }), ((_c = params === null || params === void 0 ? void 0 : params.options) === null || _c === void 0 ? void 0 : _c.captchaToken) ? { gotrue_meta_security: { captcha_token: params.options.captchaToken } } : null), { skip_http_redirect: true, code_challenge: codeChallenge, code_challenge_method: codeChallengeMethod }),
        headers: this.headers,
        xform: _ssoResponse
      });
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: null, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    await this.initializePromise;
    return await this._acquireLock(-1, async () => {
      return await this._reauthenticate();
    });
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (result) => {
        const { data: { session: session2 }, error: sessionError } = result;
        if (sessionError)
          throw sessionError;
        if (!session2)
          throw new AuthSessionMissingError();
        const { error: error3 } = await _request(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: session2.access_token
        });
        return { data: { user: null, session: null }, error: error3 };
      });
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null, session: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(credentials) {
    try {
      if (credentials.type != "email_change" && credentials.type != "phone_change") {
        await this._removeSession();
      }
      const endpoint = `${this.url}/resend`;
      if ("email" in credentials) {
        const { email, type, options } = credentials;
        const { error: error3 } = await _request(this.fetch, "POST", endpoint, {
          headers: this.headers,
          body: {
            email,
            type,
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
          },
          redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: error3 };
      } else if ("phone" in credentials) {
        const { phone, type, options } = credentials;
        const { data, error: error3 } = await _request(this.fetch, "POST", endpoint, {
          headers: this.headers,
          body: {
            phone,
            type,
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: data === null || data === void 0 ? void 0 : data.message_id }, error: error3 };
      }
      throw new AuthInvalidCredentialsError("You must provide either an email or phone number and a type");
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null, session: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    await this.initializePromise;
    const result = await this._acquireLock(-1, async () => {
      return this._useSession(async (result2) => {
        return result2;
      });
    });
    return result;
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(acquireTimeout, fn) {
    this._debug("#_acquireLock", "begin", acquireTimeout);
    try {
      if (this.lockAcquired) {
        const last = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve();
        const result = (async () => {
          await last;
          return await fn();
        })();
        this.pendingInLock.push((async () => {
          try {
            await result;
          } catch (e) {
          }
        })());
        return result;
      }
      return await this.lock(`lock:${this.storageKey}`, acquireTimeout, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = true;
          const result = fn();
          this.pendingInLock.push((async () => {
            try {
              await result;
            } catch (e) {
            }
          })());
          await result;
          while (this.pendingInLock.length) {
            const waitOn = [...this.pendingInLock];
            await Promise.all(waitOn);
            this.pendingInLock.splice(0, waitOn.length);
          }
          return await result;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey);
          this.lockAcquired = false;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(fn) {
    this._debug("#_useSession", "begin");
    try {
      const result = await this.__loadSession();
      return await fn(result);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin");
    if (!this.lockAcquired) {
      this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    }
    try {
      let currentSession = null;
      const maybeSession = await getItemAsync(this.storage, this.storageKey);
      this._debug("#getSession()", "session from storage", maybeSession);
      if (maybeSession !== null) {
        if (this._isValidSession(maybeSession)) {
          currentSession = maybeSession;
        } else {
          this._debug("#getSession()", "session from storage is not valid");
          await this._removeSession();
        }
      }
      if (!currentSession) {
        return { data: { session: null }, error: null };
      }
      const hasExpired = currentSession.expires_at ? currentSession.expires_at <= Date.now() / 1e3 : false;
      this._debug("#__loadSession()", `session has${hasExpired ? "" : " not"} expired`, "expires_at", currentSession.expires_at);
      if (!hasExpired) {
        if (this.storage.isServer) {
          const suppressWarning = this.suppressGetSessionWarning;
          const proxySession = new Proxy(currentSession, {
            get(target, prop, receiver) {
              if (!suppressWarning && prop === "user") {
                console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.");
              }
              return Reflect.get(target, prop, receiver);
            }
          });
          currentSession = proxySession;
        }
        return { data: { session: currentSession }, error: null };
      }
      const { session: session2, error: error3 } = await this._callRefreshToken(currentSession.refresh_token);
      if (error3) {
        return { data: { session: null }, error: error3 };
      }
      return { data: { session: session2 }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(jwt) {
    if (jwt) {
      return await this._getUser(jwt);
    }
    await this.initializePromise;
    const result = await this._acquireLock(-1, async () => {
      return await this._getUser();
    });
    return result;
  }
  async _getUser(jwt) {
    try {
      if (jwt) {
        return await _request(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt,
          xform: _userResponse
        });
      }
      return await this._useSession(async (result) => {
        var _a, _b, _c;
        const { data, error: error3 } = result;
        if (error3) {
          throw error3;
        }
        if (!((_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) && !this.hasCustomAuthorizationHeader) {
          return { data: { user: null }, error: new AuthSessionMissingError() };
        }
        return await _request(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (_c = (_b = data.session) === null || _b === void 0 ? void 0 : _b.access_token) !== null && _c !== void 0 ? _c : void 0,
          xform: _userResponse
        });
      });
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(attributes, options = {}) {
    await this.initializePromise;
    return await this._acquireLock(-1, async () => {
      return await this._updateUser(attributes, options);
    });
  }
  async _updateUser(attributes, options = {}) {
    try {
      return await this._useSession(async (result) => {
        const { data: sessionData, error: sessionError } = result;
        if (sessionError) {
          throw sessionError;
        }
        if (!sessionData.session) {
          throw new AuthSessionMissingError();
        }
        const session2 = sessionData.session;
        let codeChallenge = null;
        let codeChallengeMethod = null;
        if (this.flowType === "pkce" && attributes.email != null) {
          ;
          [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(this.storage, this.storageKey);
        }
        const { data, error: userError } = await _request(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
          body: Object.assign(Object.assign({}, attributes), { code_challenge: codeChallenge, code_challenge_method: codeChallengeMethod }),
          jwt: session2.access_token,
          xform: _userResponse
        });
        if (userError)
          throw userError;
        session2.user = data.user;
        await this._saveSession(session2);
        await this._notifyAllSubscribers("USER_UPDATED", session2);
        return { data: { user: session2.user }, error: null };
      });
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Decodes a JWT (without performing any validation).
   */
  _decodeJWT(jwt) {
    return decodeJWTPayload(jwt);
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(currentSession) {
    await this.initializePromise;
    return await this._acquireLock(-1, async () => {
      return await this._setSession(currentSession);
    });
  }
  async _setSession(currentSession) {
    try {
      if (!currentSession.access_token || !currentSession.refresh_token) {
        throw new AuthSessionMissingError();
      }
      const timeNow = Date.now() / 1e3;
      let expiresAt2 = timeNow;
      let hasExpired = true;
      let session2 = null;
      const payload = decodeJWTPayload(currentSession.access_token);
      if (payload.exp) {
        expiresAt2 = payload.exp;
        hasExpired = expiresAt2 <= timeNow;
      }
      if (hasExpired) {
        const { session: refreshedSession, error: error3 } = await this._callRefreshToken(currentSession.refresh_token);
        if (error3) {
          return { data: { user: null, session: null }, error: error3 };
        }
        if (!refreshedSession) {
          return { data: { user: null, session: null }, error: null };
        }
        session2 = refreshedSession;
      } else {
        const { data, error: error3 } = await this._getUser(currentSession.access_token);
        if (error3) {
          throw error3;
        }
        session2 = {
          access_token: currentSession.access_token,
          refresh_token: currentSession.refresh_token,
          user: data.user,
          token_type: "bearer",
          expires_in: expiresAt2 - timeNow,
          expires_at: expiresAt2
        };
        await this._saveSession(session2);
        await this._notifyAllSubscribers("SIGNED_IN", session2);
      }
      return { data: { user: session2.user, session: session2 }, error: null };
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { session: null, user: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(currentSession) {
    await this.initializePromise;
    return await this._acquireLock(-1, async () => {
      return await this._refreshSession(currentSession);
    });
  }
  async _refreshSession(currentSession) {
    try {
      return await this._useSession(async (result) => {
        var _a;
        if (!currentSession) {
          const { data, error: error4 } = result;
          if (error4) {
            throw error4;
          }
          currentSession = (_a = data.session) !== null && _a !== void 0 ? _a : void 0;
        }
        if (!(currentSession === null || currentSession === void 0 ? void 0 : currentSession.refresh_token)) {
          throw new AuthSessionMissingError();
        }
        const { session: session2, error: error3 } = await this._callRefreshToken(currentSession.refresh_token);
        if (error3) {
          return { data: { user: null, session: null }, error: error3 };
        }
        if (!session2) {
          return { data: { user: null, session: null }, error: null };
        }
        return { data: { user: session2.user, session: session2 }, error: null };
      });
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { user: null, session: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(isPKCEFlow) {
    try {
      if (!isBrowser())
        throw new AuthImplicitGrantRedirectError("No browser detected.");
      if (this.flowType === "implicit" && !this._isImplicitGrantFlow()) {
        throw new AuthImplicitGrantRedirectError("Not a valid implicit grant flow url.");
      } else if (this.flowType == "pkce" && !isPKCEFlow) {
        throw new AuthPKCEGrantCodeExchangeError("Not a valid PKCE flow url.");
      }
      const params = parseParametersFromURL(window.location.href);
      if (isPKCEFlow) {
        if (!params.code)
          throw new AuthPKCEGrantCodeExchangeError("No code detected.");
        const { data: data2, error: error4 } = await this._exchangeCodeForSession(params.code);
        if (error4)
          throw error4;
        const url = new URL(window.location.href);
        url.searchParams.delete("code");
        window.history.replaceState(window.history.state, "", url.toString());
        return { data: { session: data2.session, redirectType: null }, error: null };
      }
      if (params.error || params.error_description || params.error_code) {
        throw new AuthImplicitGrantRedirectError(params.error_description || "Error in URL with unspecified error_description", {
          error: params.error || "unspecified_error",
          code: params.error_code || "unspecified_code"
        });
      }
      const { provider_token, provider_refresh_token, access_token, refresh_token, expires_in, expires_at, token_type } = params;
      if (!access_token || !expires_in || !refresh_token || !token_type) {
        throw new AuthImplicitGrantRedirectError("No session defined in URL");
      }
      const timeNow = Math.round(Date.now() / 1e3);
      const expiresIn = parseInt(expires_in);
      let expiresAt2 = timeNow + expiresIn;
      if (expires_at) {
        expiresAt2 = parseInt(expires_at);
      }
      const actuallyExpiresIn = expiresAt2 - timeNow;
      if (actuallyExpiresIn * 1e3 <= AUTO_REFRESH_TICK_DURATION) {
        console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${actuallyExpiresIn}s, should have been closer to ${expiresIn}s`);
      }
      const issuedAt = expiresAt2 - expiresIn;
      if (timeNow - issuedAt >= 120) {
        console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", issuedAt, expiresAt2, timeNow);
      } else if (timeNow - issuedAt < 0) {
        console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew", issuedAt, expiresAt2, timeNow);
      }
      const { data, error: error3 } = await this._getUser(access_token);
      if (error3)
        throw error3;
      const session2 = {
        provider_token,
        provider_refresh_token,
        access_token,
        expires_in: expiresIn,
        expires_at: expiresAt2,
        refresh_token,
        token_type,
        user: data.user
      };
      window.location.hash = "";
      this._debug("#_getSessionFromURL()", "clearing window.location.hash");
      return { data: { session: session2, redirectType: params.type }, error: null };
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { session: null, redirectType: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantFlow() {
    const params = parseParametersFromURL(window.location.href);
    return !!(isBrowser() && (params.access_token || params.error_description));
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCEFlow() {
    const params = parseParametersFromURL(window.location.href);
    const currentStorageContent = await getItemAsync(this.storage, `${this.storageKey}-code-verifier`);
    return !!(params.code && currentStorageContent);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(options = { scope: "global" }) {
    await this.initializePromise;
    return await this._acquireLock(-1, async () => {
      return await this._signOut(options);
    });
  }
  async _signOut({ scope } = { scope: "global" }) {
    return await this._useSession(async (result) => {
      var _a;
      const { data, error: sessionError } = result;
      if (sessionError) {
        return { error: sessionError };
      }
      const accessToken = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token;
      if (accessToken) {
        const { error: error3 } = await this.admin.signOut(accessToken, scope);
        if (error3) {
          if (!(isAuthApiError(error3) && (error3.status === 404 || error3.status === 401 || error3.status === 403))) {
            return { error: error3 };
          }
        }
      }
      if (scope !== "others") {
        await this._removeSession();
        await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
        await this._notifyAllSubscribers("SIGNED_OUT", null);
      }
      return { error: null };
    });
  }
  /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */
  onAuthStateChange(callback) {
    const id = uuid();
    const subscription = {
      id,
      callback,
      unsubscribe: /* @__PURE__ */ __name(() => {
        this._debug("#unsubscribe()", "state change callback with id removed", id);
        this.stateChangeEmitters.delete(id);
      }, "unsubscribe")
    };
    this._debug("#onAuthStateChange()", "registered callback with id", id);
    this.stateChangeEmitters.set(id, subscription);
    (async () => {
      await this.initializePromise;
      await this._acquireLock(-1, async () => {
        this._emitInitialSession(id);
      });
    })();
    return { data: { subscription } };
  }
  async _emitInitialSession(id) {
    return await this._useSession(async (result) => {
      var _a, _b;
      try {
        const { data: { session: session2 }, error: error3 } = result;
        if (error3)
          throw error3;
        await ((_a = this.stateChangeEmitters.get(id)) === null || _a === void 0 ? void 0 : _a.callback("INITIAL_SESSION", session2));
        this._debug("INITIAL_SESSION", "callback id", id, "session", session2);
      } catch (err) {
        await ((_b = this.stateChangeEmitters.get(id)) === null || _b === void 0 ? void 0 : _b.callback("INITIAL_SESSION", null));
        this._debug("INITIAL_SESSION", "callback id", id, "error", err);
        console.error(err);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(email, options = {}) {
    let codeChallenge = null;
    let codeChallengeMethod = null;
    if (this.flowType === "pkce") {
      ;
      [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(
        this.storage,
        this.storageKey,
        true
        // isPasswordRecovery
      );
    }
    try {
      return await _request(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email,
          code_challenge: codeChallenge,
          code_challenge_method: codeChallengeMethod,
          gotrue_meta_security: { captcha_token: options.captchaToken }
        },
        headers: this.headers,
        redirectTo: options.redirectTo
      });
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: null, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var _a;
    try {
      const { data, error: error3 } = await this.getUser();
      if (error3)
        throw error3;
      return { data: { identities: (_a = data.user.identities) !== null && _a !== void 0 ? _a : [] }, error: null };
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: null, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Links an oauth identity to an existing user.
   * This method supports the PKCE flow.
   */
  async linkIdentity(credentials) {
    var _a;
    try {
      const { data, error: error3 } = await this._useSession(async (result) => {
        var _a2, _b, _c, _d, _e;
        const { data: data2, error: error4 } = result;
        if (error4)
          throw error4;
        const url = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, credentials.provider, {
          redirectTo: (_a2 = credentials.options) === null || _a2 === void 0 ? void 0 : _a2.redirectTo,
          scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
          queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams,
          skipBrowserRedirect: true
        });
        return await _request(this.fetch, "GET", url, {
          headers: this.headers,
          jwt: (_e = (_d = data2.session) === null || _d === void 0 ? void 0 : _d.access_token) !== null && _e !== void 0 ? _e : void 0
        });
      });
      if (error3)
        throw error3;
      if (isBrowser() && !((_a = credentials.options) === null || _a === void 0 ? void 0 : _a.skipBrowserRedirect)) {
        window.location.assign(data === null || data === void 0 ? void 0 : data.url);
      }
      return { data: { provider: credentials.provider, url: data === null || data === void 0 ? void 0 : data.url }, error: null };
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: { provider: credentials.provider, url: null }, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(identity) {
    try {
      return await this._useSession(async (result) => {
        var _a, _b;
        const { data, error: error3 } = result;
        if (error3) {
          throw error3;
        }
        return await _request(this.fetch, "DELETE", `${this.url}/user/identities/${identity.identity_id}`, {
          headers: this.headers,
          jwt: (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : void 0
        });
      });
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: null, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(refreshToken) {
    const debugName = `#_refreshAccessToken(${refreshToken.substring(0, 5)}...)`;
    this._debug(debugName, "begin");
    try {
      const startedAt = Date.now();
      return await retryable(async (attempt) => {
        if (attempt > 0) {
          await sleep(200 * Math.pow(2, attempt - 1));
        }
        this._debug(debugName, "refreshing attempt", attempt);
        return await _request(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
          body: { refresh_token: refreshToken },
          headers: this.headers,
          xform: _sessionResponse
        });
      }, (attempt, error3) => {
        const nextBackOffInterval = 200 * Math.pow(2, attempt);
        return error3 && isAuthRetryableFetchError(error3) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + nextBackOffInterval - startedAt < AUTO_REFRESH_TICK_DURATION;
      });
    } catch (error3) {
      this._debug(debugName, "error", error3);
      if (isAuthError(error3)) {
        return { data: { session: null, user: null }, error: error3 };
      }
      throw error3;
    } finally {
      this._debug(debugName, "end");
    }
  }
  _isValidSession(maybeSession) {
    const isValidSession = typeof maybeSession === "object" && maybeSession !== null && "access_token" in maybeSession && "refresh_token" in maybeSession && "expires_at" in maybeSession;
    return isValidSession;
  }
  async _handleProviderSignIn(provider, options) {
    const url = await this._getUrlForProvider(`${this.url}/authorize`, provider, {
      redirectTo: options.redirectTo,
      scopes: options.scopes,
      queryParams: options.queryParams
    });
    this._debug("#_handleProviderSignIn()", "provider", provider, "options", options, "url", url);
    if (isBrowser() && !options.skipBrowserRedirect) {
      window.location.assign(url);
    }
    return { data: { provider, url }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var _a;
    const debugName = "#_recoverAndRefresh()";
    this._debug(debugName, "begin");
    try {
      const currentSession = await getItemAsync(this.storage, this.storageKey);
      this._debug(debugName, "session from storage", currentSession);
      if (!this._isValidSession(currentSession)) {
        this._debug(debugName, "session is not valid");
        if (currentSession !== null) {
          await this._removeSession();
        }
        return;
      }
      const timeNow = Math.round(Date.now() / 1e3);
      const expiresWithMargin = ((_a = currentSession.expires_at) !== null && _a !== void 0 ? _a : Infinity) < timeNow + EXPIRY_MARGIN;
      this._debug(debugName, `session has${expiresWithMargin ? "" : " not"} expired with margin of ${EXPIRY_MARGIN}s`);
      if (expiresWithMargin) {
        if (this.autoRefreshToken && currentSession.refresh_token) {
          const { error: error3 } = await this._callRefreshToken(currentSession.refresh_token);
          if (error3) {
            console.error(error3);
            if (!isAuthRetryableFetchError(error3)) {
              this._debug(debugName, "refresh failed with a non-retryable error, removing the session", error3);
              await this._removeSession();
            }
          }
        }
      } else {
        await this._notifyAllSubscribers("SIGNED_IN", currentSession);
      }
    } catch (err) {
      this._debug(debugName, "error", err);
      console.error(err);
      return;
    } finally {
      this._debug(debugName, "end");
    }
  }
  async _callRefreshToken(refreshToken) {
    var _a, _b;
    if (!refreshToken) {
      throw new AuthSessionMissingError();
    }
    if (this.refreshingDeferred) {
      return this.refreshingDeferred.promise;
    }
    const debugName = `#_callRefreshToken(${refreshToken.substring(0, 5)}...)`;
    this._debug(debugName, "begin");
    try {
      this.refreshingDeferred = new Deferred();
      const { data, error: error3 } = await this._refreshAccessToken(refreshToken);
      if (error3)
        throw error3;
      if (!data.session)
        throw new AuthSessionMissingError();
      await this._saveSession(data.session);
      await this._notifyAllSubscribers("TOKEN_REFRESHED", data.session);
      const result = { session: data.session, error: null };
      this.refreshingDeferred.resolve(result);
      return result;
    } catch (error3) {
      this._debug(debugName, "error", error3);
      if (isAuthError(error3)) {
        const result = { session: null, error: error3 };
        if (!isAuthRetryableFetchError(error3)) {
          await this._removeSession();
          await this._notifyAllSubscribers("SIGNED_OUT", null);
        }
        (_a = this.refreshingDeferred) === null || _a === void 0 ? void 0 : _a.resolve(result);
        return result;
      }
      (_b = this.refreshingDeferred) === null || _b === void 0 ? void 0 : _b.reject(error3);
      throw error3;
    } finally {
      this.refreshingDeferred = null;
      this._debug(debugName, "end");
    }
  }
  async _notifyAllSubscribers(event, session2, broadcast = true) {
    const debugName = `#_notifyAllSubscribers(${event})`;
    this._debug(debugName, "begin", session2, `broadcast = ${broadcast}`);
    try {
      if (this.broadcastChannel && broadcast) {
        this.broadcastChannel.postMessage({ event, session: session2 });
      }
      const errors = [];
      const promises = Array.from(this.stateChangeEmitters.values()).map(async (x) => {
        try {
          await x.callback(event, session2);
        } catch (e) {
          errors.push(e);
        }
      });
      await Promise.all(promises);
      if (errors.length > 0) {
        for (let i = 0; i < errors.length; i += 1) {
          console.error(errors[i]);
        }
        throw errors[0];
      }
    } finally {
      this._debug(debugName, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(session2) {
    this._debug("#_saveSession()", session2);
    this.suppressGetSessionWarning = true;
    await setItemAsync(this.storage, this.storageKey, session2);
  }
  async _removeSession() {
    this._debug("#_removeSession()");
    await removeItemAsync(this.storage, this.storageKey);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const callback = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      if (callback && isBrowser() && (window === null || window === void 0 ? void 0 : window.removeEventListener)) {
        window.removeEventListener("visibilitychange", callback);
      }
    } catch (e) {
      console.error("removing visibilitychange callback failed", e);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh();
    this._debug("#_startAutoRefresh()");
    const ticker = setInterval(() => this._autoRefreshTokenTick(), AUTO_REFRESH_TICK_DURATION);
    this.autoRefreshTicker = ticker;
    if (ticker && typeof ticker === "object" && typeof ticker.unref === "function") {
      ticker.unref();
    } else if (typeof Deno !== "undefined" && typeof Deno.unrefTimer === "function") {
      Deno.unrefTimer(ticker);
    }
    setTimeout(async () => {
      await this.initializePromise;
      await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const ticker = this.autoRefreshTicker;
    this.autoRefreshTicker = null;
    if (ticker) {
      clearInterval(ticker);
    }
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback();
    await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback();
    await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const now = Date.now();
          try {
            return await this._useSession(async (result) => {
              const { data: { session: session2 } } = result;
              if (!session2 || !session2.refresh_token || !session2.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const expiresInTicks = Math.floor((session2.expires_at * 1e3 - now) / AUTO_REFRESH_TICK_DURATION);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${expiresInTicks} ticks, a tick lasts ${AUTO_REFRESH_TICK_DURATION}ms, refresh threshold is ${AUTO_REFRESH_TICK_THRESHOLD} ticks`);
              if (expiresInTicks <= AUTO_REFRESH_TICK_THRESHOLD) {
                await this._callRefreshToken(session2.refresh_token);
              }
            });
          } catch (e) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", e);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof LockAcquireTimeoutError) {
        this._debug("auto refresh token tick lock not available");
      } else {
        throw e;
      }
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    this._debug("#_handleVisibilityChange()");
    if (!isBrowser() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) {
      if (this.autoRefreshToken) {
        this.startAutoRefresh();
      }
      return false;
    }
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(false);
      window === null || window === void 0 ? void 0 : window.addEventListener("visibilitychange", this.visibilityChangedCallback);
      await this._onVisibilityChanged(true);
    } catch (error3) {
      console.error("_handleVisibilityChange", error3);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(calledFromInitialize) {
    const methodName = `#_onVisibilityChanged(${calledFromInitialize})`;
    this._debug(methodName, "visibilityState", document.visibilityState);
    if (document.visibilityState === "visible") {
      if (this.autoRefreshToken) {
        this._startAutoRefresh();
      }
      if (!calledFromInitialize) {
        await this.initializePromise;
        await this._acquireLock(-1, async () => {
          if (document.visibilityState !== "visible") {
            this._debug(methodName, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
            return;
          }
          await this._recoverAndRefresh();
        });
      }
    } else if (document.visibilityState === "hidden") {
      if (this.autoRefreshToken) {
        this._stopAutoRefresh();
      }
    }
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(url, provider, options) {
    const urlParams = [`provider=${encodeURIComponent(provider)}`];
    if (options === null || options === void 0 ? void 0 : options.redirectTo) {
      urlParams.push(`redirect_to=${encodeURIComponent(options.redirectTo)}`);
    }
    if (options === null || options === void 0 ? void 0 : options.scopes) {
      urlParams.push(`scopes=${encodeURIComponent(options.scopes)}`);
    }
    if (this.flowType === "pkce") {
      const [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(this.storage, this.storageKey);
      const flowParams = new URLSearchParams({
        code_challenge: `${encodeURIComponent(codeChallenge)}`,
        code_challenge_method: `${encodeURIComponent(codeChallengeMethod)}`
      });
      urlParams.push(flowParams.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.queryParams) {
      const query = new URLSearchParams(options.queryParams);
      urlParams.push(query.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.skipBrowserRedirect) {
      urlParams.push(`skip_http_redirect=${options.skipBrowserRedirect}`);
    }
    return `${url}?${urlParams.join("&")}`;
  }
  async _unenroll(params) {
    try {
      return await this._useSession(async (result) => {
        var _a;
        const { data: sessionData, error: sessionError } = result;
        if (sessionError) {
          return { data: null, error: sessionError };
        }
        return await _request(this.fetch, "DELETE", `${this.url}/factors/${params.factorId}`, {
          headers: this.headers,
          jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
        });
      });
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: null, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * {@see GoTrueMFAApi#enroll}
   */
  async _enroll(params) {
    try {
      return await this._useSession(async (result) => {
        var _a, _b;
        const { data: sessionData, error: sessionError } = result;
        if (sessionError) {
          return { data: null, error: sessionError };
        }
        const { data, error: error3 } = await _request(this.fetch, "POST", `${this.url}/factors`, {
          body: {
            friendly_name: params.friendlyName,
            factor_type: params.factorType,
            issuer: params.issuer
          },
          headers: this.headers,
          jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
        });
        if (error3) {
          return { data: null, error: error3 };
        }
        if ((_b = data === null || data === void 0 ? void 0 : data.totp) === null || _b === void 0 ? void 0 : _b.qr_code) {
          data.totp.qr_code = `data:image/svg+xml;utf-8,${data.totp.qr_code}`;
        }
        return { data, error: null };
      });
    } catch (error3) {
      if (isAuthError(error3)) {
        return { data: null, error: error3 };
      }
      throw error3;
    }
  }
  /**
   * {@see GoTrueMFAApi#verify}
   */
  async _verify(params) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (result) => {
          var _a;
          const { data: sessionData, error: sessionError } = result;
          if (sessionError) {
            return { data: null, error: sessionError };
          }
          const { data, error: error3 } = await _request(this.fetch, "POST", `${this.url}/factors/${params.factorId}/verify`, {
            body: { code: params.code, challenge_id: params.challengeId },
            headers: this.headers,
            jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
          });
          if (error3) {
            return { data: null, error: error3 };
          }
          await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + data.expires_in }, data));
          await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", data);
          return { data, error: error3 };
        });
      } catch (error3) {
        if (isAuthError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challenge}
   */
  async _challenge(params) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (result) => {
          var _a;
          const { data: sessionData, error: sessionError } = result;
          if (sessionError) {
            return { data: null, error: sessionError };
          }
          return await _request(this.fetch, "POST", `${this.url}/factors/${params.factorId}/challenge`, {
            headers: this.headers,
            jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
          });
        });
      } catch (error3) {
        if (isAuthError(error3)) {
          return { data: null, error: error3 };
        }
        throw error3;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(params) {
    const { data: challengeData, error: challengeError } = await this._challenge({
      factorId: params.factorId
    });
    if (challengeError) {
      return { data: null, error: challengeError };
    }
    return await this._verify({
      factorId: params.factorId,
      challengeId: challengeData.id,
      code: params.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    const { data: { user }, error: userError } = await this.getUser();
    if (userError) {
      return { data: null, error: userError };
    }
    const factors = (user === null || user === void 0 ? void 0 : user.factors) || [];
    const totp = factors.filter((factor) => factor.factor_type === "totp" && factor.status === "verified");
    return {
      data: {
        all: factors,
        totp
      },
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(-1, async () => {
      return await this._useSession(async (result) => {
        var _a, _b;
        const { data: { session: session2 }, error: sessionError } = result;
        if (sessionError) {
          return { data: null, error: sessionError };
        }
        if (!session2) {
          return {
            data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
            error: null
          };
        }
        const payload = this._decodeJWT(session2.access_token);
        let currentLevel = null;
        if (payload.aal) {
          currentLevel = payload.aal;
        }
        let nextLevel = currentLevel;
        const verifiedFactors = (_b = (_a = session2.user.factors) === null || _a === void 0 ? void 0 : _a.filter((factor) => factor.status === "verified")) !== null && _b !== void 0 ? _b : [];
        if (verifiedFactors.length > 0) {
          nextLevel = "aal2";
        }
        const currentAuthenticationMethods = payload.amr || [];
        return { data: { currentLevel, nextLevel, currentAuthenticationMethods }, error: null };
      });
    });
  }
};
GoTrueClient.nextInstanceID = 0;

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/AuthAdminApi.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/AuthClient.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var AuthClient = GoTrueClient;
var AuthClient_default = AuthClient;

// node_modules/.pnpm/@supabase+auth-js@2.64.2/node_modules/@supabase/auth-js/dist/module/lib/types.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@supabase+supabase-js@2.43.5/node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js
var SupabaseAuthClient = class extends AuthClient_default {
  static {
    __name(this, "SupabaseAuthClient");
  }
  constructor(options) {
    super(options);
  }
};

// node_modules/.pnpm/@supabase+supabase-js@2.43.5/node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js
var __awaiter7 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var SupabaseClient = class {
  static {
    __name(this, "SupabaseClient");
  }
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   */
  constructor(supabaseUrl, supabaseKey, options) {
    var _a, _b, _c;
    this.supabaseUrl = supabaseUrl;
    this.supabaseKey = supabaseKey;
    if (!supabaseUrl)
      throw new Error("supabaseUrl is required.");
    if (!supabaseKey)
      throw new Error("supabaseKey is required.");
    const _supabaseUrl = stripTrailingSlash(supabaseUrl);
    this.realtimeUrl = `${_supabaseUrl}/realtime/v1`.replace(/^http/i, "ws");
    this.authUrl = `${_supabaseUrl}/auth/v1`;
    this.storageUrl = `${_supabaseUrl}/storage/v1`;
    this.functionsUrl = `${_supabaseUrl}/functions/v1`;
    const defaultStorageKey = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`;
    const DEFAULTS = {
      db: DEFAULT_DB_OPTIONS,
      realtime: DEFAULT_REALTIME_OPTIONS,
      auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), { storageKey: defaultStorageKey }),
      global: DEFAULT_GLOBAL_OPTIONS
    };
    const settings = applySettingDefaults(options !== null && options !== void 0 ? options : {}, DEFAULTS);
    this.storageKey = (_a = settings.auth.storageKey) !== null && _a !== void 0 ? _a : "";
    this.headers = (_b = settings.global.headers) !== null && _b !== void 0 ? _b : {};
    this.auth = this._initSupabaseAuthClient((_c = settings.auth) !== null && _c !== void 0 ? _c : {}, this.headers, settings.global.fetch);
    this.fetch = fetchWithAuth(supabaseKey, this._getAccessToken.bind(this), settings.global.fetch);
    this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers }, settings.realtime));
    this.rest = new PostgrestClient(`${_supabaseUrl}/rest/v1`, {
      headers: this.headers,
      schema: settings.db.schema,
      fetch: this.fetch
    });
    this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new FunctionsClient(this.functionsUrl, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
   * Supabase Storage allows you to manage user-generated content, such as photos or videos.
   */
  get storage() {
    return new StorageClient(this.storageUrl, this.headers, this.fetch);
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(relation) {
    return this.rest.from(relation);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.schema
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(schema) {
    return this.rest.schema(schema);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.rpc
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(fn, args = {}, options = {}) {
    return this.rest.rpc(fn, args, options);
  }
  /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */
  channel(name, opts = { config: {} }) {
    return this.realtime.channel(name, opts);
  }
  /**
   * Returns all Realtime channels.
   */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */
  removeChannel(channel2) {
    return this.realtime.removeChannel(channel2);
  }
  /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var _a, _b;
    return __awaiter7(this, void 0, void 0, function* () {
      const { data } = yield this.auth.getSession();
      return (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : null;
    });
  }
  _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, storage, storageKey, flowType, debug: debug3 }, headers, fetch4) {
    var _a;
    const authHeaders = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new SupabaseAuthClient({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, authHeaders), headers),
      storageKey,
      autoRefreshToken,
      persistSession,
      detectSessionInUrl,
      storage,
      flowType,
      debug: debug3,
      fetch: fetch4,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: (_a = "Authorization" in this.headers) !== null && _a !== void 0 ? _a : false
    });
  }
  _initRealtimeClient(options) {
    return new RealtimeClient(this.realtimeUrl, Object.assign(Object.assign({}, options), { params: Object.assign({ apikey: this.supabaseKey }, options === null || options === void 0 ? void 0 : options.params) }));
  }
  _listenForAuthEvents() {
    let data = this.auth.onAuthStateChange((event, session2) => {
      this._handleTokenChanged(event, "CLIENT", session2 === null || session2 === void 0 ? void 0 : session2.access_token);
    });
    return data;
  }
  _handleTokenChanged(event, source, token) {
    if ((event === "TOKEN_REFRESHED" || event === "SIGNED_IN") && this.changedAccessToken !== token) {
      this.realtime.setAuth(token !== null && token !== void 0 ? token : null);
      this.changedAccessToken = token;
    } else if (event === "SIGNED_OUT") {
      this.realtime.setAuth(this.supabaseKey);
      if (source == "STORAGE")
        this.auth.signOut();
      this.changedAccessToken = void 0;
    }
  }
};

// node_modules/.pnpm/@supabase+supabase-js@2.43.5/node_modules/@supabase/supabase-js/dist/module/index.js
var createClient = /* @__PURE__ */ __name((supabaseUrl, supabaseKey, options) => {
  return new SupabaseClient(supabaseUrl, supabaseKey, options);
}, "createClient");

// src/utils/MsgHelper.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_format = __toESM(require_format2());

// package.json
var package_default = {
  name: "bbbot",
  version: "1.1.3",
  description: "",
  main: "index.ts",
  scripts: {
    test: 'echo "Error: no test specified" && exit 1',
    start: "cross-env NODE_ENV=prod node build/bbbot.js",
    release: "cross-env NODE_ENV=prod && node build/build.mjs",
    dev: "cross-env NODE_ENV=prod ts-node src/index.ts",
    "dev-local": "cross-env NODE_TLS_REJECT_UNAUTHORIZED=0 GLOBAL_AGENT_HTTPS_PROXY=http://127.0.0.1:7891 NODE_ENV=dev ts-node src/index.ts",
    "dev:worker": "wrangler dev src/worker.ts",
    deploy: "wrangler deploy"
  },
  keywords: [],
  author: "",
  license: "ISC",
  dependencies: {
    "@supabase/supabase-js": "^2.43.5",
    "@telegraf/session": "2.0.0-beta.7",
    "@types/node": "^20.14.8",
    "@types/node-fetch": "^2.6.12",
    dotenv: "^16.4.5",
    googleapis: "^144.0.0",
    kysely: "^0.27.3",
    "node-cron": "^3.0.3",
    "node-fetch": "^2.6.1",
    pg: "^8.12.0",
    showdown: "^2.1.0",
    telegraf: "^4.16.3"
  },
  devDependencies: {
    "@telegraf/types": "^7.1.0",
    "@types/global-agent": "^2.1.3",
    "@types/node-cron": "^3.0.11",
    "@types/pg": "^8.11.6",
    "@types/showdown": "^2.0.6",
    "cross-env": "^7.0.3",
    esbuild: "0.24.0",
    "global-agent": "^3.0.0",
    "ts-node": "^10.9.2",
    typescript: "^5.5.2",
    wrangler: "^3.84.0"
  }
};

// src/utils/MsgHelper.ts
var import_showdown = __toESM(require_showdown());
var import_telegraf = __toESM(require_lib());

// src/commands/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/commands/LoginCommand.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/consts/MsgConst.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var MsgConst = class {
  static {
    __name(this, "MsgConst");
  }
  static LoginTips = "Please /login first.";
  static PostLinkPrefix = "Post is ready: https://bbki.ng/blog/";
  static DeleteMsgFailed = "Failed to delete message.";
  static LoginMethods = "Login Methods: ";
};

// src/commands/LoginCommand.ts
var LoginCommand = class {
  static {
    __name(this, "LoginCommand");
  }
  command;
  description;
  constructor() {
    this.command = "login";
    this.description = "Login to https://bbki.ng";
  }
  handler = /* @__PURE__ */ __name((ctx) => {
    DataBase.getInstance().SignIn().then((res) => {
      if (res.error) {
        console.error(res.error);
        return;
      }
      return ctx.reply(MsgConst.LoginMethods, MsgHelper.UrlBtn("Github", res.data.url));
    }).catch(console.error);
  }, "handler");
};

// src/commands/WhoAmI.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var WhoAmI = class {
  static {
    __name(this, "WhoAmI");
  }
  command;
  description;
  constructor() {
    this.command = "whoami";
    this.description = "Get user's email.";
  }
  handler = /* @__PURE__ */ __name(async (ctx, next) => {
    if (!ctx.session.SupabaseUser) {
      return ctx.reply("You are not logged in.");
    }
    return ctx.reply(
      ctx.session.SupabaseUser?.email ?? ctx.session.SupabaseUser?.id ?? "Unknown email address."
    );
  }, "handler");
};

// src/commands/Logout.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Logout = class {
  static {
    __name(this, "Logout");
  }
  command;
  description;
  constructor() {
    this.command = "logout";
    this.description = "Logout from https://bbki.ng";
  }
  handler = /* @__PURE__ */ __name(async (ctx) => {
    ctx.session.SupabaseSession = void 0;
    ctx.session.SupabaseUser = void 0;
    return ctx.reply("You are logged out.");
  }, "handler");
};

// src/commands/Avatar.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Avatar = class {
  static {
    __name(this, "Avatar");
  }
  command;
  description;
  constructor() {
    this.command = "avatar";
    this.description = "Get bbki.ng's logo";
  }
  handler = /* @__PURE__ */ __name((ctx) => {
    return ctx.replyWithPhoto("https://bbki.ng/pwa-512x512.png");
  }, "handler");
};

// src/commands/Help.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Help = class {
  static {
    __name(this, "Help");
  }
  command;
  description;
  constructor() {
    this.command = "help";
    this.description = "Get all commands' description";
  }
  handler = /* @__PURE__ */ __name((ctx) => {
    return ctx.reply(MsgHelper.GetCommandsDescription());
  }, "handler");
};

// src/commands/index.ts
var Commands = [
  new LoginCommand(),
  new Logout(),
  new WhoAmI(),
  new Avatar(),
  new Help()
];

// src/utils/MsgHelper.ts
import_showdown.default.setFlavor("github");
var converter = new import_showdown.default.Converter();
var MsgHelper = class {
  static {
    __name(this, "MsgHelper");
  }
  static GetInitSuccessMessage(format) {
    const originMessage = `Bot ${package_default.version} is ready.`;
    const entities = [{
      type: "bold",
      offset: 4,
      length: package_default.version.length
    }];
    return new import_format.FmtString(originMessage, entities);
  }
  static Md2Html(msg) {
    return converter.makeHtml(msg);
  }
  static UrlBtn(text, url) {
    return import_telegraf.Markup.inlineKeyboard([
      import_telegraf.Markup.button.url(text, url)
    ]);
  }
  static GetCommandsDescription() {
    return Commands.map((c) => `${c.command} - ${c.description}`).join("\n");
  }
};

// src/runtime.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var runtimeEnv;
var runtimeBindings;
var setRuntimeEnv = /* @__PURE__ */ __name((env2) => {
  runtimeEnv = env2;
}, "setRuntimeEnv");
var setRuntimeBindings = /* @__PURE__ */ __name((bindings) => {
  runtimeBindings = bindings;
}, "setRuntimeBindings");
var getEnv = /* @__PURE__ */ __name((key) => {
  return runtimeEnv?.[key] ?? globalThis?.process?.env?.[key];
}, "getEnv");
var requireEnv = /* @__PURE__ */ __name((key) => {
  const value = getEnv(key);
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}, "requireEnv");

// src/utils/DataBase.ts
var DataBase = class _DataBase {
  static {
    __name(this, "DataBase");
  }
  static instance;
  supabase;
  constructor() {
    const sbUrl = requireEnv("SUPABASE_URL");
    const sbAnno = requireEnv("SUPABASE_ANNO_KEY");
    if (!sbUrl || !sbAnno) {
      throw new Error("Supabase URL or Anno Key is not set");
    }
    this.supabase = createClient(sbUrl, sbAnno, {
      auth: {
        flowType: "pkce"
      }
    });
  }
  async SignIn() {
    const client = this.supabase.auth;
    return await client.signInWithOAuth({
      provider: "github" /* GITHUB */,
      options: {
        redirectTo: requireEnv("SITE_URL")
      }
    });
  }
  SetSess(s) {
    if (!s) {
      return;
    }
    return this.supabase.auth.setSession({
      access_token: s.access_token,
      refresh_token: s.refresh_token
    });
  }
  async CreatePost(title2, body) {
    return this.supabase.from("post").upsert({
      title: title2,
      content: MsgHelper.Md2Html(body)
    });
  }
  async UpdateMovieList(name, link3) {
    return this.supabase.from("movie").upsert({
      name,
      link: link3,
      status: "\u770B\u8FC7",
      visible: 1
    });
  }
  async ExchangeCode(code) {
    return await this.supabase.auth.exchangeCodeForSession(code);
  }
  static getInstance() {
    if (!_DataBase.instance) {
      _DataBase.instance = new _DataBase();
    }
    return _DataBase.instance;
  }
};

// src/middlewares/login/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Login = /* @__PURE__ */ __name(async (ctx) => {
  if (ctx.payload == "") {
    return ctx.reply("Welcome.");
  }
  const db = DataBase.getInstance();
  console.log("code", ctx.payload);
  return db.ExchangeCode(ctx.payload).then((res) => {
    if (res.error) {
      console.error(res.error);
      ctx.reply("Login Failed. " + res.error);
      return;
    }
    const data = res.data;
    ctx.session.SupabaseSession = data.session;
    ctx.session.SupabaseUser = data.user;
    DataBase.getInstance().SetSess(data.session);
    return ctx.reply("Hi, " + data.user.email);
  }).catch((e) => {
    console.error(e.message);
    return ctx.reply("Login Failed. " + e.message);
  });
}, "Login");
var Anonymous = /* @__PURE__ */ __name((ctx) => !ctx.session?.SupabaseSession || !ctx.session?.SupabaseUser, "Anonymous");
var HasLogin = /* @__PURE__ */ __name((ctx) => !Anonymous(ctx), "HasLogin");
var LoginTips = /* @__PURE__ */ __name(async (t) => {
  return t.reply("Please /login first.");
}, "LoginTips");
var AdminRequired = /* @__PURE__ */ __name((ctx) => {
  if (Anonymous(ctx)) {
    return false;
  }
  return !!(ctx.session.SupabaseUser && ctx.session.SupabaseUser.email === getEnv("ADMIN_EMAIL"));
}, "AdminRequired");

// src/middlewares/post/index.ts
var Post = /* @__PURE__ */ __name(async (ctx, next) => {
  if (!ctx.message) {
    return next();
  }
  if (!("text" in ctx.message)) {
    return next();
  }
  if (!ctx.session.SupabaseSession) {
    return ctx.reply(MsgConst.LoginTips);
  }
  const lines = ctx.message.text.split("\n");
  if (lines.length < 2) {
    return next();
  }
  const title2 = lines[0];
  const body = lines.slice(1).join("\n");
  const res = await DataBase.getInstance().CreatePost(title2, body);
  console.log(res);
  if (res.error) {
    return ctx.reply(res.error.message);
  }
  try {
    await ctx.telegram.deleteMessage(ctx.chat?.id, ctx.message.message_id);
  } catch {
    await ctx.reply(MsgConst.DeleteMsgFailed);
  }
  return ctx.reply(MsgConst.PostLinkPrefix + title2);
}, "Post");
var CreatePost = import_telegraf2.Composer.optional(AdminRequired, Post);
var notText = /* @__PURE__ */ __name((ctx) => !(ctx.message && "text" in ctx.message), "notText");
var CreateTextPost = import_telegraf2.Composer.compose([import_telegraf2.Composer.drop(notText), CreatePost]);

// src/middlewares/session/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_telegraf3 = __toESM(require_lib());
var createKvSessionStore = /* @__PURE__ */ __name((kv, ttlSeconds = 60 * 60 * 24 * 30) => ({
  async get(key) {
    const value = await kv.get(key);
    return value ? JSON.parse(value) : void 0;
  },
  async set(key, value) {
    await kv.put(key, JSON.stringify(value), { expirationTtl: ttlSeconds });
  },
  async delete(key) {
    await kv.delete(key);
  }
}), "createKvSessionStore");
var createSessionMiddleware = /* @__PURE__ */ __name((store) => (0, import_telegraf3.session)({ store }), "createSessionMiddleware");
var SessionRestore = import_telegraf3.Composer.optional(HasLogin, async (ctx, next) => {
  await DataBase.getInstance().SetSess(ctx.session.SupabaseSession);
  return next();
});

// src/stage/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_telegraf4 = __toESM(require_lib());
var stage = new import_telegraf4.Scenes.Stage([]);

// src/bbbot.ts
var BBBot = class _BBBot {
  static {
    __name(this, "BBBot");
  }
  bot;
  initialized = false;
  static instance;
  constructor() {
  }
  static GetInstance() {
    if (!_BBBot.instance) {
      _BBBot.instance = new _BBBot();
    }
    return _BBBot.instance;
  }
  config() {
    if (globalThis?.process) {
      process.once("SIGINT", () => Bot.Stop("SIGINT"));
      process.once("SIGTERM", () => Bot.Stop("SIGTERM"));
    }
  }
  init(options = {}) {
    if (this.initialized) {
      return;
    }
    this.bot = new import_telegraf5.Telegraf(requireEnv("BOT_TOKEN"));
    this.bot.use(createSessionMiddleware(options.sessionStore), SessionRestore);
    this.bot.start(Login);
    this.InitCommands();
    this.bot.use(CreateTextPost);
    if (options.notifyOnStart !== false) {
      this.TellAdmin(MsgHelper.GetInitSuccessMessage());
    }
    this.initialized = true;
  }
  launchPolling() {
    this.init();
    return this.bot.launch();
  }
  handleUpdate(update) {
    return this.bot.handleUpdate(update);
  }
  InitCommands() {
    this.bot.use(stage.middleware());
    Commands.forEach((c) => {
      const handler = c.needAdmin ? import_telegraf5.Composer.branch(AdminRequired, c.handler, LoginTips) : c.handler;
      this.bot.command(c.command, handler);
    });
  }
  TellAdmin(msg) {
    console.log(msg.text);
    this.bot.telegram.sendMessage(requireEnv("ADMIN_ID"), msg).then(this.Noop).catch(console.error);
  }
  SendMsgToAdmin(msg) {
    this.bot.telegram.sendMessage(requireEnv("ADMIN_ID"), msg).then(this.Noop).catch(console.error);
  }
  Noop() {
  }
  Stop(sigint) {
    this.bot.stop(sigint);
  }
};
var Bot = BBBot.GetInstance();

// src/worker.ts
var worker_default = {
  async fetch(request3, env2) {
    const { SESSION_KV, ...stringEnv } = env2;
    setRuntimeEnv(stringEnv);
    setRuntimeBindings({ SESSION_KV });
    Bot.init({
      sessionStore: env2.SESSION_KV ? createKvSessionStore(env2.SESSION_KV) : void 0,
      notifyOnStart: false
    });
    const url = new URL(request3.url);
    const webhookPath = `/telegram/${requireEnv("WEBHOOK_SECRET")}`;
    if (request3.method === "POST" && url.pathname === webhookPath) {
      const update = await request3.json();
      await Bot.handleUpdate(update);
      return new Response("OK");
    }
    if (request3.method === "GET" && url.pathname === "/") {
      return new Response("OK");
    }
    return new Response("Not Found", { status: 404 });
  }
};

// ../../Library/pnpm/global/5/.pnpm/wrangler@4.58.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request3, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request3, env2);
  } finally {
    try {
      if (request3.body !== null && !request3.bodyUsed) {
        const reader = request3.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../Library/pnpm/global/5/.pnpm/wrangler@4.58.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request3, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request3, env2);
  } catch (e) {
    const error3 = reduceError(e);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-fLKFiF/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;

// ../../Library/pnpm/global/5/.pnpm/wrangler@4.58.0/node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request3, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request3, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request3, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request3, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-fLKFiF/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request3, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request3, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request3, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request3, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request3, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request3);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request3) {
      return __facade_invoke__(
        request3,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

sandwich-stream/dist/sandwich-stream.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)

showdown/dist/showdown.js:
  (*! showdown v 2.1.0 - 21-04-2022 *)
*/
//# sourceMappingURL=worker.js.map
