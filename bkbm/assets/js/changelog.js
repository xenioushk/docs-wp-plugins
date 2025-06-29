$(function () {
  // Update the log text
  function updatesLogTag(string) {
    let Obj = {
      "Added:": "<b>🚀 Added:</b>",
      "Updated:": "<b>🔥 Updated:</b>",
      "Fixed:": "<b>✅ Fixed:</b>",
      "Removed:": "<b>❌ Removed:</b>",
    }

    return string.replace(/Added:|Updated:|Fixed:|Removed:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateDynamicLog(data) {
    const $dynamic_log = $("#dynamic_log")
    const commonLogText = "<b>🔥 Updated:</b> Plugin translation file & documentation."
    if ($dynamic_log.length) {
      data.forEach((element) => {
        var outputHtml = "<div>"

        outputHtml += `<p class="log_date">` + element[0] + `</p>`

        if (element[1].length > 0) {
          // console.log(element[1])

          outputHtml += `<ul class="square-list">`

          element[1].forEach((log) => {
            outputHtml += `<li>` + updatesLogTag(log) + `</li>`
          })

          outputHtml += `<li>` + commonLogText + `</li>`
          outputHtml += `</ul>`
        }

        outputHtml += "</div>"

        $dynamic_log.before(outputHtml)
      })
    } else {
      alert("#dynamic_log is missing. Example: srcare doc")
    }
  }

  // Update Version and Last Update Info

  function updateMetaInfo(metaData) {
    const $lastUpdate = $(".update"),
      $ver = $(".ver")

    if ($lastUpdate.length) {
      $ver.html("").html(metaData[0])
      $lastUpdate.html("").html(metaData[1])
    } else {
      alert(".update is missing. Example: srcare doc")
    }
  }
  // Change only the version and date
  var metaData = ["1.6.3", "24/06/2025"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2025, June, 24 - v 1.6.3", ["Fixed: Table of Content hide issue."]],
    ["2025, May, 30 - v 1.6.2", ["Fixed: Admin panel Custom post type taxonomy filter issue.", "Updated: Plugin for WordPress 6.8.1"]],
    ["2025, May, 25 - v 1.6.1", ["Fixed: License notice for Knowledgedesk WordPress theme.", "Updated: Plugin shortcode editor sub-category display issue.", "Updated: Plugin dashboard widget icon."]],
    ["2025, May, 24 - v 1.6.0", ["Updated: Plugin shortcode editor icon and overlay issue for Gutenberg editor.", "Updated: Plugin Scheduler functions bug.", "Updated: Plugin Custom and sortable columns.", "Updated: Plugin dashboard widget and notices."]],
    ["2025, May, 13 - v 1.5.9", ["Fixed: Plugin options panel translation issue."]],
    ["2025, April, 18 - v 1.5.8", ["Updated: Plugin custom post type constants.", "Updated: Plugin counter list style.", "Fixed: Single post permalink issue."]],
    ["2025, April, 12 - v 1.5.7", ["Updated: Plugin constants file.", "Updated: Plugin language file.", "Fixed: Search box shortcode animation bug.", "Fixed: List style css.", "Updated: Plugin for WooCommerce 9.8.1", "Updated: Plugin for WP Bakery Page Builder 8.3.1"]],
    ["2025, March, 29 - v 1.5.6", ["Updated: Plugin options panel tabs and content.", "Fixed: Plugin automatic update feature.", "Updated: KB post view counter.", "Updated: Plugin for WordPress 6.7.2", "Updated: Plugin for WooCommerce 9.7.2"]],
    ["2024, December, 10 - v 1.5.5", ["Updated: Plugin for WordPress 6.7.1", "Updated: Plugin for WooCommerce 9.4.3"]],
    ["2024, September, 22 - v 1.5.4", ["Updated: Plugin for WordPress 6.6.2"]],
    ["2024, August, 10 - v 1.5.3", ["Updated: Plugin for WordPress 6.6.1"]],
    ["2024, July, 16 - v 1.5.2", ["Updated: Plugin for WordPress 6.6"]],
    ["2024, July, 16 - v 1.5.2", ["Added: Offline purchase verification.", "Updated: Plugin for WordPress 6.5.5"]],
    ["2024, June, 20 - v 1.5.1", ["Fixed: Email issue for external question submission.", "Updated: Plugin for WordPress 6.5.4"]],
    ["2024, March, 12 - v 1.5.0", ["Updated: Plugin Code.", "Updated: Plugin for WordPress 6.4.3"]],
    ["2024, January, 04 - v 1.4.9", ["Fixed: KB Accordion Layout.", "Fixed: Shortcode save issue for Gutenberg editor.", "Updated: Plugin for WordPress 6.4.2"]],
    ["2023, September, 01 - v 1.4.8", ["Fixed: Plugin shortcode issues.", "Updated: Plugin Code.", "Updated: Restrict KB Access by User Role to 1.0.8"]],
  ]
  generateDynamicLog(changeLogData)
})
